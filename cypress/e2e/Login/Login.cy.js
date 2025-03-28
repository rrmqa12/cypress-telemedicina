/// <reference types="cypress-xpath" />
/// <reference types= "cypress" />

describe('telemedicina', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it.skip('Login', () => {
    cy.get('#E-mail').type('roger.mazzali@amorsaude.com')
    cy.get('#Senha').type('Rrm@amor202')
    cy.get('#login').click()
    cy.contains('span', ' Telemedicina ')
      .should('be.visible')
      .click()
    cy.get('#EntrarUnidade').click()
    cy.get('#schedule')
      .click()
    cy.wait(1000)
    cy.contains('span', 'Agendar atendimento')
      .should('be.visible')
      .should('exist')
      .click()
    /*cy.wait(1000)  
    cy.visit('/schedule/schedule-appointment') //Verifica Url da Aplicação
      .url().should('be.equals', 'https://amei-homolog.amorsaude.com.br/schedule/schedule-appointment')
      .should('be.visible')*/
  })

  it.skip('Visita pagina HOME', () => {
    cy.get('#E-mail').type('roger.mazzali@amorsaude.com')
    cy.get('#Senha').type('Rrm@amor202')
    cy.get('#login').click()
    cy.contains('span', ' Telemedicina ')
      .should('be.visible')
      .click()
    cy.get('#EntrarUnidade').click()
    cy.get('#schedule')
      .click()
    cy.wait(1000)
    cy.contains('span', 'Agendar atend. assistido')
    .click()
    cy.contains('span', ' Unidade Teste / Treinamento ')
      .should('be.visible')
      .click() 
    cy.contains('a', 'Home')
      .click()  
    cy.wait(2000)  
    cy.visit('https://amei-homolog.amorsaude.com.br/')
      .url().should('eq', 'https://amei-homolog.amorsaude.com.br/')
      .get('body').should('be.visible')
  })
})