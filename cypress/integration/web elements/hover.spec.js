const amazonTitle = "Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more"

describe('Hover', () => {

  context('Amazon', () => {
    it('hover an item and get list options', () => {
      cy.visit('https://www.amazon.com/')
      cy.title().should('eq', amazonTitle)

      // two ways to get list text

      // Method 1: use "for" to loop and text in Jquery

      // cy.get('#nav-shop a')
      //   .trigger('mouseover')
      //   .get('  #nav-flyout-anchor #nav-flyout-shopAll a span')
      //   .then((obj)=>{
      //         let arrItem = []
      //         //console.log("Obj length: ", obj.length)
      //         for(let i=0; i < obj.length; i++){
      //           arrItem.push(obj[i].innerText)
      //         }
      //         expect(27).to.equal(arrItem.length)
      //         return arrItem
      //   })
      // .then((arr) =>{
      //       console.log("list of department items: ", arr)
      //       expect(27).to.equal(arr.length)
      // })


      // method 2: use "each" to loop and text in Jquery
      const departmentLoc = cy.get('#nav-shop a')
        .trigger('mouseover')
        .get('#nav-flyout-anchor #nav-flyout-shopAll a')
        .each(el => {
          console.log("el are: ", el)
          console.log("el text is: ", el[0].innerText)
          //              check returned DOM object "el"=> traverse to node 0 and get key "innerText" 
          //                             })

        })
    })

    context('automationpractice', () => {
      beforeEach(() => {
        cy.visit('http://automationpractice.com/index.php')
        cy.title().should('eq', 'My Store')
      })

      it.only('Hover on Categories: Women', () => {
        cy.get('.sf-menu > :nth-child(1) > ul')
          .invoke('show') //show - a Jquery function This forces it to have a 'display: block' CSS style inlined on it
          .wait(1500)
          .find('a').contains('T-shirts').click()
        cy.title().should('include', 'T-shirts')
      })
    })

  })
})