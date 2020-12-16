describe('Mony Dashboard',()=>{

    it('Should return true when title was correct',()=>{
        cy.visit('/login')

        cy.contains('Mony').should('to.have.length',1)    
    })

    it('Check if login is ok',()=>{
        cy.visit('/login')

        cy.get("[data-cy=email]").type('nina@mail.com')

        cy.get("[data-cy=password]").type('123')

        cy.get("[data-cy=login").click().then(()=>{
            
            cy.location('pathname').should('eq','/')

            cy.contains('Sair').should('to.have.length',1)
        })

    })

})