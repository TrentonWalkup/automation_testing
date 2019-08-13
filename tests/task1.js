const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai').use(require('chai-as-promised'));
const driver = new Builder().forBrowser('chrome').build();

describe('Task1 - selenium node js', () => {

  it('generate button clicks until test passes', () => {
    let test = driver.get('http://the-internet.herokuapp.com/add_remove_elements/')
      .then(_=> driver.findElement({css: '#content > div > button'}).click())
      .then(_=> driver.sleep(1000))
      .then(_=> driver.findElements({className: 'added-manually'})
      .then(buttons=> expect(buttons.length).to.equal(5)))
      return test
  });

  afterEach(()=> driver.quit())
});
