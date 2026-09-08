import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // The SDK targets the browser, and the config service reads `window`.
    environment: 'jsdom',
    setupFiles: ['./test-setup.ts'],
    // Only the hand-written tests at the root of the package. The generated
    // partition directories hold no tests.
    include: ['*.spec.ts'],
  },
});
