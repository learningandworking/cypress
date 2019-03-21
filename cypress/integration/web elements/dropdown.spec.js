require('cypress-xpath')

describe('Handle drop-down menu', () => {
    context('Drop-down without navigation', () => {
        
        beforeEach(() => {
            cy.visit('https://www.vietjetair.com')
        })
    
        it('Dynamic dropdown by CSS', () => {
    
            cy.get('.selection').contains('Điểm khởi hành')
                .click()
            cy.get('.select2-results__option').contains('Tp. Hồ Chí Minh (SGN)')
                .click()
    
        })
        it('Dynamic dropdown by Xpath', () => {
            cy.xpath(".//span[@title='Điểm khởi hành']").click()
            cy.xpath('//li[text()="Cần Thơ (VCA)"]').click()
        })
    })

    context('Drop-down with navigation', () =>{
        it.only('Check drop-down with navigation', ()=>{
            cy.visit('https://www.spicejet.com/')
            cy.get('.adult-infant-child').within(() => {
                cy.get('#divpaxinfo').click()
                   
                    // get error if run : cy.get('#divAdult #hrefIncAdt').dblclick()
                    
                    // get no error if run click() first: 
                    cy.get('#divAdult #hrefIncAdt').click()
                    cy.get('#divChild #hrefIncChd').click()

            })
        })
    })
})