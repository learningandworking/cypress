const title = "SpiceJet - Flight Booking for Domestic and International, Cheap Air Tickets"
const departureCity = 'Ahmedabad (AMD)', destinationCity = 'Dubai, All Airports(DWC) (DXB)'

describe('Search Fly Information', ()=>{
    beforeEach(()=> {
        cy.visit('https://www.spicejet.com/');
        cy.title().should('eq', title)
        cy.viewport(1024, 768)
    })
    it.only('Search One-way flight', ()=>{
        //Choose departure city
        cy.get('#marketCityPair_1  div[class="left1"]')
          .click()
          .get('.search_options_menucontent #dropdownGroup1')
          .contains(departureCity).click()
        //Choose destination city
        cy.get('#ctl00_mainContent_ddl_destinationStation1_CTNR')
          .contains(destinationCity)
          .click()
        //Choose departure day
        //1. Find the list available day
        cy.get('.ui-datepicker-calendar [data-handler="selectDay"] a')
          .then((resData)=>{
                let listItem = []
                for(var i=0; i< resData.length; i++){
                    listItem.push(resData[i].innerText)            
                }
                return listItem
            })
         // choose the first available day
          .then((lis)=>{
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

        // Turn off the board information if having
        
        // if(cy.get('#OKToBoardPopUP1')){
        //     cy.get('input[value="OK"]').click()
        // }else{
        //   console.log('error.....')  
        // }
            
    })
})