/* Export your NodeJS module from this file */

const isPalindrome = (palindrome) => {

    if(typeof palindrome !== 'string'){
        var obj = {
            date:  new Date(),
            message: "Type of says that it's a diffent kind of type ",
          };
        
        return obj;
    }

    const array = palindrome.split("");

    if(array.length===0)
        return false;

    let flag = true;
    
    for (let i = 1; i < array.length; i++) {
        if (array[i - 1] !== array[array.length - i]) {
            flag = false;
            break;
        }
    }

    return flag;
}

module.exports.isPalindrome= isPalindrome;
