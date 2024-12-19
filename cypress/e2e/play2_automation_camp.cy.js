import { homePlay2 } from "../support/play2"
describe('template spec', () => {
  it('click buttons', () => {
    cy.visit('https://play2.automationcamp.ir/')
    cy.contains(homePlay2.buttons.alertButton).click()
    cy.contains(homePlay2.labels.youPressedButton)
    cy.contains(homePlay2.buttons.doubleClick).dblclick();

    cy.get(homePlay2.Inputs.userLogin).type(homePlay2.values.login)
    cy.get(homePlay2.Inputs.passwordLogin).type(homePlay2.values.password)

    cy.get(homePlay2.buttons.loginButton).contains(homePlay2.labels.loginText).click()

    cy.contains(homePlay2.labels.succsessLogin)
    cy.contains(homePlay2.labels.back)
    cy.contains(homePlay2.buttons.clickHere).click()
    
    cy.get(homePlay2.Inputs.firstName).type('João Victor')
    cy.get(homePlay2.Inputs.lastName).type('Calegário')
    cy.contains(homePlay2.radioButton.genderMale).click()

    cy.get(homePlay2.radioButton.option).select(homePlay2.radioButton.option3Text)
    cy.get().check(['Option 1', 'Option 3'])
    cy.get('input[name="Options"]').type('Chocolate')

    cy.get('#favcolor').click()
    cy.get('input[type="color"]').invoke('val', '#FF1566')
    cy.get('input[type="date"]').type('2024-06-16')
    cy.get('#quantity').type('5')
    
    // O botão de submit está programado para redirecionar para a tela inicial de pagina de pesquisa do google.

  })
})