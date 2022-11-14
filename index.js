// console.log(Date());
// const { add, sub } = require('./calculator');
// console.log(add(4, 6))
// console.log(sub(4, 6))
// import { add, sub } from './calculator'

// const calc = require('./calculator').default;
// console.log(calc.add(4, 6))


// simple server
// const http = require("http");
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end('<h1>Hello World</h1>');
// }).listen(5000);
// // server.listen(3000, '127.0.0.1');
// console.log('listening to 3000');


// Routing
const http = require("http");

let routes = ['/about', '/gallery'];

const about = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>About Page</h1>');
}

const gallery = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Gallery Page</h1>');
}

const server = http.createServer((req, res) => {
    // routes.map((route) => {
    if (req.url === '/about') {
        // const nam = route.split('/');
        // res.end('<h1>About Page</h1>');
        about(req, res)
    } else if (req.url === '/gallry') {
        res.end('<h1>Gallery Page</h1>');
    }
    // })
}).listen(5000);
// server.listen(3000, '127.0.0.1');
console.log('listening to 5000');
