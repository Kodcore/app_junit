**Teste para Analista QA - Ânima Educação Técnica** 



1. **Teste Automatizado de Interface:** 

   Automatize os casos de testes levantados neste desafio de automação proposto abaixo, utilizando uma das seguintes linguagens JS(Cypress) ou C#(Selenium) e ao finalizar a tarefa, deixe o link do projeto do git. 

   O que se espera com essa automação web:

    * Boa organização de código e arquitetura dos testes;

    * Criação de casos de testes legíveis e no formato de BDD;

    * Padrão PageObjects;

    * Utilizar Frameworks de BDD (Specflow/Cucumber).

    * Relatório, Docker e afins será um diferencial; 

      

      Desafio: 

      Dado o sistema https://automacaocombatista.herokuapp.com/home/index que será utilizado como aplicação a ser automatizada. 

      

      Temos os seguintes casos de testes por tela: 

      ###### Tela Home

        - Teste ValidarAcessoAutomacao

        - Teste ValidarUrl 

          

          ###### Tela Home/CriarUsuario

        - Teste CadastrarUsuario

        - Teste ValidarCampoObrigatorio

        - Teste ValidarVoltar 

          Detalhe: Para acessar a tela Criar Usuário é necessário começar pela tela Home. 

          

          2. **Teste Automatizado de API:**

             

              Automatize os casos de testes levantados neste desafio de automação proposto abaixo, utilizando uma das seguintes linguagens JS (Cypress/Supertest) ou C#(RestSharp) e ao finalizar a tarefa, deixe o link do projeto do git.

             

              O que se espera com essa automação web:
    
               - Boa organização de código e arquitetura dos testes;
    
               - Boa escrita dos testes automatizados e fluidez na automação
    
               - Cobertura dos testes de API
    
               - Entendimento da proposta da automação e criação de fluxos automatizados
    
               - Testes em todos Status Code e conteúdo do response body 

          
​       
          
       Desafio: 
              
       O ServeRest é um servidor REST que simula uma loja virtual com intuito de servir de material de estudos de testes de API. A URL que contém todas as rotas é https://serverest.dev/. Dentro da sua documentação estão os casos de sucesso (Status Code 200) e casos de falha de negócio (Status Code 400), ambos status code devem ser validados a fim de ter uma boa cobertura na rota. 
          

          ​       

                 Pense no fluxo automatizado que correlacione diferentes endpoints (exemplo: Fazer um cadastro e na sequência excluir no mesmo caso de teste). Você deverá fazer automação em pelo menos:
              
                 	 - 10 Rotas do verbo GET 
                 	 - 10 Rotas de POST (com e sem autenticação no cabeçalho)

------

EXECUÇÃO DO PROJETO



1. Para este cenário será utilizado o VUE-CLI : pacote npm usando o comando

   ​			`npm install -g @vue/cli`

2. Criando o projeto

   ​			`vue create cypress-vue`

3. Escolher recursos manualmente

   ​			![img](https://static.imasters.com.br/wp-content/uploads/2019/05/03160201/1_aeUAP_TsbsJnG74aKIQxUw.png)

4. Selecionando o recurso: Cypress

   ![img](https://static.imasters.com.br/wp-content/uploads/2019/05/03160240/1_8ag-NTNJwIuXi71_CYUKNQ.png)

5. Acessando a aplicação

   ​	`cd cypress-vue`

   

   Servindo a aplicação:

   ​		`npm run serve`

   Acesse em seu navegador favorito o endereço:

   ​		http://localhost:8080/

   

   