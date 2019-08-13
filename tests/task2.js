const { expect } = require('chai').use(require('chai-as-promised'));

var string = 'fizzBuzz';

describe('Task2 - strings', () => {

  it('should return number of characters in a string', () => {
    expect(string).to.equal(8)
  });

  it('should return the first character in a string', () => {
    expect(string).to.contain()
  });

  it('check whether a string is blank or not', () => {
    let isStringBlank = ()=> {}
    expect(isStringBlank(string)).to.be.false
  });

  it('only return first four charcters of the string', () => {
    expect(string).to.equal()
  });
});
