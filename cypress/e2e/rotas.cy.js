/// <reference types="cypress-xpath" />
/// <reference types= "cypress" />

describe('telemedicina', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it.only('Login', () => {
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
  /*---------------------------------------------------------------------------------------------*/

  it('Validar abertura de grade do profissional', () => {

  })

  /*---------------------------------------------------------------------------------------------*/

  it('Validar Fluxo Completo no Agendamento Particular por grade Semanal', () => {
    cy.get('#E-mail')
      .type('roger.mazzali@amorsaude.com')
    cy.get('#Senha')
      .type('Rrm@amor202')
    cy.get('#login')
      .click()
    cy.contains('span', ' Telemedicina ')
      .should('be.visible')
      .click()
    cy.get('#EntrarUnidade')
      .click()
    cy.get('#schedule')
      .click()
    cy.wait(1000)  //should('be.visible', { timeout: 6000 }) // Espera mais tempo para aparecer
    cy.contains('span', 'Agendar atendimento')
      .should('be.visible')
      .should('exist')
      .click()
    cy.wait(1000)
    cy.get('mat-select[formcontrolname="expertiseAreas"]')
      .click()
    cy.contains('span', 'Acupuntura')
      .click()
    cy.get('mat-select[formcontrolname="professionals"]')
      .click()
    cy.contains('span', ' Dr. Profissional Teste Suporte ')
      .click()
    cy.contains('span', ' Pesquisar ')
      .should('be.visible')
      .click()
    const today = new Date()
    const weekDay = today.getDay()
    cy.get('.cal-day-columns .cal-day-column') //Filtra apenas os dias
      .eq(weekDay)
      .find('.livre')
      .first()
      .click()
    cy.get('#cpf')
      .type('792.958.688-03')
      .should('have.value', '792.958.688-03')
    cy.wait(1000)
    cy.get('mat-select[formcontrolname="originChannel"]')
      .click()
      .wait(2000)
    cy.contains('span', 'Email')
      .scrollIntoView()
      .should('be.visible')
      .click()
    cy.contains('button', ' + Incluir procedimento ')
      .click()
    cy.get('mat-select[id="AdProcedimento"]')
      .click()
    cy.contains('span', 'Teleconsulta especialidades')
      .click()
    cy.wait(1000)
    cy.contains('button', ' Adicionar ')
      .click()
    cy.wait(1000)
    cy.contains('button', ' Confirmar ')
      .click()
  })

  /*---------------------------------------------------------------------------------------------*/

  it('Validar Fluxo Completo no Reagendamento por grade Semanal (Cancelamento de agenda do profissional)', () => {
    cy.get('#E-mail')
      .type('roger.mazzali@amorsaude.com')
    cy.get('#Senha')
      .type('Rrm@amor202')
    cy.get('#login')
      .click()
    cy.contains('span', ' Telemedicina ')
      .should('be.visible')
      .click()
    cy.get('#EntrarUnidade')
      .click()
    cy.get('#schedule')
      .click()
    cy.wait(1000)  //should('be.visible', { timeout: 6000 }) // Espera mais tempo para aparecer
    cy.contains('span', 'Agendar atendimento')
      .should('be.visible')
      .should('exist')
      .click()
    cy.wait(1000)
    cy.get('mat-select[formcontrolname="expertiseAreas"]')
      .click()
    cy.contains('span', 'Acupuntura')
      .click()
    cy.get('mat-select[formcontrolname="professionals"]')
      .click()
    cy.contains('span', ' Dr. Profissional Teste Suporte ')
      .click()
    cy.contains('span', ' Pesquisar ')
      .should('be.visible')
      .click()
    const today = new Date()
    const weekDay = today.getDay()
    cy.get('.cal-day-columns .cal-day-column') //Filtra apenas os dias
      .eq(weekDay)
      .find('.agendado ', { timeout: 2000 })
      .first()
      .click()
    cy.get('button[title="Reagendar"]')
      .click()
    cy.get('.mat-select')
      .eq(6)
      .click()
    cy.contains('span', ' Cancelamento de agenda do profissional ')
      .click()
    cy.get('button')
      .contains(' Prosseguir ')
      .click()
    const today2 = new Date()
    const weekDay2 = today2.getDay()
    cy.get('.cal-day-columns .cal-day-column')
      .eq(weekDay2)
      .find('.livre ', { timeout: 2000 })
      .first()
      .click()
    cy.get('button')
      .contains(' Reagendar ')
      .click()
    cy.get('button')
      .contains(' Voltar ')
      .click()
  })


  it('Validar Fluxo Completo no Reagendamento por grade Semanal (Cancelamento de agenda do profissional)', () => {
    cy.get('#E-mail')
      .type('roger.mazzali@amorsaude.com')
    cy.get('#Senha')
      .type('Rrm@amor202')
    cy.get('#login')
      .click()
    cy.contains('span', ' Telemedicina ')
      .should('be.visible')
      .click()
    cy.get('#EntrarUnidade')
      .click()
    cy.get('#schedule')
      .click()
    cy.wait(1000)  //should('be.visible', { timeout: 6000 }) // Espera mais tempo para aparecer
    cy.contains('span', 'Agendar atendimento')
      .should('be.visible')
      .should('exist')
      .click()
    cy.wait(1000)
    cy.get('mat-select[formcontrolname="expertiseAreas"]')
      .click()
    cy.contains('span', 'Acupuntura')
      .click()
    cy.get('mat-select[formcontrolname="professionals"]')
      .click()
    cy.contains('span', ' Dr. Profissional Teste Suporte ')
      .click()
    cy.contains('span', ' Pesquisar ')
      .should('be.visible')
      .click()
    const today = new Date()
    const weekDay = today.getDay()
    cy.get('.cal-day-columns .cal-day-column') //Filtra apenas os dias
      .eq(weekDay)
      .find('.agendado ', { timeout: 2000 })
      .first()
      .click()
    cy.get('button[title="Reagendar"]')
      .click()
    cy.get('.mat-select')
      .eq(6)
      .click()
    cy.contains('span', ' Cancelamento de agenda do profissional ')
      .click()
    cy.get('button')
      .contains(' Prosseguir ')
      .click()
    const today2 = new Date()
    const weekDay2 = today2.getDay()
    cy.get('.cal-day-columns .cal-day-column')
      .eq(weekDay2)
      .find('.livre ', { timeout: 2000 })
      .first()
      .click()
    cy.get('button')
      .contains(' Reagendar ')
      .click()
    cy.get('button')
      .contains(' Voltar ')
      .click()
  })
})




















