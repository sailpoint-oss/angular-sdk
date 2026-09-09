import type { SailPointParams } from '@sailpoint/angular-sdk';

export const STORAGE_KEY = 'sailpoint_sample_config';

/**
 * Keep the parameters across a page reload, so the data pages still work after
 * one trip through an authentication page.
 *
 * Only plain values are kept. A token function and `window.sailpointConfig()`
 * cannot survive a reload, so those two pages do not call this.
 */
export function rememberConfig(params: SailPointParams): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(params));
  } catch {
    // A private window can refuse storage. The session still works.
  }
}

export function forgetConfig(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Nothing to do.
  }
}

export function readConfig(): SailPointParams | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as SailPointParams) : null;
  } catch {
    return null;
  }
}
