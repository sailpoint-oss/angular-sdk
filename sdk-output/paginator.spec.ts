import { describe, expect, it, vi } from 'vitest';
import { Observable, of, throwError } from 'rxjs';
import { Paginator } from './paginator';

type Item = { id: number };

/** A page of `count` items, as a list service returns it. */
function page(count: number): Observable<Item[]> {
  return of(Array.from({ length: count }, (_, i) => ({ id: i })));
}

/** The error shape Angular reports for an HTTP failure. */
function httpError(status: number): Observable<never> {
  const error: any = new Error(`Http failure response: ${status}`);
  error.status = status;
  return throwError(() => error);
}

/** Resolve an Observable that emits once and completes. */
function firstValue<T>(source: Observable<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    source.subscribe({ next: resolve, error: reject });
  });
}

/** Collect every emission of an Observable. */
function allValues<T>(source: Observable<T>): Promise<T[]> {
  return new Promise((resolve, reject) => {
    const seen: T[] = [];
    source.subscribe({
      next: (value) => seen.push(value),
      error: reject,
      complete: () => resolve(seen),
    });
  });
}

describe('Paginator.paginate', () => {
  it('returns all results when the total is less than the increment', async () => {
    const callFn = vi.fn().mockReturnValueOnce(page(123));

    const result = await firstValue(Paginator.paginate(callFn, undefined, 250));

    expect(result).toHaveLength(123);
    expect(callFn).toHaveBeenCalledTimes(1);
  });

  it('returns all results across a full page and a partial page', async () => {
    const callFn = vi.fn()
      .mockReturnValueOnce(page(250))
      .mockReturnValueOnce(page(87));

    const result = await firstValue(Paginator.paginate(callFn, undefined, 250));

    expect(result).toHaveLength(337);
    expect(callFn).toHaveBeenCalledTimes(2);
  });

  it('returns all results when the total is an exact multiple of the increment', async () => {
    // The API answers 4xx for the page past the end rather than an empty list,
    // so the paginator has to keep what it already collected.
    const callFn = vi.fn()
      .mockReturnValueOnce(page(250))
      .mockReturnValueOnce(page(250))
      .mockReturnValueOnce(httpError(400));

    const result = await firstValue(Paginator.paginate(callFn, undefined, 250));

    expect(result).toHaveLength(500);
    expect(callFn).toHaveBeenCalledTimes(3);
  });

  it('stops at the total that limit asks for', async () => {
    const callFn = vi.fn()
      .mockReturnValueOnce(page(100))
      .mockReturnValueOnce(page(100));

    const result = await firstValue(
      Paginator.paginate(callFn, { limit: 200 }, 100)
    );

    expect(result).toHaveLength(200);
    expect(callFn).toHaveBeenCalledTimes(2);
  });

  it('advances the offset one page at a time', async () => {
    const callFn = vi.fn()
      .mockReturnValueOnce(page(250))
      .mockReturnValueOnce(page(10));

    await firstValue(Paginator.paginate(callFn, undefined, 250));

    expect(callFn.mock.calls[0][0]).toMatchObject({ limit: 250, offset: 0 });
    expect(callFn.mock.calls[1][0]).toMatchObject({ limit: 250, offset: 250 });
  });

  it('passes filters and sorters through to every page', async () => {
    const callFn = vi.fn()
      .mockReturnValueOnce(page(250))
      .mockReturnValueOnce(page(1));

    await firstValue(
      Paginator.paginate(callFn, { filters: 'name sw "a"', sorters: '-created' }, 250)
    );

    for (const call of callFn.mock.calls) {
      expect(call[0]).toMatchObject({ filters: 'name sw "a"', sorters: '-created' });
    }
  });

  it('re-throws a 4xx error raised on the first page', async () => {
    const callFn = vi.fn().mockReturnValueOnce(httpError(400));

    await expect(
      firstValue(Paginator.paginate(callFn, undefined, 250))
    ).rejects.toMatchObject({ status: 400 });
  });

  it('re-throws a 5xx error raised on a later page', async () => {
    const callFn = vi.fn()
      .mockReturnValueOnce(page(250))
      .mockReturnValueOnce(httpError(500));

    await expect(
      firstValue(Paginator.paginate(callFn, undefined, 250))
    ).rejects.toMatchObject({ status: 500 });
  });
});

describe('Paginator.paginatePages', () => {
  it('emits one page at a time', async () => {
    const callFn = vi.fn()
      .mockReturnValueOnce(page(250))
      .mockReturnValueOnce(page(87));

    const pages = await allValues(Paginator.paginatePages(callFn, undefined, 250));

    expect(pages.map((p) => p.length)).toStrictEqual([250, 87]);
  });

  it('completes without an error when the page past the end answers 4xx', async () => {
    const callFn = vi.fn()
      .mockReturnValueOnce(page(250))
      .mockReturnValueOnce(httpError(400));

    const pages = await allValues(Paginator.paginatePages(callFn, undefined, 250));

    expect(pages.map((p) => p.length)).toStrictEqual([250]);
  });

  it('re-throws a 4xx error raised on the first page', async () => {
    const callFn = vi.fn().mockReturnValueOnce(httpError(400));

    await expect(
      allValues(Paginator.paginatePages(callFn, undefined, 250))
    ).rejects.toMatchObject({ status: 400 });
  });
});
