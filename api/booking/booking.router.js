const {createbooking,updatebooking,getbooking,deletebooking  } = require("./booking.controller");
const router = require("express").Router();
const {checkToken} =require("../../auth/token_validation");


router.post("/",createbooking);
router.get("/",checkToken,getbooking);
router.patch("/:id",checkToken,updatebooking);
router.delete("/",checkToken,deletebooking);


module.exports = router;