describe("Login", function () {
    it('Sing in', function () {
        cy.visit('https://react-redux.realworld.io/#/login')
        cy.get('input[type="email"]').type('pocu46@gmail.com')
        cy.get('input[type="password"]').type('a19061989')
        cy.get('.btn').contains('Sign in').should('be.visible').click()
    })
})

