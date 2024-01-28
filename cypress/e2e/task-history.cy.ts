describe('task history', () => {
  beforeEach(() => {
    cy.visit('localhost:5173')

    cy.findByLabelText('Title').type('A title')
    cy.findByLabelText('Description').type('A description')

    cy.get('button#create-task-button').click()
  })

  it('a newly created task has only one entry and it\'s "todo"', () => {
    cy.visit('localhost:5173')

    cy.findByTestId('MoreVertIcon').click()
    cy.findByText(/task history/i).click()

    cy.findByTestId('task-history-dialog').should('be.visible')

    cy.findByText('The task was marked as "Todo"').should('be.visible')
  })
  it.only('updating a task adds a new entry in the history', () => {
    cy.findByTestId('MoreVertIcon').click()
    cy.findByText(/edit task/i).click()

    cy.findByRole('combobox').click()
    cy.findByText('In Progress').click()

    cy.findByText('Save changes').click()

    cy.findByTestId('MoreVertIcon').click()
    cy.findByText(/task history/i).click()

    cy.findByText('The task was marked as "Todo"').should('be.visible')
    cy.findByText('The task was marked as "In Progress"').should('be.visible')
  })
})
