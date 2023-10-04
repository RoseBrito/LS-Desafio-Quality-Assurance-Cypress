/// <reference types="Cypress" />

const perfil = require('../fixtures/perfil.json')

//Script Web
describe('Boas-Vindas a Lacrei Saúde - Web', () => {
  beforeEach(()=>{
    cy.visit('https://frontend-lacrei-pessoa-usuaria.vercel.app/')
  })

  it('fazer login e acessar a página secreta do usuário', () => {
    cy.get('[id="email"]').type(perfil.email, {log:false});
    cy.get('[id="password"]').type(perfil.password, {log:false});
    cy.get('[type="submit"]').click();
    cy.get('.only-desktop').should('be.visible', 'Encontre profissionais da saúde buscando por sintomas, especialidade, localidade, etnia, identidade de gênero ou sexualidade.')
  })
})

//Script Mobile
describe('Boas Vindas a Lacrei Saúde - Mobile', () => {
  beforeEach(()=>{
    cy.visit('https://frontend-lacrei-pessoa-usuaria.vercel.app/')
  })

  it('fazer login e acessar a página secreta do usuário', () => {
    cy.viewport(375,667) //iphone-8
    cy.get('[id="email"]').type(perfil.email, {log:false});
    cy.get('[id="password"]').type(perfil.password, {log:false});
    cy.get('[type="submit"]').click();
    cy.get('h3.only-mobile').should('be.visible', 'Busque por sintomas, especialidade, localidade, etnia, identidade de gênero ou sexualidade.')
  })
});