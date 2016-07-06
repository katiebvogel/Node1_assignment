var mod1 = require('./one.js');
var mod2 = require('./two.js');
var number;
module.exports = {
  combineFunction: combineFunction,
  accountBalance: accountBalance
}

function combineFunction(){
number = (mod2.makeItDollars(mod1.myRandom(100, 1000000)));
}

function accountBalance(){
  console.log("Account balance: \n " + number);
}

// combineFunction();
