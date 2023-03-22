import { elements } from "../page elements/elements";

class HomePage{
    site(){
        cy.visit(elements.link);
    }

    //fill in the booking form

    book(){
    cy.get(elements.firstN).type("Limakatso");
    cy.get(elements.lastN).type("Ntoba");
    cy.get(elements.price).type("3800");

    //deposit drop down
    cy.get(elements.depo)
    .select("true")
    .invoke("val")
    .should("eq", "true");

    cy.get(elements.checkIn).type("2023-04-03");
    cy.get(elements.checkOut).type("2023-04-10");
    cy.get(elements.saveBTN).click();

    cy.wait(1000);

    cy.get(elements.rows).its("length").should("be.gte", 1);
    }

    //delete the booking
    deleteBooking(){
        cy.get(elements.dlt).each(($el, index, $list) => {
            cy.get($el).click({ multiple: true });
    })
    

        }
    }
    export default HomePage;