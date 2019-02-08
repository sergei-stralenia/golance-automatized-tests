module.exports = {
  'Login': browser => {
    browser
      .url('https://stage.golance.com')
      .waitForElementVisible('body')
      .click('a[href="/login"]')
      .assert.title('Login | goLance')
      .setValue('input[type=email]', 's.stralenia@paralect.com')
      .setValue('input[type=password]', '1234321')
      .click('#loginButton')
      .waitForElementVisible('div[ui-view]', 10000)
      .assert.title('Dashboard')
      .assert.urlEquals('https://stage.golance.com/');
  },
  'Open profile': browser => {
    const avatarSelector = 'img.ui.clickable.avatar.navigation-user-avatar';
    const goToProfileSelector = 'div.ui.vertical.menu > a[profile-link="user"]';

    browser
      .assert.elementPresent(avatarSelector)
      .click(avatarSelector)
      .waitForElementVisible(goToProfileSelector, 10000)
      .click(goToProfileSelector)
      .waitForElementVisible('#about', 10000);
  },
  'Change name': browser => {
    const firstNameInputSelector = 'input[ng-model="form.data.firstName"]';
    const saveButtonSelector = 'button[ng-click="forms.mainInfo.submit(updateMainInfo(forms.mainInfo.data))"]';
    const newFirstName = Math.round(Math.random() * 100000);

    browser
      .click('a[ng-click="editProfile()"')
      .click('button[ng-click="forms.mainInfo.edit()"]')
      .waitForElementVisible(firstNameInputSelector, 10000)
      .clearValue(firstNameInputSelector)
      .setValue(firstNameInputSelector, newFirstName)
      .click(saveButtonSelector)
      .waitForElementNotVisible(saveButtonSelector, 10000)
  },
  'Logout': browser => {
    const avatarSelector = 'img.ui.clickable.avatar.navigation-user-avatar';
    const signoutSelector = 'a[ng-click="onUserLogout()"]';

    browser
      .click(avatarSelector)
      .waitForElementVisible(signoutSelector, 10000)
      .click(signoutSelector)
      .waitForElementVisible('a[href="/how-it-works/employers"]', 10000)
      .assert.title('goLance')
      .assert.urlEquals('https://stage.golance.com/')
      .end();
  },
}