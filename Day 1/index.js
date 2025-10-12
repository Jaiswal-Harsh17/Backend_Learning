const {addtocart, changeQty} = require("./cartModule")

console.log("Welcome to JS")
console.log(10+18)
let l = [10,15,20,22,26,21]
l.forEach((value,index)=>{
    console.log(value, index+1)
})

console.log(addtocart());
console.log(changeQty());
console.log("Welcome");