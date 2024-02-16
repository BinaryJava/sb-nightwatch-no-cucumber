const sharedFunctions = {
  calculateFactorial (integer) {
    let answer = BigInt(1)
      for (let i = BigInt(2); i <= integer; i++) {
        answer *= BigInt(i)
      }
      return Number(answer).toString()
  },

  verifyFactorialValue (inputValue, expectedValue) {
    browser.assert.textEquals('p[id="resultDiv"]', `The factorial of ${inputValue} is: ${expectedValue}`)
  }
};

module.exports = {
  url: 'https://qainterview.pythonanywhere.com/',

  commands: [sharedFunctions],

  elements: {
    inputBox: {
      selector: 'input[id="number"]'
    },

    calculateButton: {
      selector: 'button[id="getFactorial"]'
    },

    factorialAnswer: {
      selector: 'p[id="resultDiv"]'
    }
  }
};
