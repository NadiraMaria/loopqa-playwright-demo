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
    * Given the URL of test site, it navigates to the test site.  Please make sure to provide the test site URL
    * via command line when you invoking the test.
    *
    * @example
    *   await loginPage.open();
    */
   async open() {
      const testSite = process.env.URL ?? 'https://animated-gingersnap-8cf7f2.netlify.app';
      await this.page.goto(testSite);
   }

   /**
    * Given the username and password, it process user for the site login.  Please ensure to provide the vaue
    * for both user and password via command line where corresponding env values are ( USERNAME, PASSWORD )
    *
    * @example
    *   await loginPage.processLogin();
    *
    * @param user username, default value is 'admin'
    * @param pass username, default value is empty string
    */
   async processLogin(user: string = 'admin', pass: string = '') {
      const username = process.env.USERNAME ?? user;
      const password = process.env.PASSWORD ?? pass;

      // enter username, password and click Sign In button
      await this.page.locator(loc_username).fill(username);
      await this.page.locator(loc_password).fill(password);
      await this.page.locator(loc_signinBttn).click();
   }
} //end::Login
