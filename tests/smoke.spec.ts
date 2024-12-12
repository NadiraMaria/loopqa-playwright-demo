import { SideMenu, TicketStatus } from '../utils/definitions';
import { test, expect } from '../utils/testbase';

import scenarios from '../data/scenario.json';
// const scenarios = require('../data/scenario.json');

// test.describe('Data Driven test', () => {
//    for (const data of scenarios) {
//       test(`test case title : ${data.title}`, async ({ loginPage, projPage }) => {
//          await loginPage.open();
//          await loginPage.processLogin();
//          await projPage.navigateTo(data.project);

//          const actualTicketTitle = await projPage.getTicketTitleOf(data.ticketStatus, data.ticketPosition);
//          const actualTags = await projPage.getTicketTags(data.ticketStatus, data.ticketPosition);

//          expect(actualTicketTitle).toEqual(data.verify.ticketTitle);
//          expect(actualTags).toEqual(data.verify.tags);
//       });
//    }
// });

test.describe('Data driven demo ', () => {
   scenarios.forEach((data) => {
      test(`test case: ${data.title} from ${data.ticketStatus} column of ${data.project}`, async ({ loginPage, projPage }) => {
         await loginPage.open();
         await loginPage.processLogin();
         await projPage.navigateTo(data.project);

         const actualTicketTitle = await projPage.getTicketTitleOf(data.ticketStatus, data.ticketPosition);
         const actualTags = await projPage.getTicketTags(data.ticketStatus, data.ticketPosition);

         expect(actualTicketTitle).toEqual(data.verify.ticketTitle);
         expect(actualTags).toEqual(data.verify.tags);
      });
   });
});

// test('Verify user can confirm tags', async ({ loginPage, projPage }) => {
//    await loginPage.open();
//    await loginPage.processLogin();
//    await projPage.navigateTo(SideMenu.webapp);
//    const actualTicketTitle = await projPage.getTicketTitleOf(TicketStatus.ToDo, 1);
//    const actualTags = await projPage.getTicketTags(TicketStatus.ToDo, 1);

//    // Assertions
//    expect(actualTicketTitle).toEqual('Implement user authentication');
//    expect(actualTags).toEqual(['Feature', 'High Priority']);
// });
