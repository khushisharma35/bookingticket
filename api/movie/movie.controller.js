const { response } = require("express");
const {
    create,getMovies,updateMovie , deleteMovie} =require("./movie.service");
    //const {genSaltSync,hashSync} = require("bcrypt");
    //const { sign } =require("jsonwebtoken");
    //const bcrypt = require('bcrypt');



module.exports ={  
createMovie: (req, res) => {
        const body=req.body;

        create(body
        ,(err, results) => {
            if(err){
                
                return response.status(500).json({
                    success:0,
                    message: "Database connection error"
                });
            }
            return res.status(201).json({
                success:1,
                data: results,
            });
        });
    },
    
    getMovies:(req,res) =>{
        getMovies((err,results) => {
            if (err){
                console.log(err);
                return;
            }
            return res.status(200).json({
                success:1,
                data:results
            });
        });
    },
    updateMovie:(req,res) => {
        const body= req.body;
        const id = req.Params.id;
        updateMovie(body,id,(err , results) =>{
            if(err){
                console.log(err);
                return false;
            }
            console.log(results)
            if(!results){
                return res.status(400).json({
                    success:0,
                    message: "failed to update user"
                });
            }
            return res.status(200).json({
                success:1,
                message:"updated successfully"
            });
        });
    },
    deleteMovie:(req,res) => {
        const data = req.body;
        deleteMovie(data,(err,results) =>{
            if(err) {
                console.log(err);
                return;
            }
            if(!results) {
                return res.status(404).json({
                    success:0,
                    message: "record not found"
                });
            }
            return res.status(200).json({
                success:1,
                message:"user deleted successfully"
            });
        });
    }

};