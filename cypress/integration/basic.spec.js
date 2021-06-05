describe('Cypress basics', () => {
    it('Should visit a page and assert title', () =>{
        cy.visit('https://automacaocombatista.herokuapp.com/home/index')

        cy.title()
            .should('be.equal', 'Automação com Batista')
            .should('contain', 'Automação')

    })
})

//testeValidarAcessoAutomacao

//testeValidarURL

//tela home: testeCadastrarUsuario

//tela home: testeValidarCampoObrigatorio

//tela home: testeValidarVoltar


//teste de API Testes em todos Status Code e conteúdo do response body
//https://serverest.dev/