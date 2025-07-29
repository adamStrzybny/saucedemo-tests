import { sauceContext } from '../support/utils/sauce-context';

sauceContext((SaucePage) => {
  it('Sort products by price low to high', () => {
    SaucePage()
      .verifyPageIsOpened()
      .loginAsStandardUser()
      .sortProductsLowToHigh()
      .verifyFirstProductPrice('$7.99');
  });
});
