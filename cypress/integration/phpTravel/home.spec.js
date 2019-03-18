let nameSearch = "Singapore"

describe('Seach Form', () =>{
    context('Search Hotel', ()=>{
        
        it.only('Input text to search form', ()=>{
            cy.visit('/');
            cy.title().should('eq', 'PHPTRAVELS | Travel Technology Partner')
            cy.get('form[name="fCustomHotelSearch"]  a > span:first-child')
                .click()
                .focused()
                .type(nameSearch)
            //cy.get(':nth-of-type(1) > [class="select2-result-sub"] li:first-child').click()
            cy.get(':nth-of-type(1) > [class="select2-result-sub"]').within(() => {
                cy.contains('Rendezvous Hotel').click()
            })
            
        });

        it('Click on the hotel name at Hotels result-table ', ()=>{

        })
    })
})