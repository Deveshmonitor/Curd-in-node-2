const express = require('express');
const app = express()
const dbconnect = require('./config/database');
require("dotenv").config();
const PORT = process.env.PORT || 4000;  

dbconnect();

// middleware to parse json request body 
app.use(express.json());

















app.listen(PORT,() =>{
    console.log(`server start no ${PORT}`);
})

const todoRoutes = require("./routes/todos"); 
app.use(todoRoutes);

app.get('/',(req,res)=>{
    res.send("devesh sen");
})