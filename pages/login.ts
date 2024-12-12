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

   async processLogin(user: string, pass: string = 'admin') {
      const username = process.env.URL || user;
      const password = process.env.PASS || pass;

      // enter username, password and click Sign In button
      await this.page.locator(loc_username).fill(user);
      await this.page.locator(loc_password).fill(pass);
      await this.page.locator(loc_signinBttn).click();
   }
}
