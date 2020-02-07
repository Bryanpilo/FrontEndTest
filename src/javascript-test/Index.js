const palindrome= require('./palindrome');
const assert = require('chai').assert;

console.log(palindrome.isPalindrome("oso"))
console.log(palindrome.isPalindrome("reconocer"))
console.log(palindrome.isPalindrome(""))
console.log(palindrome.isPalindrome(new Date()))
