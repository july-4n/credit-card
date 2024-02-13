describe('Тестируем корректное введение данных в форму', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234');
  });

  it('Корректное заполнение поля "name"', () => {
    cy.get('.input__holder').type('Vasya Vasyliev');
    cy.get('.input__holder').should('have.value', 'Vasya Vasyliev');
  });

  it('Корректное заполнение поля "card number"', () => {
    cy.get('.input__number').type('1234123412341234');
    cy.get('.input__number').should('have.value', '1234 1234 1234 1234');
  });

  it('Корректное заполнение поля "cvv"', () => {
    cy.get('.input__cvv').type('123');
    cy.get('.input__cvv').should('have.value', '123');
  });
});
