const title = "SpiceJet - Flight Booking for Domestic and International, Cheap Air Tickets"
const departureCity = 'Ahmedabad', destinationCity = 'Dubai, All Airports',
      destinationCity1 = 'Hyderabad'

describe('Search Fly Information', () => {
  beforeEach(() => {
    cy.visit('https://www.spicejet.com/');
    cy.title().should('eq', title)
    cy.viewport(1024, 768)
  })
  it.only('Search One-way flight', () => {
    //Choose departure city
    cy.get('#marketCityPair_1  div[class="left1"]')
      .click()
      .get('.search_options_menucontent #dropdownGroup1')
      .contains(departureCity).click()
    //Choose destination city
    cy.get('#glsctl00_mainContent_ddl_destinationStation1_CTNR')
      .contains(destinationCity)
      .click()
    //Choose departure day
    //1. Find the list available day
    cy.get('.ui-datepicker-calendar [data-handler="selectDay"] a')
      .then((resData) => {
        let listItem = []
        for (var i = 0; i < resData.length; i++) {
          listItem.push(resData[i].innerText)
        }
        return listItem
      })
      // choose the first available day
      .then((lis) => {
        cy.get('.ui-datepicker-calendar [data-handler="selectDay"]')
          .contains(lis[1])
          .click()
      })
    //Choose passenger: adult , children.
    cy.get('.adult-infant-child').within(() => {
      cy.get('#divpaxinfo').click()
      // choose number of child
      cy.get('#divChild #hrefIncChd').click()
      //choose number of adult
      cy.get('#divAdult #hrefIncAdt').click()
    })
    cy.get('#Div6 input[type="submit"]').click()
    /** 
     * redirect to the detailed booking page.
     * Based on the destination place, we get a popup or not.
    */
   cy.url().should('eq', 'https://book.spicejet.com/Select.aspx')
    cy.get('body').then(($body) => {
      if ($body.find('#OKToBoardPopUP').is(":visible")) { //< jQuey ": isvisible"
      //https://www.tutorialrepublic.com/faq/how-to-check-an-element-is-visible-or-not-using-jquery.php
        // input was found, do something else here
        cy.get('#btnOKToBoardTnC').click()
        cy.get('.trip-detrails-sector').should((resData) =>{
          expect(resData).to.have.length(1)
          expect(resData).to.contain(departureCity)
          expect(resData).to.contain(destinationCity)
        })
      } else {
        cy.get('.trip-detrails-sector').should((resData) =>{
          expect(resData).to.have.length(1)
          expect(resData).to.contain(departureCity)
          expect(resData).to.contain(destinationCity)
        })
      }
    })
  })
})