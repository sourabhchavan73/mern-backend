const http = require('http');
const url  = require("url");
const fs = require('fs')
const replaceTemplate = require('./modules/replacetemplate')

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const overViewPage = fs.readFileSync(`${__dirname}/templates/overview.html`, 'utf-8')
const productPage = fs.readFileSync(`${__dirname}/templates/product.html`, 'utf-8')
const cardsPage = fs.readFileSync(`${__dirname}/templates/cards.html`, 'utf-8')
const dataObj  = JSON.parse(data)

const server = http.createServer((req, res) => {
    // const pathname = req.url;

    // console.log(url.parse(req.url, true));
    // console.log(req.url);

    const {query, pathname} = url.parse(req.url, true)
    console.log(query)

    // overview
    if(pathname === 'overview' || pathname === '/'){
        res.writeHead(200, { 'Content-type': 'text/html'});

        const cardsHtml = dataObj.map(el => replaceTemplate(cardsPage, el)).join('');
        const result = overViewPage.replace('{cards}', cardsHtml)
        res.end(result);

    // product
    } else if ( pathname === '/product') {
        const product = dataObj[query.id];
        const result = replaceTemplate(productPage, product);
        res.end(result)

    // api
    }else if ( pathname === '/api') {
        res.writeHead(200, { 'Content-type': 'application/json'})
        res.end(data)
    
    // 404 page
    } else {
        res.writeHead(404, {
            'Content-type': 'text/HTML',
            'my-own-header': 'page-not-found-header'
        });
        res.end('<h1>page not found</h1>');
    }
});

server.listen(8000, '127.0.0.1')


