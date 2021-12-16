const http = require('http');
const url  = require("url");
const fs = require('fs')

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj  = JSON.parse(data)

const server = http.createServer((req, res) => {
    const pathName = req.url;
    console.log(pathName);

    if(pathName === 'overview' || pathName === '/'){
        res.end('this is the OVERVIEW page');
    } else if ( pathName === '/product') {
        res.end('this is the PRODUCT page');
    }else if ( pathName === '/api') {
        res.end(data)
    } else {
        res.writeHead(404, {
            'content-type': 'text/HTML',
            'my-own-header': 'page-not-found-header'
        });
        res.end('<h1>page not found</h1>');
    }
});

server.listen(8000, '127.0.0.1')


