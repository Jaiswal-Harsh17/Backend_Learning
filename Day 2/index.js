let http = require("http");
let server = http.createServer((req,res)=>{
    if(req.url == "/news"){
        res.end("Welcome to news Website");
    }
    if(req.url == "/"){
        res.end("Welcome to Backend")
    }
})
server.listen(3000); //http://localhost:3000