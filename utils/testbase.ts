import { test as base } from '@playwright/test';

// page objects
import { Login } from '../pages/login';

type pomfixtures = {
   loginPage: Login;
};

// exporting test object
export const test = base.extend<pomfixtures>({
   loginPage: async ({ page }, use) => {
      use(new Login(page));
   },
});

// exporting expect object
export { expect } from '@playwright/test';
