const mongoose = require('mongoose') ;
require("dotenv").config();   

const dbconnect = () => {
    mongoose.connect(process.env.DATA_BASE,{
        useNewUrlParser: true, 
       useUnifiedTopology: true 
    })
    .then(()=>{
        console.log("Mongoose db connect")
    
    })
    .catch((error)=>{
        console.log("Reciver an error")
        console.error(error.message)
        process.exit(1);
    })
}
module.exports = dbconnect;