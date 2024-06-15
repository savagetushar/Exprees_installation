const express=require('express')
const app=express();
const PORT=4010;



const hostname='localhost';
app.get('/',(req,res)=>{
    res.send("Hello World!")
})


app.listen(PORT,()=>{
    console.log('server running at ${hostname}:${PORT}');
})