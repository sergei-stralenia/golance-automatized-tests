/*
Сценарий 2
1. Зайти на лендинг
2. Открыть страницу регистрации
3. Вводить правильные и неправильные данные, сделать соответствующие проверки 
*/

module.exports = {
  beforeEach: function(browser, done) {
    browser.resizeWindow(1280, 800, done);
  },

  'Successful Signup Testing': function(browser) {
    browser
      .url('https://new-ui-stage.golance.com')
      .waitForElementVisible('body')
      .pause(1000)
      .click('a[href="/signup"]')
      .waitForElementVisible('body')
      .pause(1000);

    browser
      .assert.urlContains('signup')
      .assert.title('Signup | goLance')
      .assert.elementPresent('.signup-button');

    browser
      .setValue('input[type=text]', 'John')
      .setValue('input[type=text]', 'Doe')
      .setValue('input[type=email]', 'johndoe@gmail.com')
      .setValue('input[type=password]', '123456qQ')
      .setValue('input[type=password]', '123456qQ')
      .click('.signup-button')
      .waitForElementVisible('body')
      .pause(1000);

    browser
      .assert.urlContains('signup/success')
      .assert.title('Signup | goLance')
      .expect.element('main').text.to.contain('Thank You for registering');

    browser.end();
  },
};
