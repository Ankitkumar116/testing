let express= require('express');
require('dotenv').config();
let app=express();
app.get('/',(req,res)=>{
res.send("hiii its runnning...")
})
app.listen(process.env.PORT,()=>{
console.log(process.env.PORT)
})