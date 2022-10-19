const { response } = require("express");
const {
    create,getauditorium,updateauditorium,deleteauditorium,getauditoriumByName} =require("./auditorium.service");
    //const {genSaltSync,hashSync} = require("bcrypt");
    //const { sign } =require("jsonwebtoken");
    //const bcrypt = require('bcrypt');



module.exports ={  
createauditorium: (req, res) => {
        const body=req.body;

        create(body
        ,(err, results) => {
            if(err){
                
                return response.status(500).json({
                    success:0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success:1,
                data: results,
            });
        });
    },
    
    getauditorium:(req,res) =>{
        getauditorium((err,results) => {
            if (err){
                console.log(err);
                return;
            }
            return res.json({
                success:1,
                data:results
            });
        });
    },
    updateauditorium:(req,res) => {
        const body= req.body;
        const id = req.Params.id;
        updateauditorium(body,id,(err , results) =>{
            if(err){
                console.log(err);
                return false;
            }
            console.log(results)
            if(!results){
                return res.json({
                    success:0,
                    message: "failed to update user"
                });
            }
            return res.json({
                success:1,
                message:"updated successfully"
            });
        });
    },
    deleteauditorium:(req,res) => {
        const data = req.body;
        deleteMovie(data,(err,results) =>{
            if(err) {
                console.log(err);
                return;
            }
            if(!results) {
                return res.json({
                    success:0,
                    message: "record not found"
                });
            }
            return res.json({
                success:1,
                message:"user deleted successfully"
            });
        });
    }

};