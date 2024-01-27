describe('deleting a task', () => {
  beforeEach(() => {
    cy.visit('localhost:5173')

    cy.findByLabelText('Title').type('A title')
    cy.findByLabelText('Description').type('A description')

    cy.get('button#create-task-button').click()
  })

  it('removes the task from the task list', () => {
    cy.findByTestId('MoreVertIcon').click()
    cy.findByText(/delete task/i).click()
    cy.findByTestId('delete-task-confirm').click()
    cy.findByText('You have nothing to do.Go get some sleep!').should(
      'be.visible',
    )
  })

  it('closes the modal if the user clicks on "cancel"', () => {
    cy.findByTestId('MoreVertIcon').click()
    cy.findByText(/delete task/i).click()
    cy.findByTestId('delete-task-modal').should('be.visible')
    cy.findByText(/cancel/i).click()
    cy.findByTestId('delete-task-modal').should('not.exist')
  })
})
