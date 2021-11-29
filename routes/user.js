const express= require("express");
const router = express.Router();
const user = require('../controllers/user')
// const isAuth = require('../middleware/passport')
const authAdmin = require('../middleware/authAdmin')


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
//
router.get('/info',  isAuth(),  controllers.getUser)


//get all users
router.route('/users')
    .get(controllers.getUsers)

    
//isAuth(), authAdmin,

// delete & update user

router.route('/users/:id')
    .delete( controllers.deleteUser)
    .put( controllers.updateUser)

//isAuth(), authAdmin,
//isAuth(), authAdmin,
router.patch('/addcart', isAuth(), user.addCart)

module.exports = router;