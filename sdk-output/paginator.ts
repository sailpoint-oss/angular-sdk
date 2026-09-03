import { Observable, EMPTY, expand, reduce, catchError, throwError } from 'rxjs';

/**
 * Standard collection parameters supported by SailPoint list endpoints.
 *
 * @see https://developer.sailpoint.com/idn/api/standard-collection-parameters
 */
export interface PaginationParams {
  /**
   * Maximum number of results to return in total.
   * Set to `0` (default) to return all results.
   */
  limit?: number;
  /** Starting offset into the full result set. */
  offset?: number;
  /** Server-side filter expression. */
  filters?: string;
  /** Sort expression (e.g. `"name"` or `"-created"`). */
  sorters?: string;
  /** Any additional parameters accepted by the specific endpoint. */
  [key: string]: unknown;
}

type ListFn<T, P extends PaginationParams> = (params: P) => Observable<T[]>;

/**
 * Angular-native paginator for SailPoint ISC list endpoints.
 *
 * All SailPoint list services return `Observable<T[]>`. `Paginator` wraps the
 * repeated paging loop in a single `Observable<T[]>` that emits once with the
 * full accumulated result set.
 *
 * @example
 * ```typescript
 * // Collect all accounts (auto-paging in chunks of 250):
 * Paginator.paginate(
 *   (p) => accountsService.listAccountsV1(p),
 * ).subscribe(allAccounts => console.log(allAccounts.length));
 *
 * // Collect at most 500 accounts in chunks of 100:
 * Paginator.paginate(
 *   (p) => accountsService.listAccountsV1(p),
 *   { limit: 500 },
 *   100
 * ).subscribe(accounts => ...);
 *
 * // Stream page-by-page:
 * Paginator.paginatePages(
 *   (p) => identitiesService.listIdentitiesV1(p),
 * ).subscribe(page => console.log('got page', page));
 * ```
 */
export class Paginator {
  /**
   * Accumulates **all** pages into a single array and emits once on completion.
   *
   * @param callFn     Function that calls the list endpoint.
   * @param params     Optional base parameters (filters, sorters, initial offset).
   *                   `limit` is treated as the *total* cap (0 = unlimited).
   * @param increment  Number of records to fetch per page. Default: `250`.
   */
  static paginate<T, P extends PaginationParams = PaginationParams>(
    callFn: ListFn<T, P>,
    params?: Omit<P, 'limit' | 'offset'> & { limit?: number; offset?: number },
    increment = 250
  ): Observable<T[]> {
    const maxTotal = params?.limit ?? 0;
    const baseOffset = params?.offset ?? 0;

    let offset = baseOffset;
    let totalFetched = 0;

    const fetchPage = (): Observable<T[]> => {
      const pageLimit =
        maxTotal > 0
          ? Math.min(increment, maxTotal - totalFetched)
          : increment;

      return callFn({ ...(params as P), limit: pageLimit, offset });
    };

    return fetchPage().pipe(
      expand((page) => {
        totalFetched += page.length;
        offset += page.length;

        const done =
          page.length < increment ||
          (maxTotal > 0 && totalFetched >= maxTotal);

        return done ? EMPTY : fetchPage();
      }),
      // Accumulate all pages
      reduce<T[], T[]>((all, page) => [...all, ...page], []),
      // Gracefully handle 4xx on an out-of-bounds page when we already have data
      catchError((err, caught) => {
        if (
          totalFetched > 0 &&
          err?.status >= 400 &&
          err?.status < 500
        ) {
          // Return what we have so far — happens when total count is an exact
          // multiple of increment and the API returns 4xx instead of [].
          return new Observable<T[]>((sub) => {
            sub.next([]);
            sub.complete();
          });
        }
        return throwError(() => err);
      })
    );
  }

  /**
   * Emits **one page at a time** as an `Observable<T[]>`.
   * Each emission is a single page from the API.
   *
   * @param callFn     Function that calls the list endpoint.
   * @param params     Optional base parameters. `limit` caps the *total* records.
   * @param increment  Number of records per page. Default: `250`.
   */
  static paginatePages<T, P extends PaginationParams = PaginationParams>(
    callFn: ListFn<T, P>,
    params?: Omit<P, 'limit' | 'offset'> & { limit?: number; offset?: number },
    increment = 250
  ): Observable<T[]> {
    const maxTotal = params?.limit ?? 0;
    const baseOffset = params?.offset ?? 0;

    let offset = baseOffset;
    let totalFetched = 0;

    const fetchPage = (): Observable<T[]> => {
      const pageLimit =
        maxTotal > 0
          ? Math.min(increment, maxTotal - totalFetched)
          : increment;

      return callFn({ ...(params as P), limit: pageLimit, offset });
    };

    return fetchPage().pipe(
      expand((page) => {
        totalFetched += page.length;
        offset += page.length;

        const done =
          page.length < increment ||
          (maxTotal > 0 && totalFetched >= maxTotal);

        return done ? EMPTY : fetchPage();
      }),
      catchError((err) => {
        if (totalFetched > 0 && err?.status >= 400 && err?.status < 500) {
          return EMPTY;
        }
        return throwError(() => err);
      })
    );
  }
}
