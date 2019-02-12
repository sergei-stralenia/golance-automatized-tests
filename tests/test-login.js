/*
Сценарий 1
1. Зайти на лендинг
2. Открыть страницу логина
3. Вводить правильные и неправильные данные, сделать соответствующие проверки
*/

module.exports = {
  beforeEach: function(browser, done) {
    browser.resizeWindow(1280, 800, done);
  },

  'Successful Login Testing': function (browser) {
    browser
      .url('https://new-ui-stage.golance.com')
      .waitForElementVisible('body')
      .pause(1000)
      .click('a.button-nav-login')
      .waitForElementVisible('body')
      .pause(1000);

    browser
      .assert.urlContains('login')
      .assert.title('Login | goLance');

    browser.end();
  },

  'Failed Login Testing': function (browser) {
    browser
      .url('https://new-ui-stage.golance.com')
      .waitForElementVisible('body')
      .pause(1000)
      .click('a.button-nav-login')
      .waitForElementVisible('body')
      .pause(1000);

    browser
      .assert.urlContains('login')
      .assert.title('Login | goLance');

    browser.end();
  },
};
