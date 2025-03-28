/// <reference types="cypress-xpath" />
/// <reference types= "cypress" />

describe('portal do paciente', () => {
    beforeEach(() => {
        cy.visit('https://white-label-homolog.amorsaude.tech/amorsaude')
    })

    it.skip('Validar o login no portal do paciente', () => {
        cy.get('button[aria-label="Account settings"]')
            .click()
        cy.get('mat-label')
            .contains('Digite seu CPF de cadastro')
            .type('792.958.688-03')
        cy.get('input[id="passwordField"]')
            .type('Amor@2024')
        cy.get('button[id="passwordToggle"]')
            .click()
        cy.get('button[id="loginButton"]')
            .click()
        cy.get('mat-icon')
            .contains(' close ')
            .click()
        cy.get('input[id="phoneField"]')
            .type('16996188125')
        cy.contains('span', ' Salvar alterações ')
            .click()
    })
})