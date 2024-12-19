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
    cy.get(homePlay2.checkBox.option).check([homePlay2.values.option1, homePlay2.values.option3])
    cy.get(homePlay2.select.option).type(homePlay2.values.optionChocolate)

    cy.get(homePlay2.select.color).click()
    cy.get('input[type="color"]').invoke('val', '#FF1566')
    cy.get(homePlay2.Inputs.date).type(homePlay2.values.date)
    cy.get(homePlay2.Inputs.quantity).type('5')
    
  })
})