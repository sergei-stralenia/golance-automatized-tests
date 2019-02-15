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

  'Successful Login Testing': function(browser) {
    browser
      .url('https://new-ui-stage.golance.com')
      .waitForElementVisible('body')
      .pause(1000)
      .click('a.button-nav-login')
      .waitForElementVisible('body')
      .pause(1000);

    browser
      .assert.urlContains('login')
      .assert.title('Login | goLance')
      .assert.elementPresent('input[type=email]')
      .assert.elementPresent('input[type=password]')
      .assert.elementPresent('.login-button');

    browser
      .setValue('input[type=email]', 's.stralenia@paralect.com')
      .setValue('input[type=password]', '1234321')
      .click('.login-button')
      .waitForElementVisible('body')
      .pause(1000);

    browser
      .assert.urlEquals('https://stage.golance.com/')
      .assert.title('Dashboard')
      .expect.element('main').text.to.contain('WEEKLY ACTIVITY');

    browser.end();
  },

  'Failed Login Testing': function(browser) {
    browser
      .url('https://new-ui-stage.golance.com')
      .waitForElementVisible('body')
      .pause(1000)
      .click('a.button-nav-login')
      .waitForElementVisible('body')
      .pause(1000);

    browser
      .assert.urlContains('login')
      .assert.title('Login | goLance')
      .assert.elementPresent('input[type=email]')
      .assert.elementPresent('input[type=password]')
      .assert.elementPresent('.login-button');

    browser
      .setValue('input[type=email]', 's.stralenia@paralect.com')
      .setValue('input[type=password]', '1234123')
      .click('.login-button')
      .waitForElementVisible('body')
      .pause(1000);

    browser
      .assert.urlContains('login')
      .assert.title('Login | goLance')
      .assert.elementPresent('.validation-errors')
      .expect.element('main').text.to.contain('Login or password is invalid.');

    browser.end();
  },
};
