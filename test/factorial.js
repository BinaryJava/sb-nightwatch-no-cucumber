describe('Factorial calculator', function() {
    before(browser => browser.navigateTo('https://qainterview.pythonanywhere.com/'));
  
    it('I calculate all the factorials between 10 and 100', function(browser) {
      const factorial = browser.page.Shared()
      for (let inputValue = 10; inputValue <= 100; inputValue++) {
        factorial.sendKeys('@inputBox', inputValue)
        factorial.click('@calculateButton')
        // factorial.expect.element('@factorialAnswer').text.contain(inputValue).before(1000)
        const expectedValue = factorial.calculateFactorial(inputValue)
        factorial.verifyFactorialValue(inputValue, expectedValue)
        factorial.clearValue('@inputBox')
      }
    });
  
    after(browser => browser.end());
  });
