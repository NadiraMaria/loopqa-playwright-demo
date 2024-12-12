import { SideMenu, TicketStatus } from '../utils/definitions';
import { test, expect } from '../utils/testbase';

test('Verify user can confirm tags', async ({ loginPage, projPage }) => {
   await loginPage.open();
   await loginPage.processLogin();
   await projPage.navigateTo(SideMenu.webapp);
   const actualTicketTitle = await projPage.getTicketTitleOf(TicketStatus.ToDo, 1);
   const actualTags = await projPage.getTicketTags(TicketStatus.ToDo, 1);
   
   // Assertions
   expect(actualTicketTitle).toEqual('Implement user authentication');
   expect(actualTags).toEqual(['Feature', 'High Priority']);
});
