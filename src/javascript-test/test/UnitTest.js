const palindrome= require('../palindrome');
const assert = require('chai').assert;

describe('palidrome', function(){
    it('palindrome should be true with oso', function(){
        assert.equal(palindrome.isPalindrome("oso"), true);
    });

    it('palindrome should be true with reconocer', function(){
        assert.equal(palindrome.isPalindrome("reconocer"), true);
    });

    it('palindrome should be false with non palindrome', function(){
        assert.equal(palindrome.isPalindrome("reconocere"), false);
    });

    it('palindrome should be false with empty string', function(){
        assert.equal(palindrome.isPalindrome(""), false);
    });

});


describe('randomAsyncStringIsPalindrome', function(){
    it('randomAsyncStringIsPalindrome should be true with oso', function(){
        assert.equal(palindrome.randomAsyncStringIsPalindrome({data: "oso"}), true);
    });

    it('randomAsyncStringIsPalindrome should be true with reconocer', function(){
        assert.equal(palindrome.randomAsyncStringIsPalindrome({data: "reconocer"}), true);
    });

    it('randomAsyncStringIsPalindrome should be false with non palindrome', function(){
        assert.equal(palindrome.randomAsyncStringIsPalindrome({data: "reconocere"}), false);
    });

    it('randomAsyncStringIsPalindrome should be false with empty string', function(){
        assert.equal(palindrome.randomAsyncStringIsPalindrome({data: ""}), false);
    });

});