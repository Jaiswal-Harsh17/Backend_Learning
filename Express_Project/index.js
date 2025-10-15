let express = require("express")
const {checkToken} = require("./checkTokenMiddleware");

let app = express()
app.use(express.json())

let myToken = "123"
let mypass = "123"

//Middleware 
// We will use middleware mainly for authentication
// Middleware is between req and res
// let checkToken = (req,res,next)=>{
//     console.log(req.query.token)
//     if(req.query.token == "" || req.query.token == undefined){
//         return res.send(
//             {
//             status:0,
//             msg:"Please fill the token"
//             }
//         )
//     }
//     if(req.query.token != myToken){
//         return res.send(
//             {
//                 status:0,
//                 msg:"Please fill the correct token"
//             }
//         )
//     }
//     console.log("Welcome to Token Middleware")
//     next();
// }
// app.use(checkToken)  // Middleware

// // Another way to create middleware
// app.use((req,res,next)=>{
//     if(req.query.pass == "" || req.query.pass == undefined){
//         return res.send(
//             {
//             status:0,
//             msg:"Please enter the password"
//             }
//         )
//     }
//     if(req.query.pass != mypass){
//         return res.send(
//             {
//                 status:0,
//                 msg:"Please enter correct password"
//             }
//         )
//     }
//     console.log("Welcome to Password Middleware")
//     next();
// })

app.get("/", (req,res) =>{ // http://localhost:3000
    res.send({status :1, msg: "Home Page API"})
})
app.get("/news", checkToken, (req,res) =>{
    res.send({status :2, msg: "News Page API"})
})
app.get("/news/:id",(req,res)=>{
    let currentId = req.params.id
    res.send("News Details API "+ currentId)
})

app.post("/login",(req,res)=>{
    console.log(req.body) 
    res.status(200).json({
        status:4,
        msg:"Login API",
        bodyData: req.body,
        queryData:req.query
    })
    // res.send(
    //     {
    //         status:3, 
    //         msg:"Login API", 
    //         bodyData:req.body,
    //         queryData:req.query

    //     }
    // )
})
app.listen(3000);  