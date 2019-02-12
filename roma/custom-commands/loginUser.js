module.exports = login = browser => {
  browser
    .url('https://stage.golance.com')
    .waitForElementVisible('body')
    .click('a[href="/login"]');

  browser.assert.title('Login | goLance');

  browser.setValue('input[type=email]', 'tets@test123.com');
  browser.setValue('input[type=password]', 'goLance1');
  browser.click('#loginButton');
  browser.waitForElementVisible('body');

  // browser.assert.title('goLance');
  browser.assert.urlEquals('https://stage.golance.com/');
  browser.assert.containsText('body', 'WEEKLY ACTIVITY');
}

