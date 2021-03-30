const http = require('http');


const server = http.createServer((request , response)=>{
    response.setHeader('Content-Type','text/html');
    response.write(`<html>
                            <head>
                                <title>my first html page</title>
                            </head>
                            <body> 
                                <h1> hello iskander you are running 10 ly NodeJs server  </h1>
                            </body></html>`
                    )
    response.end();
    console.log("hello");
});

server.listen(3000);
