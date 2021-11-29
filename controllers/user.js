const express= require("express");

const bcrypt=require("bcrypt");
const jwt = require("jsonwebtoken")
const User=require("../models/User");


// login

exports.login=async (req,res) => {
    const {email,password}=req.body ;
    try{
        //  find if the user exist
        const searchedUser = await User.findOne({email});
        //  if the email not exist
        if(!searchedUser){
            return res.status(400).send({msg:"bad Cridential"});
        }
        //  password are equals
        const match = await bcrypt.compare(password, searchedUser.password);

        if(!match){
            return res.status(400).send({msg:"bad Cridential"});
        }
        // creé un token
        const payload={
            _id: searchedUser._id,
        };
        const token=await jwt.sign(payload,process.env.SecretOrKey, { expiresIn:3600,})
        console.log(token);

        //  send the user
          res.status(200).send({ user:searchedUser ,msg: "success", token: ` Bearer ${token}`, });


    } catch (error) {
        res.status(500).send({msg: " can not get the user "});
    }
};



exports.register = async (req,res) => {
    const { name, lastName, email, password,phone,location,age}=req.body;
    try {
        const newUser=new User({name, lastName, email, password,phone,location,age})
      
      //    check if the email exists
            const searchedUser=await User.findOne({email}) 
            if (searchedUser){
                return res.status(400).send({ msg: "email already exist"});
            }
      
        // hash password
           const salt=10;
           const genSalt= await bcrypt.genSalt(salt);
           const hashedPassword = await bcrypt.hash(password, genSalt);
           console.log(hashedPassword);
           newUser.password=hashedPassword;
        // generate a token
        

        //save the user
      const newUserToken =  await newUser.save();

        const payload={
            _id: newUserToken._id,
            name: newUserToken.name ,
        };
        const token = await jwt.sign(payload,process.env.SecretOrKey, { expiresIn:3600,})
        


        res.status(200).send({
            user :newUserToken,
            msg:"user is saved",
            token: ` Bearer ${token}` , });
    } catch (error) {
        res.status(500).send("can not save user")
        
    }
}

//current user
exports.current = (req,res) => {
    res.status(200).send({user: req.user});
}

// get user


exports.getUser= async (req, res) =>{
    try {
        const user = await Users.findById(req.user.id).select('-password')
        if(!user) return res.status(400).json({msg: "User does not exist."})

        res.json(user)
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}




    exports.getUsers= async(req, res) =>{
        try {
            const users = await User.find()
            res.json(users)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
   
    exports.deleteUser= async(req, res) =>{
        try {
            const user = await User.findOne({user: req.params.id})
            if(user) return res.status(400).json({msg: "user found" })
            

            await Category.findByIdAndDelete(req.params.id)
            res.json({msg: " user deleted"})
       
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
    exports.updateUser= async(req, res) =>{
        try {
            const {name,lastName,age,phone,picture,location,isAdmin,email} = req.body;
            await User.findOneAndUpdate({_id: req.params.id}, {name,lastName,age,phone,picture,location,isAdmin,email})

            res.json({msg: "user Updated "})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }

    

    exports.addCart= async (req, res) =>{
        try {
            const user = await Users.findById(req.user.id)
            if(!user) return res.status(400).json({msg: "User does not exist."})

            await Users.findOneAndUpdate({_id: req.user.id}, {
                cart: req.body.cart
            })

            return res.json({msg: "Added to cart"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }

    
    exports.logout = async (req, res) =>{
      
    }

    exports.history= async(req, res) =>{
        try {
            const history = await find({user_id: req.user.id})

            res.json(history)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }

    exports.addCart= async (req, res) =>{
        try {
            const user = await Users.findById(req.user.id)
            if(!user) return res.status(400).json({msg: "User does not exist."})

            await Users.findOneAndUpdate({_id: req.user.id}, {
                cart: req.body.cart
            })

            return res.json({msg: "Added to cart"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }



   


