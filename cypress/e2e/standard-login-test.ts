import { sauceContext } from '../support/utils/sauce-context';

sauceContext((SaucePage) => {
  it('Log in to the app as standard user', () => {
    SaucePage()
      .verifyPageIsOpened()
      .loginAsStandardUser();
  });
});
