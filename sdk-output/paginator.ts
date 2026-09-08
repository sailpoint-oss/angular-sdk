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
    return pageStream(callFn, params, increment).pipe(
      reduce<T[], T[]>((all, page) => all.concat(page), [])
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
    return pageStream(callFn, params, increment);
  }
}

/**
 * Request pages until the endpoint runs out of records, and emit each page.
 *
 * The 4xx response is handled per page rather than on the whole stream. Handling
 * it on the whole stream loses every page already collected, because `reduce`
 * emits on completion and an error is not a completion.
 */
function pageStream<T, P extends PaginationParams>(
  callFn: ListFn<T, P>,
  params: (Omit<P, 'limit' | 'offset'> & { limit?: number; offset?: number }) | undefined,
  increment: number
): Observable<T[]> {
  const maxTotal = params?.limit ?? 0;

  let offset = params?.offset ?? 0;
  let totalFetched = 0;

  const fetchPage = (): Observable<T[]> => {
    const pageLimit =
      maxTotal > 0 ? Math.min(increment, maxTotal - totalFetched) : increment;

    return callFn({ ...(params as P), limit: pageLimit, offset }).pipe(
      catchError((err) => {
        // When the number of records is an exact multiple of the increment, some
        // endpoints answer 4xx for the page past the end instead of an empty
        // list. That is the end of the results, so stop and keep what arrived.
        // A failure on the first page is a real failure, so it is re-thrown.
        if (totalFetched > 0 && err?.status >= 400 && err?.status < 500) {
          return EMPTY;
        }
        return throwError(() => err);
      })
    );
  };

  return fetchPage().pipe(
    expand((page) => {
      totalFetched += page.length;
      offset += page.length;

      const done =
        page.length < increment ||
        (maxTotal > 0 && totalFetched >= maxTotal);

      return done ? EMPTY : fetchPage();
    })
  );
}
