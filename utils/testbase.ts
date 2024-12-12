import { test as base } from '@playwright/test';

// page objects
import { Login } from '../pages/login';
import { Projects } from '../pages/projects';

type pageObjFixtures = {
   loginPage: Login;
   projectsPage: Projects;
};

// exporting test object
export const test = base.extend<pageObjFixtures>({
   loginPage: async ({ page }, use) => {
      use(new Login(page));
   },
   projectsPage: async ({ page }, use) => {
      use(new Projects(page));
   },
});

// exporting expect object
export { expect } from '@playwright/test';
