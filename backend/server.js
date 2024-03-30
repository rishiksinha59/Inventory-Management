const dotev=require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors=require("cors");

const app=express()

const PORT=process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server running on ${PORT}`);
    })
})
.catch((err)=>console.log(err));