const http = require('http');
const cookie = require('cookie'); // request 헤더에 있는 쿠키정보를 사용하기 쉽게 객체로 만들어줌

http.createServer((req, res) => {
    let cookies = {};

    if(req.headers.cookie !== undefined) {
        cookies = cookie.parse(req.headers.cookie);
    }
    
    console.log(cookies);

    res.writeHead(200, {
        'Set-Cookie': ['yummy_cookie=choco', 'tasty_cookie=strawberry']
    })

    res.end('cookie!!');

}).listen(3000);