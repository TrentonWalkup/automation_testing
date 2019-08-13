const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai').use(require('chai-as-promised'));
const driver = new Builder().forBrowser('chrome').build();

describe('Task4 - selenium node js', () => {
  it('fix broken login test & assert url is correct', () => {
    let test = driver.get('http://the-internet.herokuapp.com/login')
      .then(_=> driver.findElement({name: 'username'}).sendKeys('tomsmith'))
      .then(_=> driver.findElement({name: 'password'}).sendKeys('oldPassword!')) //newpassword: SuperSecretPassword!
      .then(_=> driver.findElement({css: '#wrong'}).click())
      .then(_=> driver.getCurrentUrl())
      return test
  });
  afterEach(()=> driver.quit())
});
