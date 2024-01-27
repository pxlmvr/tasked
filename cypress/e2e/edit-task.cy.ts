describe('edit a task', () => {
  beforeEach(() => {
    localStorage.setItem(
      'tasks',
      JSON.stringify([
        {
          id: '123',
          title: 'Task',
          description: 'Description',
          createdAt: 123,
          status: 'todo',
        },
      ]),
    )
  })

  it('is shown an error screen if the task does not exist', () => {
    cy.visit('localhost:5173/edit?id=doesNotExist')

    cy.findByText(/looks like this task does not exist.../i).should(
      'be.visible',
    )
  })
  it('is shown an error screen if no task id is present in query', () => {
    cy.visit('localhost:5173/edit?')

    cy.findByText(/looks like this task does not exist.../i).should(
      'be.visible',
    )
  })
  it('can click button to return to task view', () => {
    cy.visit('localhost:5173/edit?id=doesNotExist')

    cy.findByText(/looks like this task does not exist.../i).should(
      'be.visible',
    )

    cy.findByText(/back to tasks/i).click()

    cy.url().should('not.include', '/edit')
  })
  it('form is prefilled with task values', () => {
    cy.visit('localhost:5173/edit?id=123')

    cy.findByLabelText('Title').should('have.value', 'Task')
    cy.findByLabelText('Description').should('have.value', 'Description')
    cy.findByTestId('status-select').should('have.value', 'todo')
  })
  it('Can edit the values', () => {
    cy.visit('localhost:5173/edit?id=123')

    cy.findByLabelText('Title').clear().type('My task')
    cy.findByLabelText('Description').clear().type('Another Description')
    cy.findByRole('combobox').click()
    cy.findByText('Blocked').click()

    cy.findByLabelText('Title').should('have.value', 'My task')
    cy.findByLabelText('Description').should(
      'have.value',
      'Another Description',
    )
    cy.findByTestId('status-select').should('have.value', 'blocked')
  })

  it('attempting to save when one field is not filled shows error', () => {
    cy.visit('localhost:5173/edit?id=123')

    cy.findByLabelText('Title').clear()

    cy.findByText('Save changes').click()

    cy.url().should('contain', '/edit?id=123')
    cy.findByText(/mandatory field/i).should('be.visible')
  })

  it.only('applies changes on save', () => {
    cy.visit('localhost:5173/edit?id=123')

    cy.findByLabelText('Title').clear().type('Edited task')

    cy.findByText('Save changes').click()

    cy.url().should('not.contain', '/edit?id=123')
    cy.findByText('Edited task').should('be.visible')
  })
})
