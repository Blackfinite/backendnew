require('dotenv').config()
const express = require("express")
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send("hello World")
})


app.get('/home',(req,res)=>{
    res.send("Hello this is the home")
})

app.get('/login',(req,res)=>{
    res.send("<h1>Please Do Login</h1>")
})
app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on the port ${process.env.PORT}`)
})