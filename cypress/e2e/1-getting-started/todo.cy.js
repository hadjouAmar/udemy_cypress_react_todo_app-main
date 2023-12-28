/// <reference types="cypress" />


describe('example to-do app', () => {

  it('mock', () => {
    cy.intercept({
      method: 'Get',
      url: 'http://localhost:8080/todos'
    },
      {
        body: [
          {
            "name": "tache0",
            "id": 2976,
            "isComplete": false
          },
          {
            "name": "tache1",
            "id": 3320,
            "isComplete": false
          },
          {
            "name": "tache2",
            "id": 3963,
            "isComplete": false
          },
          {
            "name": "tache3",
            "id": 9410,
            "isComplete": false
          }
        ]
      }).as('getToList');
    cy.visit('http://localhost:3000')
  })


})
