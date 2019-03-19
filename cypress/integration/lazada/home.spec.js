
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

        it.only('Input item to search', () => {
            cy.visit('/')
            cy.get('input[type="search"]').type('book')
            cy.get('div[class="suggest-list--3Tm8"] > a').then((result) => {
                let listItem = []
                console.log('type of result', typeof result)

                for(var i = 0 ; i < result.length; i++){
                    console.log(result[i].text)
                    listItem.push(result[i].text);
                }

                console.log('--------------')
                for(var k in result){
                    console.log(result[k].text)
                }
                console.log('--------------')
                
                result.forEach((element) => {
                    console.log(element)
                })
                console.log(listItem)
            });
     
        })
        //    .its('length')
        //    .should('eq', 10)   

    })
})