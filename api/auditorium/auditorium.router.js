const { createauditorium,getauditorium,updateauditorium,deleteauditorium} = require("./auditorium.controller");
const router = require("express").Router();
const {checkToken} =require("../../auth/token_validation");


router.post("/",createauditorium);
router.get("/",checkToken,getauditorium);
router.patch("/:id",checkToken,updateauditorium);
router.delete("/",checkToken,deleteauditorium);


module.exports = router;