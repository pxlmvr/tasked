describe('task creation form', () => {
  beforeEach(() => {
    cy.visit('localhost:5173')
  })

  it('attempting to submit before filling the fields shows error messages', () => {
    cy.get('button#create-task-button').click()

    cy.findAllByText(/mandatory field/i).should('have.length', 2)
  })

  it('touching a field and not filling it triggers error message', () => {
    cy.findByLabelText('Title').click().blur()

    cy.findByText(/mandatory field/i).should('not.be.null')
  })

  it('cleans up the form after creating a task', () => {
    cy.findByLabelText('Title').type('A title')
    cy.findByLabelText('Description').type('A description')

    cy.get('button#create-task-button').click()

    cy.findByLabelText('Title').should('have.value', '')
    cy.findByLabelText('Description').should('have.value', '')

    cy.findAllByText(/mandatory field/i).should('have.length', 0)
  })

  it('a created task is added to the task list', () => {
    cy.findByLabelText('Title').type('My new task')
    cy.findByLabelText('Description').type('A description')

    cy.get('button#create-task-button').click()

    cy.findByText('My new task').should('not.be.null')
  })
})
