const http = require("http");

const server = http.createServer((req, res)=>{
     if(req.url === '/')
     {
        res.end('Welcome to home page')

     }
     if(req.url === '/about')
     {
        res.end('welcome to about pag ehahahawhahhahaha')

     }
     res.end(`
     <h1>Oops!!</h1>
     <p>XDD>DDDDDD</p>
     <a href="/" >STISNE ME BAJO </a>`)
})


server.listen(5000)