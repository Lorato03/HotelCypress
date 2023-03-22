import HomePage from "../pages/landing";
import { elements } from "../page elements/elements";
import "cypress-mochawesome-reporter/register";

describe('Hotel booking form', () => {
  const pg = new HomePage();
  it('open site', () => {
    pg.site();

  })
  it('add data', () => {
    pg.site();
    pg.book();
  })
  
  it('delete booking', () => {
    pg.site();
    cy.wait(1000);
    pg.deleteBooking()
  })
})