const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai').use(require('chai-as-promised'));
const driver = new Builder().forBrowser('chrome').build();

describe('Task5 - selenium node js', () => {
  it('return correct number of profile images', () => {
    let test = driver.get('http://the-internet.herokuapp.com/dynamic_content')
    .then(elm=> expect(elm.toString()).to.equal(3))
      return test
  });
  afterEach(()=> driver.quit())
});
