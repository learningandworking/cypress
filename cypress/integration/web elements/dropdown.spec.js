require('cypress-xpath')

describe('Handle drop-down menu', () => {
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