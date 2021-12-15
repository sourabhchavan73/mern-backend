// creating new server using node.js 
const http = require('http');

const server = http.createServer((req, res) => {
    res.end("response from the server....!");
})

server.listen(8000, 'localhost', () => {
    console.log("server has started on 8000")
})