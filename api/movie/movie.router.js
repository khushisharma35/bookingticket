const { createMovie, deleteMovie, getMovies, updateMovie } = require("./movie.controller");
const router = require("express").Router();
const {checkToken} =require("../../auth/token_validation");


router.post("/",createMovie);
router.get("/",checkToken,getMovies);
router.patch("/",checkToken,updateMovie);
router.delete("/",checkToken,deleteMovie);


module.exports = router;