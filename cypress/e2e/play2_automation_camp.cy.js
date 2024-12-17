describe('template spec', () => {
  it('click buttons', () => {
    cy.visit('https://play2.automationcamp.ir/')
    cy.contains('Your Sample Alert Button!').click()
    cy.contains('You Pressed the OK Button!')
    cy.get('#fname').type('João Victor')
    cy.get('#lname').type('Calegário')
    cy.contains('Male').click()
    cy.get('#option').select('Option 3')
    cy.get('input[type="checkbox"]').check(['Option 1', 'Option 3'])
    cy.get('input[name="Options"]').type('Chocolate')
    cy.get('#favcolor').click()
    cy.get('input[type="color"]')
      .invoke('val', '#FF1566')
    cy.get('input[type="date"]').type('2024-06-16')
    cy.get('#quantity').type('5')
    cy.contains('Double-click me').dblclick();
  })
})