const http = require('http');

const server =http.createServer((req,res)=>{
    switch(req.url){
        case '/about':
        res.end('Abodut Page');
        break;
        
        case '/contact':
            res.end('Contact us page');
            break;
        
            case '/':
                res.end('Home  page');
                break;

            default:
                res.end(`<h1>Opps</h1> <br>
                <a href= "/" > back to home page</a>`)
    }
    // res.write("Hello Micky Welcome to Node js!")
    // console.log(req)
    // console.log(res)
});
server.listen(3000);