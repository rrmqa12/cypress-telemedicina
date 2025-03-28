/// <reference types="cypress-xpath" />
/// <reference types= "cypress" />

describe('Profusion - Profissional Saude Telemed', () => {
    //
    beforeEach(() => {
        cy.visit('/')
    })

    it('Validar Url', () => {
        cy.get('#E-mail').type('prof.teste.suporte@gmail.com')
        cy.get('#Senha').type('Profissional@2024')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.url().should('eq', 'https://amei-staging.amorsaude.com.br/waiting-room-v2/medical-care')
    })

    it('Validar breadcrumbs Home', () => {
        cy.get('#E-mail').type('prof.teste.suporte@gmail.com')
        cy.get('#Senha').type('Profissional@2024')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.contains('a', 'Home').click()
        cy.url().should('eq', 'https://amei-staging.amorsaude.com.br/')
    })

    it('Validar breadcrubms Sala de Espera', () => {
        cy.get('#E-mail').type('prof.teste.suporte@gmail.com')
        cy.get('#Senha').type('Profissional@2024')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.contains('a', 'Sala de espera').click()
        cy.url().should('eq', 'https://amei-staging.amorsaude.com.br/waiting-room-v2')
    })

    it('Validar breadcrumbs Atendimento médico', () => {
        cy.get('#E-mail').type('prof.teste.suporte@gmail.com')
        cy.get('#Senha').type('Profissional@2024')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.contains('a', 'Atendimento médico').click()
        cy.url().should('eq', 'https://amei-staging.amorsaude.com.br/waiting-room-v2/medical-care')
    })

    it('Validar título Sala de Espera', () => {
        cy.get('#E-mail').type('prof.teste.suporte@gmail.com')
        cy.get('#Senha').type('Profissional@2024')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.contains('h3', 'Sala de espera').should('be.visible')
    })

    it('Validar subtítulo Atendimento médico', () => {
        cy.get('#E-mail').type('prof.teste.suporte@gmail.com')
        cy.get('#Senha').type('Profissional@2024')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.contains('h3', ' Atendimento médico ').should('be.visible')
    })

    it('Validar campo Data', () => {
        cy.get('#E-mail').type('prof.teste.suporte@gmail.com')
        cy.get('#Senha').type('Profissional@2024')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()

        const dia = new Date()
        // Obtém a data de hoje no formato YYYY-MM-DD
        const ano = dia.getFullYear();
        const mes = String(dia.getMonth() + 1).padStart(2, '0');  // Meses são 0-indexados, então somamos 1
        const diaAtual = String(dia.getDate()).padStart(2, '0'); // Garante que o dia tenha dois dígitos

        const dataFormatada = `${diaAtual}/${mes}/${ano}`;

        cy.get('input[id="data_espera"]').should('have.value', dataFormatada)
    })

    it('Validar campo Área de Atuação', () => {
        cy.get('#E-mail').type('prof.teste.suporte@gmail.com')
        cy.get('#Senha').type('Profissional@2024')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.contains('span', 'Área de atuação').should('be.visible')
        //Clica no campo para abrir as áreas de atuação
        cy.get('[data-placeholder="Área de atuação"]').click({ setTimeout: 1000 })
        // Valida se as áreas de atuação visíveis são exatamente as esperadas
        const areasEsperadas = [' Todos ', ' Acupuntura ', ' Anestesiologia ']
        areasEsperadas.forEach((area) => {
            cy.contains('span', area).should('be.visible')
            cy.log(area)
        })
    })

    it('Validar Área de Atuação inexistente', () => {
        cy.get('#E-mail').type('prof.teste.suporte@gmail.com')
        cy.get('#Senha').type('Profissional@2024')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.contains('span', 'Área de atuação').should('be.visible')
        //Clica no campo para abrir as áreas de atuação
        cy.get('[data-placeholder="Área de atuação"]').click({ setTimeout: 1000 })
        cy.contains('Pediatria').should('not.exist')
    })

    it('Validar campo Profissionais', () => {
        cy.get('#E-mail').type('prof.teste.suporte@gmail.com')
        cy.get('#Senha').type('Profissional@2024')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.wait(1000)
        cy.contains('span', 'Profissionais').should('be.visible')
        cy.get('[data-placeholder="Profissionais"]').click()

        const profissionalEsprado = [' Dr. Profissional Teste Suporte ']
        profissionalEsprado.forEach((profissionais) => {
            cy.contains('span', profissionais).should('be.visible')
            cy.log(profissionais)
        })
    }) // Incrementar o be.checked e mais profissionais

    it('Validar campo Status - Todos', () => {
        cy.get('#E-mail').type('prof.teste.suporte@gmail.com')
        cy.get('#Senha').type('Profissional@2024')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.contains('span', 'Status').should('be.visible')
        cy.get('[data-placeholder="Status"]').click()
        cy.contains('span', 'Todos').should('be.visible')
    })

    it('Validar campo Status - Em atendimento', () => {
        cy.get('#E-mail').type('prof.teste.suporte@gmail.com')
        cy.get('#Senha').type('Profissional@2024')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.contains('span', 'Status').should('be.visible')
        cy.get('[data-placeholder="Status"]').click()
        cy.contains('span', 'Em atendimento').should('be.visible')
    })

    it('Validar campo Status - Atendimento inconclusivo', () => {
        cy.get('#E-mail').type('prof.teste.suporte@gmail.com')
        cy.get('#Senha').type('Profissional@2024')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.contains('span', 'Status').should('be.visible')
        cy.get('[data-placeholder="Status"]').click()
        cy.contains('span', 'Atendimento inconclusivo').should('be.visible')
    })

    it('Validar campo Status - Aguardando atendimento', () => {
        cy.get('#E-mail').type('prof.teste.suporte@gmail.com')
        cy.get('#Senha').type('Profissional@2024')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.contains('span', 'Status').should('be.visible')
        cy.get('[data-placeholder="Status"]').click()
        cy.contains('span', 'Aguardando atendimento').should('be.visible')
    })

    it('Validar campo Status - Marcado - confirmado', () => {
        cy.get('#E-mail').type('prof.teste.suporte@gmail.com')
        cy.get('#Senha').type('Profissional@2024')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.contains('span', 'Status').should('be.visible')
        cy.get('[data-placeholder="Status"]').click()
        cy.contains('span', 'Marcado - confirmado').should('be.visible')
    })

    it('Validar campo Status - Não compareceu', () => {
        cy.get('#E-mail').type('prof.teste.suporte@gmail.com')
        cy.get('#Senha').type('Profissional@2024')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.contains('span', 'Status').should('be.visible')
        cy.get('[data-placeholder="Status"]').click()
        cy.contains('span', 'Não compareceu').scrollIntoView().should('be.visible')
    })

    it('Validar campo Status - Atendimento pausado', () => {
        cy.get('#E-mail').type('prof.teste.suporte@gmail.com')
        cy.get('#Senha').type('Profissional@2024')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.contains('span', 'Status').should('be.visible')
        cy.get('[data-placeholder="Status"]').click()
        cy.contains('span', 'Atendimento pausado').scrollIntoView().should('be.visible')
    })

    it('Validar campo Status - Agendado', () => {
        cy.get('#E-mail').type('prof.teste.suporte@gmail.com')
        cy.get('#Senha').type('Profissional@2024')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.contains('span', 'Status').should('be.visible')
        cy.get('[data-placeholder="Status"]').click()
        cy.contains('span', 'Agendado').scrollIntoView().should('be.visible')
    })

    it('Validar campo Status - Atendido', () => {
        cy.get('#E-mail').type('prof.teste.suporte@gmail.com')
        cy.get('#Senha').type('Profissional@2024')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.contains('span', 'Status').should('be.visible')
        cy.get('[data-placeholder="Status"]').click()
        cy.contains('span', 'Atendido').scrollIntoView().should('be.visible')
    })

    it('Validar campo Status inexistente', () => {
        cy.get('#E-mail').type('prof.teste.suporte@gmail.com')
        cy.get('#Senha').type('Profissional@2024')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.contains('span', 'Status').should('be.visible')
        cy.get('[data-placeholder="Status"]').click()
        cy.contains('span', 'Em progresso').should('not.exist')
        cy.contains('span', 'Marcação').should('not.exist')
    })

    it('Validar o botão Pesquisar', () => {
        cy.get('#E-mail').type('prof.teste.suporte@gmail.com')
        cy.get('#Senha').type('Profissional@2024')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.get('button').contains('Pesquisar').should('be.visible').click()
    })

    it('Validar coluna Agendado', () => {
        cy.get('#E-mail').type('prof.teste.suporte@gmail.com')
        cy.get('#Senha').type('Profissional@2024')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.get('table[class="table"]').contains('th', 'Agendado').should('be.visible')
    })

    it('Validar coluna Chegada', () => {
        cy.get('#E-mail').type('prof.teste.suporte@gmail.com')
        cy.get('#Senha').type('Profissional@2024')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.get('table[class="table"]').contains('th', 'Chegada').should('be.visible')
    })

    it('Validar coluna Atendido', () => {
        cy.get('#E-mail').type('prof.teste.suporte@gmail.com')
        cy.get('#Senha').type('Profissional@2024')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.get('table[class="table"]').contains('th', 'Atendido').should('be.visible')
    })

    it('Validar coluna Idade', () => {
        cy.get('#E-mail').type('prof.teste.suporte@gmail.com')
        cy.get('#Senha').type('Profissional@2024')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.get('table[class="table"]').contains('th', 'Idade').should('be.visible')
    })

    it('Validar coluna Paciente', () => {
        cy.get('#E-mail').type('prof.teste.suporte@gmail.com')
        cy.get('#Senha').type('Profissional@2024')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.get('table[class="table"]').contains('th', 'Paciente').should('be.visible')
    })

    it('Validar coluna Área de atuação', () => {
        cy.get('#E-mail').type('prof.teste.suporte@gmail.com')
        cy.get('#Senha').type('Profissional@2024')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.get('table[class="table"]').contains('th', 'Área de atuação').should('be.visible')
    })

    it('Validar coluna Modalidade', () => {
        cy.get('#E-mail').type('prof.teste.suporte@gmail.com')
        cy.get('#Senha').type('Profissional@2024')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.get('table[class="table"]').contains('th', 'Modalidade').should('be.visible')
    })

    it('Validar coluna Espera', () => {
        cy.get('#E-mail').type('prof.teste.suporte@gmail.com')
        cy.get('#Senha').type('Profissional@2024')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.get('table[class="table"]').contains('th', 'Espera').should('be.visible')
    })

    it('Validar coluna Status', () => {
        cy.get('#E-mail').type('prof.teste.suporte@gmail.com')
        cy.get('#Senha').type('Profissional@2024')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.get('table[class="table"]').contains('th', 'Status').should('be.visible')
    })

    it('Validar coluna Ação', () => {
        cy.get('#E-mail').type('prof.teste.suporte@gmail.com')
        cy.get('#Senha').type('Profissional@2024')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.get('table[class="table"]').contains('th', 'Ação').should('be.visible')
    })

    it('Validar item Paginação', () => {
        cy.get('#E-mail').type('prof.teste.suporte@gmail.com')
        cy.get('#Senha').type('Profissional@2024')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.contains('div', ' Items per page: ').should('be.visible')
    })

    it('Validar Seletor de tamanho da página do paginador', () => {
        cy.get('#E-mail').type('prof.teste.suporte@gmail.com')
        cy.get('#Senha').type('Profissional@2024')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.contains('span', '5').click()

        const seletor = ['5', '10', '25', '50']

        seletor.forEach((numero) => {
            cy.contains('span', numero).should('be.visible')
            cy.log(numero)
        })
    })

    it('Validar Paginação', () => {
        cy.get('#E-mail').type('prof.teste.suporte@gmail.com')
        cy.get('#Senha').type('Profissional@2024')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.wait(2000)
        const paginacao = ' 1 –';
        cy.contains('div', paginacao).should('be.visible')
    })
})

