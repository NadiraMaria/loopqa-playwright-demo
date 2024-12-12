import { Page } from 'playwright/test';

// --- Element Locators --- //
const loc_username = 'input#username';
const loc_password = 'input#password';
const loc_signinBttn = 'button[type="submit"]';

// --- User Actions --- //
export class Login {
   private readonly page: Page;

   constructor(page: Page) {
      this.page = page;
   }

   /**
    * Given the url of test site, it navigates to the test site.  Please make sure to provide the test site url
    * via command line when you invoking the test, env value for the url is SITE.
    *
    * @example
    *   await loginPage.open();
    */
   async open() {
      const testSite = process.env.SITE || 'https://animated-gingersnap-8cf7f2.netlify.app';
      await this.page.goto(testSite);
   }

   /**
    * Given the username and password, it process user for the site login.  Please ensure to provide the vaue
    * for both user and password via command line where corresponding env values are ( TESTUSER, PASSWORD )
    *
    * @example
    *   await loginPage.processLogin();
    *
    * @param user username, default value is 'admin'
    * @param pass username, default value is empty string
    */
   async processLogin() {
      const username = process.env.TESTUSER || 'admin';
      const password = process.env.PASSWORD || '';

      // enter username, password and click Sign In button
      await this.page.locator(loc_username).fill(username);
      await this.page.locator(loc_password).fill(password);
      await this.page.locator(loc_signinBttn).click();
   }
} //end::Login
