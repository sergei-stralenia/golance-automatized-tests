module.exports = {
  'Success login': async browser => {
    browser
      .url('https://new-ui-stage.golance.com')
      .waitForElementVisible('body')
      .click('a[href="https://new-ui-stage.golance.com/login"]')

      .assert.title('Login | goLance')

      .setValue('input[type=email]', 'e.koren@paralect.com')
      .setValue('input[type=password]', '123456')
      .click('button.login-button')

      .waitForElementVisible('body', 'WEEKLY ACTIVITY', 5000)
      .assert.title('Dashboard')
      .assert.urlEquals('https://stage.golance.com/')

      .end();
  },
  'Failed login': async browser => {
    browser
      .url('https://new-ui-stage.golance.com')
      .waitForElementVisible('body')
      .click('a[href="https://new-ui-stage.golance.com/login"]')

      .assert.title('Login | goLance')

      .setValue('input[type=email]', 'e.koren@paralect.com')
      .setValue('input[type=password]', 'qwerty')
      .click('button.login-button')
      .pause(1000)

      .assert.title('Login | goLance')
      .assert.urlEquals('https://new-ui-stage.golance.com/login')
      .assert.containsText('body', 'Login or password is invalid.')

      .end();
  },
  'Success signup': async browser => {
    browser
      .url('https://new-ui-stage.golance.com')
      .waitForElementVisible('body')
      .click('a[href="/signup"]')

      .assert.title('Signup | goLance')

      .setValue('div .input:nth-of-type(1) > input[type=text]', 'Yegor')
      .setValue('div .input:nth-of-type(2) > input[type=text]', 'Koren')
      .setValue('input[type=email]', 'e.koren@paralect.com')
      .setValue('div .input:nth-of-type(4) > input[type=password]', 'goLance123')
      .setValue('div .input:nth-of-type(5) > input[type=password]', 'goLance123')
      .click('button.signup-button')

      .waitForElementVisible('body', 'Thank You for registering', 3000)
      .assert.title('Signup | goLance')
      .assert.urlContains('https://new-ui-stage.golance.com/signup/success')

      .end();
  },
  'Failed signup (Unsafe password)': async browser => {
    browser
      .url('https://new-ui-stage.golance.com')
      .waitForElementVisible('body')
      .click('a[href="/signup"]')

      .assert.title('Signup | goLance')

      .setValue('div .input:nth-of-type(1) > input[type=text]', 'Yegor')
      .setValue('div .input:nth-of-type(2) > input[type=text]', 'Koren')
      .setValue('input[type=email]', 'e.koren@paralect.com')
      .setValue('div .input:nth-of-type(4) > input[type=password]', 'goLance')
      .setValue('div .input:nth-of-type(5) > input[type=password]', 'goLance')
      .click('button.signup-button')
      .pause(1000)

      .assert.title('Signup | goLance')
      .assert.urlEquals('https://new-ui-stage.golance.com/signup')
      .assert.containsText('body', 'Password must contain from 8 to 20 characters, at least one 1 number or special character.')

      .end();
  },
};
