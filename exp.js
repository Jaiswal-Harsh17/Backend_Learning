const express = require('express');
const morgan = require('morgan');
const app = express();
const dbConnection = require('./config/db')
const userModel = require('./models/user')

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

app.set("view engine", 'ejs')


// Custom Middleware
// app.use((res,req,next)=>{
//     console.log("This is middleware");
//     // const a=2;
//     // const b=5;
//     // console.log(a+b);
//     return next();
// })

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', async (req,res) => {
    const {username, email, password} = req.body
    const newUser = await userModel.create({
        username:username,
        email:email,
        password:password
    })
    res.send(newUser);
})
// app.post('/register', (req,res) => {
//     console.log(req.body)
//     res.send('User Register')
// })

app.get('/about',(req,res)=>{
    res.send("About page")
})
app.get("/get-users",(req,res)=>{
    userModel.find().then((users)=>{
        res.send(users);
    })
})
app.get('/profile',(req,res)=>{
    res.send("Profile Page")
})

app.post('/get-form-data', (req,res) => {
    console.log(req.body);
    res.send('Data Received');
})
app.listen(3000);