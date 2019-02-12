module.exports = {
  // 'Success login': async browser => {
  //   browser
  //     .url('https://stage.golance.com')
  //     .waitForElementVisible('body')
  //     .click('a[href="/login"]');

  //   browser.assert.title('Login | goLance');

  //   browser.windowMaximize('current')
  //   browser.setValue('input[type=email]', 's.stralenia@paralect.com');
  //   browser.setValue('input[type=password]', '1234321');
  //   browser.waitForElementVisible('#loginButton', 1000)

  //   browser.click('#loginButton');
  //   browser.waitForElementVisible('body');

  //   // browser.assert.title('goLance');
  //   browser.assert.urlEquals('https://stage.golance.com/');
  //   browser.assert.containsText('body', 'WEEKLY ACTIVITY');

  //   browser.click('a[href="/referrals/blogging"]');

  //   browser.assert.containsText('body', 'Blog Articles');

  //   // browser.pause(3000);

  //   // browser.waitForElementVisible('a[href="/referrals/blogging/article/new"]', 1000);
  //   browser.click('a[href="/referrals/blogging/article/new"]');

  //   // browser.assert.containsText('body', 'Submit Article');
  //   // browser.assert.elementPresent(button[href = "/referrals/blogging/article/new"]);

  //   // browser.click('button[text()="Submit Article"]');

  //   browser.setValue('input[placeholder="Article Title"]', 'Eternal Sunshine of the Spotless Mind');
  //   browser.pause(1000);

  //   browser.setValue('textarea[placeholder="Begin writing your story..."]', 'Eternal Sunshine of the Spotless Mind, Eternal Sunshine of the Spotless Mind, Eternal Sunshine of the Spotless Mind');
  //   browser.pause(1000);

  //   browser.setValue('div[class=dropzone]', require('path').resolve('/home/My-PC/Desktop/img.png'))


  //   browser.useXpath().click("//button[text()='Submit Article']")


  //   browser.end();
  // },
  'Login': async browser => {
    browser
      .url('https://stage.golance.com')
      .waitForElementVisible('body')
      .click('a[href="/login"]');

    browser.assert.title('Login | goLance');

    browser.windowMaximize('current')
    browser.setValue('input[type=email]', 'jknjh@jbnknj.com');
    browser.setValue('input[type=password]', 'goLance1');
    browser.waitForElementVisible('#loginButton', 1000)

    browser.click('#loginButton');
    browser.waitForElementVisible('body');

    browser.assert.urlEquals('https://stage.golance.com/');
    browser.assert.containsText('body', 'WEEKLY ACTIVITY');
  },

  'Open Company Page': async browser => {
    browser.click('a[href="/my/companies"]');

    browser.pause(1000);
    browser.assert.containsText('body', 'MY COMPANIES');

    browser.useXpath().click("//a[text()='DreamWorks 2']");
    browser.assert.elementPresent("//h1[text()='DreamWorks 2']").useCss();
  },
  'Edit Company Name': async browser => {
    const editButtton = 'a[ng-click="editProfile()"]';
    browser.waitForElementVisible(editButtton);
    browser.click(editButtton);
    // browser.useXpath().click("//a//span[text()='Edit']")


    browser.click('button[ng-click="forms.mainInfo.edit()"]');

    browser.setValue('input[ng-model="company.profileInfo.name"]', ' 3');

    browser.click('a[ng-click="doneEditing()"]');
    browser.pause(3000);
    browser.useXpath().assert.elementPresent("//h1[text()='DreamWorks 3']").useCss();
  },
  'Success logout': browser => {
    browser.click('img.ui.clickable.avatar.navigation-user-avatar');
    browser.waitForElementVisible('div[data-element="top-nav-popup"]');
    browser.click('a[href="/auth/local/signout"]');
    browser.waitForElementVisible('body');

    browser.assert.elementPresent('a[href="/login"]');

    browser.end();
  },
};
