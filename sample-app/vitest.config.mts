import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    // The SDK is linked from ../sdk-output/dist, so resolution of its imports
    // starts inside sdk-output and finds the copy of Angular installed there.
    // Two copies of @angular/core mean two injector implementations, and every
    // inject() call from the SDK then fails with NG0203. Force one copy.
    dedupe: [
      '@angular/core',
      '@angular/common',
      '@angular/platform-browser',
      'rxjs',
    ],
  },
});
