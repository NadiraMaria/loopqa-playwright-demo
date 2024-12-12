import { Page } from 'playwright/test';
import { TicketStatus } from '../utils/definitions';

// --- Element Locators --- //
const loc_sideNavi = 'nav h2';
const loc_ticket_status = 'main div.bg-gray-50';
const loc_ticket_box = 'div.bg-white';
const loc_ticket_titles = 'div.bg-white h3';
const loc_ticket_tags = 'span.rounded-full';

// --- User Actions --- //
export class Projects {
   private readonly page: Page;

   constructor(page: Page) {
      this.page = page;
   }

   /**
    * Given the Project name from the side menu, it clicks the corresponding menu.
    * Please use the utils/definitions/SideMenu object for project title.
    *
    * @example
    *  await projPage.navigateTo(SideMenu.webapp);
    *
    * @param projectTitle SideMenu object
    */
   async navigateTo(projectTitle: string) {
      await this.page.locator(loc_sideNavi, { hasText: projectTitle }).click();
   }

   async getTicketTitleOf(status: string, position: number) {
      const statusIdx = TicketStatus[status];
      const statusElem = this.page.locator(loc_ticket_status).nth(statusIdx);
      const targetElem = statusElem.locator(loc_ticket_titles).nth(--position);
      return await targetElem.textContent();
   }

   async getTicketTags(status: string, position: number) {
      const statusIdx = TicketStatus[status];
      const statusElem = this.page.locator(loc_ticket_status).nth(statusIdx);
      const targetTicket = statusElem.locator(loc_ticket_box).nth(--position);
      const targetTags = targetTicket.locator(loc_ticket_tags);
      return targetTags.allTextContents();
   }
} //end::Projects
