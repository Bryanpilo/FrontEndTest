const http = require('http');
const palindrome= require('./palindrome');

const server = http.createServer((req, res) => {
    if(req.url === '/isPalindrome'){
        res.write(palindrome.isPalindrome("oso").toString());
        
        console.log(palindrome.isPalindrome("oso"));

        res.end();
    }
});
server.listen(3000);
console.log("listening on port 3000....")
