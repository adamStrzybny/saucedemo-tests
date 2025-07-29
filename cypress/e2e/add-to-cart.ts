import { sauceContext } from '../support/utils/sauce-context';

sauceContext((SaucePage) => {
  it('Add item to cart and verify badge', () => {
    SaucePage()
      .verifyPageIsOpened()
      .loginAsStandardUser()
      .addItemToCart()
      .verifyBadgeAmount(1);
  });
});
