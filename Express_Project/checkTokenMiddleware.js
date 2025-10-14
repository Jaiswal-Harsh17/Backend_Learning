// Making middleware in separate file and exporting it to the other file
let myToken = "12345"
let mypass = "12345"
let checkToken = (req,res,next)=>{
    // console.log(req.query.token) // undefined
    if(req.query.token == "" || req.query.token == undefined){
        return res.send(
            {
            status:0,
            msg:"Please fill the token"
            }
        )
    }
    if(req.query.token != myToken){
        return res.send(
            {
                status:0,
                msg:"Please fill the correct token"
            }
        )
    }
    console.log("Welcome to Token Middleware")

    if(req.query.pass == "" || req.query.pass == undefined){
        return res.send(
            {
            status:0,
            msg:"Please fill the password"
            }
        )
    }
    if(req.query.pass != mypass){
        return res.send(
            {
                status:0,
                msg:"Please fill the correct password"
            }
        )
    }
    console.log("Welcome to Password Middleware")
    next();
}
module.exports = {checkToken}   
