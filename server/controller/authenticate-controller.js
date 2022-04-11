const express = require("express");
const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-strategy');
const passport = require("passport");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;
const User = require("../models/UserSchema")


exports.signUpController = async (req,res)=>{

    try{

        const {name , email , password} = req.body;

        const oldUser = await User.findOne({email});

        if(oldUser)
        {
            res.status(409).send("user already exists")
        }
        
        encyptedpassword = await bcrypt.hash(password , 10)

        const user = await User.create({name , email , password: encyptedpassword})

        res.status(200).json({
            "result": "success",
            "data": user
        })

    }
    catch(e)
    {
        res.status(500).json({
            "result": "error",
            "message": e.message
        })
    }

        
}


exports.signinLocalController = async (req,res,next)=>{

    try{
        passport.authenticate('local',
        (err, user, info) => {
          if (err) {
            return next(err);
          }
      
          if (!user) {
            res.status(401)
            .json({
                "result": "unauthorized",
                "msg": "not authenticated"
            })  
          }
      
          req.logIn(user, function(err) {
            if (err) {
              return next(err);
            }
      
            res.status(200)
            .json({
                "result": "success",
                "msg": "authenticated"
            })         
         });
      
        })(req, res, next);

    }
    catch(e)
    {
        res.status(500).json({
            "result": "error",
            "message": e.message
        })
    }

        
}