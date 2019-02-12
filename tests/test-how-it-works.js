/*
Сценарий для Алены

1. Зайти на лендинг
2. Открыть страницу How it works
3. Проверить, что появляются правильные блоки и текст для фрилансера и работодателя
*/

module.exports = {
  'How it Works Pages Testing': function (browser) {
    browser
      .url('https://new-ui-stage.golance.com')
      .waitForElementVisible('body')
      .click('a[href="/how-it-works/employers"]')
      .waitForElementVisible('body')
      .pause(1000);

    browser
      .assert.urlContains('how-it-works')
      .assert.title('How It Works - Employers | goLance')
      .assert.elementPresent('.section-cashback');

    browser.expect.element('main').text.to.contain('Post a job');
    browser.expect.element('main').text.to.contain('Hourly or Fixed Price Contracts');

    browser
      .click('a[href="/how-it-works/freelancers"]')
      .waitForElementVisible('body')
      .pause(1000);

    browser
      .assert.title('How It Works - Freelancers | goLance')
      .assert.urlContains('how-it-works')
      .assert.elementPresent('.section-billing');

    browser.expect.element('main').text.to.contain('Start Working');
    browser.expect.element('main').text.to.contain('How Does Billing work?');

    browser.end();
  },
};
