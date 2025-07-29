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
    cy.get(sauceCSS.inventoryContainer).should('be.visible');

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

  goToCart(): this {
    cy.get(sauceCSS.cartIcon).click();
    return this;
  }

  checkout(firstName: string, lastName: string, postalCode: string): this {
    cy.get(sauceCSS.checkoutButton).click();
    cy.get(sauceCSS.firstNameInput).type(firstName);
    cy.get(sauceCSS.lastNameInput).type(lastName);
    cy.get(sauceCSS.postalCodeInput).type(postalCode);
    cy.get(sauceCSS.continueButton).click();
    return this;
  }

  finishCheckout(): this {
    cy.get(sauceCSS.finishButton).click();
    return this;
  }

  verifyOrderComplete(): this {
    cy.get(sauceCSS.completeHeader).should('contain', 'Thank you for your order!');
    return this;
  }

  loginAsLockedOutUser(): this {
    cy.get(sauceCSS.loginInput).type('locked_out_user');
    cy.get(sauceCSS.passwordInput).type(Cypress.env('PASSWORD'));
    cy.get(sauceCSS.loginButton).click();
    return this;
  }

  verifyLoginError(message: string): this {
    cy.get(sauceCSS.errorMessage).should('contain', message);
    return this;
  }

  sortProductsLowToHigh(): this {
    cy.get(sauceCSS.sortDropdown).should('be.visible').select('Price (low to high)');
    return this;
  }

  verifyFirstProductPrice(expectedPrice: string): this {
    cy.get(sauceCSS.itemPrice).first().should('contain', expectedPrice);
    return this;
  }
};
