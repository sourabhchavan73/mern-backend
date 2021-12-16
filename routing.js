const http = require('http');
const url  = require("url");


const server = http.createServer((req, res) => {
    const pathName = req.url;
    console.log(pathName);

    if(pathName === 'overview' || pathName === '/'){
        res.end('this is the OVERVIEW page');
    } else if ( pathName === '/product') {
        res.end('this is the PRODUCT page');
    } else {
        // res.writeHead(404)
        // res.end("page not found")

        res.writeHead(404, {
            'content-type': 'text/HTML',
            'my-own-header': 'page-not-found-header'
        });
        res.end('<h1>page not found</h1>');
    }
});

server.listen(8000, '127.0.0.1')


