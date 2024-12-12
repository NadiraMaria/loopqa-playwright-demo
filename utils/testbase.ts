import { test as base } from '@playwright/test';

// page objects
import { Login } from '../pages/login';
import { Projects } from '../pages/projects';

type pomfixtures = {
   loginPage: Login;
   projPage: Projects;
};

// exporting test object
export const test = base.extend<pomfixtures>({
   loginPage: async ({ page }, use) => {
      use(new Login(page));
   },
   projPage: async ({ page }, use) => {
      use(new Projects(page));
   },
});

// exporting expect object
export { expect } from '@playwright/test';
