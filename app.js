require("dotenv").config();
const express =require("express");
const app =express();
const userRouter = require("./api/users/user.router");
const pool = require("./config/database");
const bodyParser=require('body-parser')

pool.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

app.use(express.json())
app.use(bodyParser.json())

app.use("/api/users",userRouter);
app.listen(process.env.APP_PORT, () =>{
    console.log("server up and running",process.env.APP_PORT);
});