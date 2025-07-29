import * as sauceCSS from '../selectors/saucedemo';

export class SaucePage {

  verifyPageIsOpened():this {

    cy.url().should(`include`, sauceCSS.saucedemoURL);

    return this;
  };

  loginAsStandardUser():this {

    cy.get(sauceCSS.loginInput).type(Cypress.env('USERNAME'));
    cy.get(sauceCSS.passwordInput).type(Cypress.env('PASSWORD'));
    cy.get(sauceCSS.loginButton).click();
    cy.url().should('include', '/inventory.html');

    return this;
  };

  addItemToCart(): this {
    cy.get(sauceCSS.addToCartBackpack).click();
    return this;
  }

  verifyBadgeAmount(amount: number): this {
    cy.get(sauceCSS.cartBadge).should('have.text', `${amount}`);
    return this;
  }
};
