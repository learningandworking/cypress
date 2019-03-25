const amazonTitle = "Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more"

describe('Hover', ()=>{

    it.only('hover an item and get list options', ()=>{
        cy.visit('https://www.amazon.com/')
        cy.title().should('eq', amazonTitle)

        // two ways to get list text

        // Method 1: use "for" to loop and text in Jquery

        cy.get('#nav-shop a')
          .trigger('mouseover')
          .get('#nav-flyout-anchor #nav-flyout-shopAll a')
          .then((obj)=>{
                   console.log("Obj are: ", obj)
                for(let i=0; i <=obj.length; i++){
                    console.log("list items are: ", obj[i].text)
                }
          })
        
        // method 2: use "each" to loop and text in Jquery
    //     const departmentLoc = cy.get('#nav-shop a')
    //                             .trigger('mouseover')
    //                             .get('#nav-flyout-anchor #nav-flyout-shopAll a')
    //                             .each(el => {
    //                                 console.log("el are: ", el)
    //                                 console.log("el text is: ", el[0].innerText)
    //              check returned DOM object "el"=> traverse to node 0 and get key "innerText" 
    //                             })
      
  })
})