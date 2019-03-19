let nameSearch = "Singapore"
const searchResultTable = ':nth-of-type(1) > [class="select2-result-sub"]'
describe('Seach Form', () => {
    context('Search Hotel', () => {

        it('Input text to search form', () => {
            cy.inputHotelForm(nameSearch)
            cy.get(searchResultTable).within(() => {
                cy.contains('Rendezvous Hotel').click()
            })

        });

        it.only('input Calendar', ()=>{
            cy.visit('/')
            const checkIn = cy.get('form[name="fCustomHotelSearch"]').find('.dpd1');
            checkIn.click()
        })
    })
})