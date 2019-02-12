module.exports = login = browser => {
  browser.waitForElementVisible('img[click-outside="toggleAccountMenu(false)"]', 10000);
  browser.click('img[click-outside="toggleAccountMenu(false)"]');
  browser.waitForElementVisible('a[ng-click="onUserLogout()"]', 10000);
  browser.click('a[ng-click="onUserLogout()"]');
  browser.end();
}