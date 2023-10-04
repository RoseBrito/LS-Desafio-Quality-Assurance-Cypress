/// <reference types="Cypress" />

const dados = require('../fixtures/dados.json')

describe('Crie sua conta Lacrei Saúde', function() {
  beforeEach(()=>{
    cy.visit('https://frontend-lacrei-pessoa-usuaria.vercel.app/')
  })

  it("Realiza cadastro de novo usuário com sucesso", ()=>{
    cy.get('[type="button"]').click()
    cy.get('[id="first_name"]').type(dados.first_name, {log:false})
    cy.get('[id="last_name"]').type(dados.last_name, {log:false})
    cy.get('[id="email"]').type(dados.email, {log:false})
    cy.get('[id="password1"]').type(dados.password1, {log:false})
    cy.get('[id="password2"]').type(dados.password2, {log:false})

    cy.get('.checkbox-container > :nth-child(1) > label').click()
      .should('be.visible')
    cy.get(':nth-child(2) > label').click()
      .should('be.visible')

    cy.get('[type="submit"]').click()

    cy.get('.box-info > :nth-child(1)').should('exist').and('have.text', "O e-mail pode demorar alguns minutos para chegar.")
        
    })
  })