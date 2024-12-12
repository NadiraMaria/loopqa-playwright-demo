import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
   testDir: './tests',
   timeout: 30_000,
   use: {
      viewport: { width: 1980, height: 1080 },
   },
   reporter: [['html', { outputFolder: 'reports' }]],
   projects: [
      {
         name: 'chrome',
         testMatch: '*tests/*.spec.ts',
         use: {
            ...devices['Desktop Chrome'],
            viewport: { width: 1980, height: 1080 },
            trace: 'on',
            screenshot: 'on',
         },
      },
      // {
      //    name: 'firefox',
      //    testMatch: '*/tests/*.spec.js',
      //    use: {
      //       ...devices['Desktop Firefox'],
      //       viewport: { width: 1980, height: 1080 },
      //       trace: 'on',
      //       screenshot: 'on',
      //    },
      // },
      // {
      //    name: 'safari',
      //    testMatch: '*/tests/*.spec.js',
      //    use: {
      //       ...devices['Desktop Safari'],
      //       viewport: { width: 1980, height: 1080 },
      //       trace: 'on',
      //       screenshot: 'on',
      //    },
      // },
   ],
});
