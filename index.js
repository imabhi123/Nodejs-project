const http=require('http');
const path = require('path');
const fs=require('fs');
const url=require('url')
const data=fs.readFileSync(__dirname+'/data.json');
const dataObj=JSON.parse(data);
const server=http.createServer((req,res)=>{
    let pathName=req.url;
    if(pathName==='/'||pathName==='/overview'){
        res.end('<h1 style="text-align:center;">Abhishek Kumar</h1>')
    }
    else if(pathName==='/pushpa/raj'){
        res.end('<h1 style="text-align:center;">Pushpraj Kumar</h1>')
    }
    else if(pathName==='/api'){
        res.writeHead(200,{
            'content-type':'application/json',
        });
        res.end(data)
    }
    else{
        res.writeHead(404,{
            'content-type':'text/html',
            'my-own-header':'hello world'
        });
        res.end('<h1>page not found</h1>')
    }
});
server.listen(5000,()=>{
    console.log('server is listening on port 5000')
});