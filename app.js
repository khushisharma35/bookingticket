require("dotenv").config();
const express =require("express");
const app =express();
const userRouter = require("./api/users/user.router");
const movieRouter = require('./api/movie/movie.router');
const showsRouter = require("./api/shows/shows.router");
const bookingRouter = require('./api/booking/booking.router')
const auditoriumRouter = require('./api/auditorium/auditorium.router')
const pool = require("./config/database");
const bodyParser=require('body-parser')

pool.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

app.use(express.json())
app.use(bodyParser.json())

app.use("/api/users",userRouter);
app.use('/api/movies', movieRouter);
app.use('/api/auditorium',auditoriumRouter);
app.use('/api/shows',showsRouter);
app.use('/api/booking',bookingRouter)
app.listen(process.env.APP_PORT, () =>{
    console.log("server up and running",process.env.APP_PORT);

});