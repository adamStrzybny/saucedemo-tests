import { SaucePage } from '../pages/sauce';

export const sauceContext = (
  callback: (saucePage: () => SaucePage) => void,
): void => {
  context('Sauce Demo Tests', () => {
    beforeEach(() => {
      cy.openSaucePage();
    });

    const openSaucePage = (): SaucePage => new SaucePage();

    callback(openSaucePage);
  });
};
