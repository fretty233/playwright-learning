import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
  ],

  use: {
    headless: false,

    screenshot: 'on',       // screenshot semua test (pass & fail)
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },

  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});