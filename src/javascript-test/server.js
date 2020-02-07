const http = require('http');
const palindrome= require('./palindrome');

var obj = {
    data: "oso",
};

var MysteryStringObjectGetter= async function (obj){
    const url = palindrome.randomAsyncStringIsPalindrome(obj);
    var response = await url;
    return response;        
}

const server = http.createServer((req, res) => {
    if(req.url === '/isPalindrome'){
        res.write(palindrome.isPalindrome("oso").toString());
        
        console.log(palindrome.isPalindrome("oso"));

        res.end();
    }

    if(req.url === '/MysteryStringObjectGetter'){
        
        MysteryStringObjectGetter(obj)
        .then(val => {
            res.write(val.toString());
            console.log(val)
        })
        .then(end =>{          
            res.end();
        })
        .catch(err => console.log(err))
        
    }
});

server.listen(3000);
console.log("listening on port 3000....")