describe('Profusion - Visão Admin', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Validar Url', () => {
        cy.get('#E-mail').type('roger.mazzali@amorsaude.com')
        cy.get('#Senha').type('Rrm@amor202')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.url().should('eq', 'https://amei-staging.amorsaude.com.br/waiting-room-v2/medical-care')
    })

    it('Validar breadcrumbs Home', () => {
        cy.get('#E-mail').type('roger.mazzali@amorsaude.com')
        cy.get('#Senha').type('Rrm@amor202')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.contains('a', 'Home').click()
        cy.url().should('eq', 'https://amei-staging.amorsaude.com.br/')
    })

    it('Validar breadcrubms Sala de Espera', () => {
        cy.get('#E-mail').type('roger.mazzali@amorsaude.com')
        cy.get('#Senha').type('Rrm@amor202')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.contains('a', 'Sala de espera').click()
        cy.url().should('eq', 'https://amei-staging.amorsaude.com.br/waiting-room-v2')
    })

    it('Validar breadcrumbs Atendimento médico', () => {
        cy.get('#E-mail').type('roger.mazzali@amorsaude.com')
        cy.get('#Senha').type('Rrm@amor202')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.contains('a', 'Atendimento médico').click()
        cy.url().should('eq', 'https://amei-staging.amorsaude.com.br/waiting-room-v2/medical-care')
    })

    it('Validar título Sala de Espera', () => {
        cy.get('#E-mail').type('roger.mazzali@amorsaude.com')
        cy.get('#Senha').type('Rrm@amor202')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.contains('h3', 'Sala de espera').should('be.visible')
    })

    it('Validar subtítulo Atendimento médico', () => {
        cy.get('#E-mail').type('roger.mazzali@amorsaude.com')
        cy.get('#Senha').type('Rrm@amor202')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.contains('h3', ' Atendimento médico ').should('be.visible')
    })

    it('Validar campo Data', () => {
        cy.get('#E-mail').type('roger.mazzali@amorsaude.com')
        cy.get('#Senha').type('Rrm@amor202')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()

        const dia = new Date()
        // Obtém a data de hoje no formato YYYY-MM-DD
        const ano = dia.getFullYear();
        const mes = String(dia.getMonth() + 1).padStart(2, '0');  // Meses são 0-indexados, então somamos 1
        const diaAtual = String(dia.getDate()).padStart(2, '0'); // Garante que o dia tenha dois dígitos

        const dataFormatada = `${diaAtual}/${mes}/${ano}`;
        cy.get('input[id="data_espera"]').should('have.value', dataFormatada)
    })

    it('Validar campo Área de Atuação', () => {
        cy.get('#E-mail').type('roger.mazzali@amorsaude.com')
        cy.get('#Senha').type('Rrm@amor202')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.contains('span', 'Área de atuação').should('be.visible')
        cy.get('[data-placeholder="Área de atuação"]').click({ setTimeout: 1000 })
        const areasEsperadas = ['Todos', 'Alergia e imunologia', 'Acupuntura', 'Anestesiologia', 'Angiologia']
        areasEsperadas.forEach((area) => {
            cy.contains('span', area).should('be.visible')
            cy.log(area)
        })
    })

    it('Validar campo Profissionais', () => {
        cy.get('#E-mail').type('roger.mazzali@amorsaude.com')
        cy.get('#Senha').type('Rrm@amor202')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.wait(1000)
        cy.contains('span', 'Profissionais').should('be.visible')
        cy.get('[data-placeholder="Profissionais"]').click()

        const profissionalEsprado = ['Todos', 'Dra. Agata Stanisci', 'Dr. Ricardo Ranniery Sales de Albuquerque', ' Dr. Telemedicina AmorSaúde ']
        profissionalEsprado.forEach((profissionais) => {
            cy.contains('span', profissionais).should('be.visible')
            cy.log(profissionais)
        })
    })

    it('Validar campo Status - Todos', () => {
        cy.get('#E-mail').type('roger.mazzali@amorsaude.com')
        cy.get('#Senha').type('Rrm@amor202')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.contains('span', 'Status').should('be.visible')
        cy.get('[data-placeholder="Status"]').click()
        cy.contains('span', 'Todos').should('be.visible')
    })

    it('Validar campo Status - Em atendimento', () => {
        cy.get('#E-mail').type('roger.mazzali@amorsaude.com')
        cy.get('#Senha').type('Rrm@amor202')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.contains('span', 'Status').should('be.visible')
        cy.get('[data-placeholder="Status"]').click()
        cy.contains('span', 'Em atendimento').should('be.visible')
    })

    it('Validar campo Status - Atendimento inconclusivo', () => {
        cy.get('#E-mail').type('roger.mazzali@amorsaude.com')
        cy.get('#Senha').type('Rrm@amor202')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.contains('span', 'Status').should('be.visible')
        cy.get('[data-placeholder="Status"]').click()
        cy.contains('span', 'Atendimento inconclusivo').should('be.visible')
    })

    it('Validar campo Status - Aguardando atendimento', () => {
        cy.get('#E-mail').type('roger.mazzali@amorsaude.com')
        cy.get('#Senha').type('Rrm@amor202')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.contains('span', 'Status').should('be.visible')
        cy.get('[data-placeholder="Status"]').click()
        cy.contains('span', 'Aguardando atendimento').should('be.visible')
    })

    it('Validar campo Status - Marcado - confirmado', () => {
        cy.get('#E-mail').type('roger.mazzali@amorsaude.com')
        cy.get('#Senha').type('Rrm@amor202')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.contains('span', 'Status').should('be.visible')
        cy.get('[data-placeholder="Status"]').click()
        cy.contains('span', 'Marcado - confirmado').should('be.visible')
    })

    it('Validar campo Status - Não compareceu', () => {
        cy.get('#E-mail').type('roger.mazzali@amorsaude.com')
        cy.get('#Senha').type('Rrm@amor202')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.contains('span', 'Status').should('be.visible')
        cy.get('[data-placeholder="Status"]').click()
        cy.contains('span', 'Não compareceu').scrollIntoView().should('be.visible')
    })

    it('Validar campo Status - Atendimento pausado', () => {
        cy.get('#E-mail').type('roger.mazzali@amorsaude.com')
        cy.get('#Senha').type('Rrm@amor202')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.contains('span', 'Status').should('be.visible')
        cy.get('[data-placeholder="Status"]').click()
        cy.contains('span', 'Atendimento pausado').scrollIntoView().should('be.visible')
    })

    it('Validar campo Status - Agendado', () => {
        cy.get('#E-mail').type('roger.mazzali@amorsaude.com')
        cy.get('#Senha').type('Rrm@amor202')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.contains('span', 'Status').should('be.visible')
        cy.get('[data-placeholder="Status"]').click()
        cy.contains('span', 'Agendado').scrollIntoView().should('be.visible')
    })

    it('Validar campo Status - Atendido', () => {
        cy.get('#E-mail').type('roger.mazzali@amorsaude.com')
        cy.get('#Senha').type('Rrm@amor202')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.contains('span', 'Status').should('be.visible')
        cy.get('[data-placeholder="Status"]').click()
        cy.contains('span', 'Atendido').scrollIntoView().should('be.visible')
    })

    it('Validar campo Status inexistente', () => {
        cy.get('#E-mail').type('roger.mazzali@amorsaude.com')
        cy.get('#Senha').type('Rrm@amor202')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.contains('span', 'Status').should('be.visible')
        cy.get('[data-placeholder="Status"]').click()
        cy.contains('span', 'Em progresso').should('not.exist')
        cy.contains('span', 'Marcação').should('not.exist')
    })

    it('Validar o botão Pesquisar', () => {
        cy.get('#E-mail').type('roger.mazzali@amorsaude.com')
        cy.get('#Senha').type('Rrm@amor202')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.get('button').contains('Pesquisar').should('be.visible').click()
    })

    it('Validar coluna Agendado', () => {
        cy.get('#E-mail').type('roger.mazzali@amorsaude.com')
        cy.get('#Senha').type('Rrm@amor202')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.get('table[class="table"]').contains('th', 'Agendado').should('be.visible')
    })

    it('Validar coluna Chegada', () => {
        cy.get('#E-mail').type('roger.mazzali@amorsaude.com')
        cy.get('#Senha').type('Rrm@amor202')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.get('table[class="table"]').contains('th', 'Chegada').should('be.visible')
    })

    it('Validar coluna Atendido', () => {
        cy.get('#E-mail').type('roger.mazzali@amorsaude.com')
        cy.get('#Senha').type('Rrm@amor202')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.get('table[class="table"]').contains('th', 'Atendido').should('be.visible')
    })

    it('Validar coluna Idade', () => {
        cy.get('#E-mail').type('roger.mazzali@amorsaude.com')
        cy.get('#Senha').type('Rrm@amor202')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.get('table[class="table"]').contains('th', 'Idade').should('be.visible')
    })

    it('Validar coluna Paciente', () => {
        cy.get('#E-mail').type('roger.mazzali@amorsaude.com')
        cy.get('#Senha').type('Rrm@amor202')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.get('table[class="table"]').contains('th', 'Paciente').should('be.visible')
    })

    it('Validar coluna Profissional', () => {
        cy.get('#E-mail').type('roger.mazzali@amorsaude.com')
        cy.get('#Senha').type('Rrm@amor202')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.get('table[class="table"]').contains('th', 'Profissional').should('be.visible')
    })

    it('Validar coluna Área de atuação', () => {
        cy.get('#E-mail').type('roger.mazzali@amorsaude.com')
        cy.get('#Senha').type('Rrm@amor202')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.get('table[class="table"]').contains('th', 'Área de atuação').should('be.visible')
    })

    it('Validar coluna Modalidade', () => {
        cy.get('#E-mail').type('roger.mazzali@amorsaude.com')
        cy.get('#Senha').type('Rrm@amor202')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.get('table[class="table"]').contains('th', 'Modalidade').should('be.visible')
    })

    it('Validar coluna Espera', () => {
        cy.get('#E-mail').type('roger.mazzali@amorsaude.com')
        cy.get('#Senha').type('Rrm@amor202')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.get('table[class="table"]').contains('th', 'Espera').should('be.visible')
    })

    it('Validar coluna Status', () => {
        cy.get('#E-mail').type('roger.mazzali@amorsaude.com')
        cy.get('#Senha').type('Rrm@amor202')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.get('table[class="table"]').contains('th', 'Status').should('be.visible')
    })

    it('Validar coluna Links', () => {
        cy.get('#E-mail').type('roger.mazzali@amorsaude.com')
        cy.get('#Senha').type('Rrm@amor202')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.get('table[class="table"]').contains('th', 'Links').should('be.visible')
    })

    it('Validar coluna Histórico', () => {
        cy.get('#E-mail').type('roger.mazzali@amorsaude.com')
        cy.get('#Senha').type('Rrm@amor202')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.get('table[class="table"]').contains('th', 'Histórico').should('be.visible')
    })

    it('Validar item Paginação', () => {
        cy.get('#E-mail').type('roger.mazzali@amorsaude.com')
        cy.get('#Senha').type('Rrm@amor202')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.contains('div', ' Items per page: ').should('be.visible')
    })

    it('Validar Seletor de tamanho da página do paginador', () => {
        cy.get('#E-mail').type('roger.mazzali@amorsaude.com')
        cy.get('#Senha').type('Rrm@amor202')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()
        cy.contains('span', '5').click()

        const seletor = ['5', '10', '25', '50']

        seletor.forEach((numero) => {
            cy.contains('span', numero).should('be.visible')
            cy.log(numero)
        })
    })

    it('Validar Paginação', () => {
        cy.get('#E-mail').type('roger.mazzali@amorsaude.com')
        cy.get('#Senha').type('Rrm@amor202')
        cy.get('#login').click()
        cy.contains('span', ' Telemedicina ').should('be.visible').click()
        cy.get('#EntrarUnidade').click()
        cy.get('#waiting-room').click()
        cy.contains('span', 'Atendimento médico').click()

        const paginacao = ' 1 –';
        cy.contains('div', paginacao).should('be.visible')
    })
})

// verificar os status após os atendimentos do profissional