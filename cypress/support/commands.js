/// <reference types="cypress" />

Cypress.Commands.add('todolist', () => {
    const todo = [
        { "name": "T001", "isComplete": false },
        { "name": "T002", "isComplete": false },
        { "name": "T003", "isComplete": false }
    ]
    todo.forEach(todo => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:8080/todos',
            body: {
                "name": todo.name,
                "isComplete": todo.isComplete
            }
        })
    })
})