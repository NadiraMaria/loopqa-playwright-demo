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
    *  await projectsPage.navigateTo(SideMenu.webapp);
    *  await projectsPage.navigateTo("Web Application");
    *
    * @param projectTitle SideMenu object
    */
   async navigateTo(projectTitle: string) {
      await this.page.locator(loc_sideNavi, { hasText: projectTitle }).click();
   }

   /**
    * Given the ticket status and its position index, it returns the title text of the ticket.
    * Please note that position of text start from top to bottom where and counting starts with 1
    *
    * @example
    *  await projectsPage.getTicketTitleOf('To Do', 1);
    *
    * @param status Ticket status "To Do", "In Progress", "Review", "Done"
    * @param position Position of ticket in given status
    * @returns Text value of target ticket
    */
   async getTicketTitleOf(status: string, position: number) {
      const statusIdx = TicketStatus[status];
      const statusElem = this.page.locator(loc_ticket_status).nth(statusIdx);
      const targetElem = statusElem.locator(loc_ticket_titles).nth(--position);
      return await targetElem.textContent();
   }

   /**
    * Given the ticket status and its position index, it returns the arrat of tag text value from the ticket.
    * Please note that position of text start from top to bottom where and counting starts with 1
    *
    * @example
    *  await projectsPage.getTicketTags('To Do', 1);
    *
    * @param status Ticket status "To Do", "In Progress", "Review", "Done"
    * @param position Position of ticket in given status
    * @returns Array of tag text values of target ticket
    */
   async getTicketTags(status: string, position: number) {
      const statusIdx = TicketStatus[status];
      const statusElem = this.page.locator(loc_ticket_status).nth(statusIdx);
      const targetTicket = statusElem.locator(loc_ticket_box).nth(--position);
      const targetTags = targetTicket.locator(loc_ticket_tags);
      return targetTags.allTextContents();
   }
} //end::Projects
