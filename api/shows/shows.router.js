const {createshow,getshows,updateshow,deleteshow  } = require("./shows.controller");
const router = require("express").Router();
const {checkToken} =require("../../auth/token_validation");


router.post("/",createshow);
router.get("/",checkToken,getshows);
router.patch("/:id",checkToken,updateshow);
router.delete("/:id",checkToken,deleteshow);


module.exports = router;