const fs = require('fs');

const requestHandler = (request , response)=>{
    response.setHeader('Content-Type','text/html');
    const url = request.url ;
    const method = request.method ;
    if (url === '/'){
        response.write(
          `<html> 
                <head> <title> Home Page </title> </head>
            <body>
                <h1> 
                    welcome in the Home page 
                </h1>
                <form action="/message" method="POST"><input type="text" name="message"> <button type="submit"> send Message </button> </form>
            </body>
            </html>
            `
        );
        return response.end();
    }
    if(url === '/message' && method === 'POST'){
        const dataChunks = []; 
        request.on('data',chunck => {
            console.log(chunck);
            dataChunks.push(chunck);
        });
        return request.on('end',()=> { 
            const parsedBody = Buffer.concat(dataChunks).toString().split('=')[1];
            console.log(parsedBody);
            fs.writeFile('message.txt',parsedBody,()=>{
                response.statusCode = 302;
                response.setHeader('Location' , '/');
                console.log("hello first");
                return response.end();
            });
            console.log("hello end");
        });
    }
    response.write(
        `<html> 
                <head> <title> Home Page </title> </head>
            <body>
                <h1> 
                    welcome in my App 
                </h1>
            </body>
            </html>
            `
    );
};

exports.handler = requestHandler ;