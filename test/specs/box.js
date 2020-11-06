const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        browser.url("https://account.box.com/login")
        browser.$('#login-email').waitForDisplayed(5000);
        browser.$('#login-email').setValue("abcd");
    });
});


