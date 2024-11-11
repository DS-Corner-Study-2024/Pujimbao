//8번
const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
    res.write('<h1>http 모듈을 사용한 HTTP 서버</h1>');
    res.end('<p>8081번 포트에서 실행되는 서버</p>');
})
    .listen(8081, () => {
        console.log('8081번 포트에서 서버 대기 중');
    });

//9번
const http = require("http");

http.createServer((req, res) => {
    console.log(req.url, req.headers.cookie);
    res.writeHead(200, {'Set-Cookie' : 'mycookie=test'});
    res.end('Hello Cookie');
}).listen(8083, () => {
    console.log("8083번 포트에서 서버 대기 중입니다!");
});