import { sauceContext } from '../support/utils/sauce-context';

sauceContext((SaucePage) => {
  it('Complete checkout flow as standard user', () => {
    SaucePage()
      .verifyPageIsOpened()
      .loginAsStandardUser()
      .addItemToCart()
      .goToCart()
      .checkout('Adam', 'Strzybny', '00-000')
      .finishCheckout()
      .verifyOrderComplete();
  });
});
