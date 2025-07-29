/// <reference types="cypress" />

import * as saucedemoCSS from '../selectors/saucedemo';

Cypress.Commands.add('openSaucePage', () => {
  cy.visit(saucedemoCSS.saucedemoURL);

});
