module.exports = {
  'Success login': async browser => {
    browser
      .url('https://stage.golance.com')
      .waitForElementVisible('body')
      .click('a[href="/login"]');

    browser.assert.title('Login | goLance');

    browser.setValue('input[type=email]', 's.stralenia@paralect.com');
    browser.setValue('input[type=password]', '1234321');
    browser.click('#loginButton');
    browser.waitForElementVisible('body');

    browser.assert.title('goLance');
    browser.assert.urlEquals('https://stage.golance.com/');
    browser.assert.containsText('body', 'WEEKLY ACTIVITY');

    browser.end();
  },
  'Failed login': async browser => {
    browser
      .url('https://stage.golance.com')
      .waitForElementVisible('body')
      .click('a[href="/login"]');

    browser.assert.title('Login | goLance');

    browser.setValue('input[type=email]', 's.stralenia@paralect.com');
    browser.setValue('input[type=password]', '12343211');
    browser.click('#loginButton');
    browser.pause(1000);

    browser.assert.title('Login | goLance');
    browser.assert.urlEquals('https://stage.golance.com/login');
    browser.url(url => {
      browser.assert.equal(url.value, 'https://stage.golance.com/login');
    });
    browser.assert.containsText('body', 'Login or password is invalid.');

    browser.end();
  },
  'Success logout': browser => {
    browser
      .url('https://stage.golance.com')
      .waitForElementVisible('body')
      .click('a[href="/login"]');

    browser.assert.title('Login | goLance');

    browser.setValue('input[type=email]', 's.stralenia@paralect.com');
    browser.setValue('input[type=password]', '1234321');
    browser.click('#loginButton');
    browser.waitForElementVisible('body');

    browser.waitForElementVisible('img.ui.clickable.avatar.navigation-user-avatar');
    browser.click('img.ui.clickable.avatar.navigation-user-avatar');
    browser.waitForElementVisible('div[data-element="top-nav-popup"]');
    browser.click('a[href="/auth/local/signout"]');
    browser.waitForElementVisible('body');

    browser.assert.elementPresent('a[href="/login"]');

    browser.end();
  },
};
