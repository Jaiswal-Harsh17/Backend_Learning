let express = require("express")

let app = express()
app.use(express.json())

app.get("/", (req,res) =>{
    res.send({status :1, msg: "Home Page API"})
})
app.get("/news", (req,res) =>{
    res.send({status :2, msg: "News Page API"})
})

app.post("/login",(req,res)=>{
    console.log(req.body) 
    res.send({status:3, msg:"Login API",data:req.body})
})
app.listen(3000);  