const { createUser,getUSERByUSERId,getUSERS,UpdateUSER,deleteUSER,login } = require("./user.controller");
const router = require("express").Router();
const {checkToken} =require("../../auth/token_validation");


router.post("/",createUser);
router.get("/",checkToken,getUSERS);
router.get("/USERId",checkToken,getUSERByUSERId);
router.patch("/",checkToken,UpdateUSER);
router.delete("/",checkToken,deleteUSER);
router.post("/login",login); 


module.exports = router;