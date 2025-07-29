import { sauceContext } from '../support/utils/sauce-context';

sauceContext((SaucePage) => {
  it('Fail login as locked-out user', () => {
    SaucePage()
      .verifyPageIsOpened()
      .loginAsLockedOutUser()
      .verifyLoginError('Sorry, this user has been locked out.');
  });
});
