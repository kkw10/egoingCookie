const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Set-Cookie': ['yummy_cookie=choco', 'tasty_cookie=strawberry']
    })
    res.end('cookie!!');
}).listen(3000);