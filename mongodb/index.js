const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app =express();

mongoose.set("strictQuery", false);


// const static_path =path.join(__dirname);

// app.use(express.static());
console.log(path.join(__dirname));
console.log(path.join(__dirname));
mongoose.connect(`mongodb://localhost:27017`,{
useNewUrlParser:true,
useUnifiedTopology:true
},(err)=>{
    if(err){
        console.log(err);

    }

    else{
        console.log(`succesfully connected`);

    }
})
app.listen(3000,()=>{
    console.log(`on port 3000.`);
})


