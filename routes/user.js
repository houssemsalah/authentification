const express= require("express");
const router = express.Router();

const {loginRules,registerRules,validation} = require("../middleware/authValidator")
const isAuth = require("../middleware/passport");
/* router.get("/",(req,res)=>{
    res.send("hello world");
}); */


const controllers = require("../controllers/user")
// register
router.post("/register",registerRules(),validation, controllers.register);
// login
router.post("/login", loginRules(), validation , controllers.login);
// get current user
router.get("/current", isAuth() ,controllers.current);
   

module.exports = router;