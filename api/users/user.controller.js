const { response } = require("express");
const {
    create,getUSERByUSERId,getUSERS,UpdateUSER ,deleteUSER,getUSERByUSERemail} =require("./user.service");
const { genSaltSync , hashSync,compareSync} = require("bcrypt");
const { sign } =require("jsonwebtoken");


module.exports ={
    createUser: (req, res) => {
        const body=req.body;
        const salt =genSaltSync(10);
        body.password = hashSync(body.password,salt);
        create(body,(err , results) =>{
            if(err){
                console.log(err);
                return response.status(500).json({
                    success:0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success:1,
                data: results
            });
        });
    },
    getUSERByUSERId:(req,res) =>{
        const USERId =req.param.USERId;
        getUSERByUSERId(id,(err,results) => {
            if(err){
                console.log(err);
                return;
            }
            if(!results) {
                return res.json({
                    success:0,
                    message: "Record is not found"
                });
            }
            return res.json({
                success:1,
                data:results
            });
        });
    },
    getUSERS:(req,res) =>{
        getUSERS((err,results) => {
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
    UpdateUSER:(req,res) => {
        const body= req.body;
        const salt =genSaltSync(10);
        body.password = hashSync(body.password,salt);
        UpdateUSER(body,(err , results) =>{
            if(err){
                console.log(err);
                return false;
            }
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
    deleteUSER:(req,res) => {
        const data = req.body;
        deleteUSER(data,(err,results) =>{
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
    },
    login:(req, res) => {
        const body =req.body;
        getUSERByUSERemail(body.email,(err,results) => {
            if (err) {
                console.log(err);
            }
            if(!results) {
                return res.json({
                    success:0,
                    message:"invalidemail or password"
                });
            }
            const result = compareSync(body.password,results.password);
            if(result){
                result.password = undefined;
                const jsontoken = sign({ result:results}, "qwe1234" );
                return res.json({
                    success:1,
                    message:"login successfully done",
                    token: jsontoken
                });
            } else{
            return res.json({
                success:0,
                data: "invalid email or password"

            });
        }

        });
    },

};