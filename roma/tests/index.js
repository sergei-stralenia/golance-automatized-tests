const loginUser = require('./../custom-commands/loginUser');
const logoutUser = require('./../custom-commands/logoutUser');

module.exports = {
  before: browser => loginUser(browser),
  after: browser => logoutUser(browser),
  'Open-Contrats-Page': async browser => {
    browser.waitForElementVisible('body');
    browser.click('span[class="gl burger"]');
    browser.click('a[href="/my/contracts"]');
  },
  'Open-Contract-Page': async browser => {
    browser.click('span[class="gl burger open"]');
    browser.waitForElementVisible('i[class="filter icon"]', 1000);
    browser.click('i[class="filter icon"]');
    browser.click('input[value="employer"]');
    browser.pause(2000);
    browser.click('a[href="/contracts/5bf7f30529f1150006f08b0c"]');
  },
  'Open-Contract-Settings': async browser => {
    browser.waitForElementVisible('i[class="large setting icon"]', 10000);
    browser.click('i[class="large setting icon"]');
  },
  'Change-Contract-Title': async browser => {
    browser.waitForElementVisible('button[ng-click="switchTitleMode(true)"]', 5000);
    browser.click('button[ng-click="switchTitleMode(true)"]');
    browser.setValue('input[ng-model="titleModel.title"]', 'goLance1');
  },
  'Save-Contract-Title': async browser => {
    browser.click('button[ng-click="form.submit(changeTitle(), null, true)"]');
    browser.click('i[ng-click="(closeModal || $close)()"]');
  },
};
