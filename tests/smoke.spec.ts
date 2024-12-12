import { test, expect } from '../utils/testbase';

// test case scenarios
import scenarios from '../data/scenario.json';

test.describe('Data driven demo ', () => {
   scenarios.forEach((data) => {
      // each test case title
      const testTitle = `test case: ${data.title} from ${data.ticketStatus} column of ${data.project}`;

      // execute test for each data from scenario
      test(testTitle, async ({ loginPage, projectsPage }) => {
         await loginPage.open();
         await loginPage.processLogin();
         await projectsPage.navigateTo(data.project);

         const actualTicketTitle = await projectsPage.getTicketTitleOf(data.ticketStatus, data.ticketPosition);
         const actualTags = await projectsPage.getTicketTags(data.ticketStatus, data.ticketPosition);

         expect(actualTicketTitle).toEqual(data.verify.ticketTitle);
         expect(actualTags).toEqual(data.verify.tags);
      });
   }); //end::scenario
}); //end::describe
