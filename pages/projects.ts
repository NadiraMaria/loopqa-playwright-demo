import { Page } from 'playwright/test';
import {} from '../utils/definitions';

// --- Element Locators --- //
const loc_sideNavi = 'nav h2';

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

   /**
    * Given the ticket status and its position from top to bottom, it extracts the
    * text value of the target ticket.
    *
    * @example
    * await projPage.getTicketTitleOf(TicketStatus.ToDo, 1); //gets first ticket title from To Do
    *
    * @param status ticket status ToDo=1, InProgress=2, Review=3, Done=4
    * @param ticketPosition natural position of target ticket, starts from 1
    * @returns title text value of target ticket
    */
   async getTicketTitleOf(status: number, ticketPosition: number) {
      const loc_ticket_items = `(//main//h2/..)[${status}]//h3`;
      const textVal = this.page.locator(loc_ticket_items).nth(--ticketPosition).textContent();
      return textVal;
   }
} //end::Projects
