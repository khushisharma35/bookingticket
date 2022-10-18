const { response } = require("express");
const {
    create,getMovieById,getMovies,updateMovie ,getMovieByName, deleteMovie} =require("./movie.service");



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
            return res.status(200).json({
                success:1,
                data: results,
            });
        });
    },
    getMovieById:(req,res) =>{
        const id =req.param.USERId;
        getMovieById(id,(err,results) => {
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
    getMovies:(req,res) =>{
        getMovies((err,results) => {
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
    updateMovie:(req,res) => {
        const body= req.body;
        updateMovie(body,(err , results) =>{
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
    deleteMovie:(req,res) => {
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