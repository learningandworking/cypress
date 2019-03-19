
describe('Seach Form', () => {
    context('Search Item', () => {

        // it('Input text to search form', () => {
        //     cy.inputHotelForm(nameSearch)
        //     cy.get(searchResultTable).within(() => {
        //         cy.contains('Rendezvous Hotel').click()
        //     })

        // });

        // it.only('input Calendar', ()=>{
        //     cy.visit('/')
        //     const checkIn = cy.get('form[name="fCustomHotelSearch"]').find('.dpd1');
        //     checkIn.click()
        // })

        it.only('Input item to search', () =>{
            cy.visit('/')
            cy.get('input[type="search"]').type('book')
               cy.get('div[class="suggest-list--3Tm8"] > a')
               .its('length')
               .should('eq', 10)   

        })
    })
})