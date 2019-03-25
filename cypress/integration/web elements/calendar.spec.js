describe('Handle Calendar', () => {

    it('Can choose an active day', () => {
        cy.visit('https://www.spicejet.com/')
        cy.viewport(1024, 768) // if not, only 1 calendar displays.
        cy.get('#ctl00_mainContent_view_date1').click()
        cy.get('.ui-datepicker-calendar [data-handler="selectDay"]').contains('17').click()
    })
    it.only('Get list active days', () => {
        cy.visit('https://www.spicejet.com/')
        cy.viewport(1024, 768) // if not, only 1 calendar displays.
        cy.get('#ctl00_mainContent_view_date1').click()
        cy.get('.ui-datepicker-calendar [data-handler="selectDay"] a').then((resData)=>{
            let listItem = []
            for(var i=0; i< resData.length; i++){
                listItem.push(resData[i].innerText)            
            }
            console.log("list item is: ", listItem);
            expect(listItem.length).to.equal(39)
        })
    })
})