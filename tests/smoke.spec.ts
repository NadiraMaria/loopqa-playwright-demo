import { log } from 'console';
import { SideMenu, TicketStatus } from '../utils/definitions';
import { test, expect } from '../utils/testbase';

test('Verify user can confirm tags', async ({ loginPage, projPage }) => {
   await loginPage.open();
   await loginPage.processLogin();
   await projPage.navigateTo(SideMenu.webapp);
   const expectedTicketTitle = await projPage.getTicketTitleOf(TicketStatus.ToDo, 1);
   expect(expectedTicketTitle).toEqual('Implement user authentication');
});
