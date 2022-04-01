const express = require("express");
const passport = require('passport');
const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-strategy');

const recordRoutes = express.Router();

const dbo = require("../db/conn");

const ObjectId = require("mongodb").ObjectId;

const User = require("../models/UserSchema")

const jwtToken = require("jsonwebtoken")


exports.signUpController = async (req,res)=>{

    try{

        const {name , email , password} = req.body;

        const oldUser = await User.findOne({email});

        if(oldUser)
        {
            res.status(409).json({
                "error": "user already exists"
            })
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

exports.signinController = async (req,res)=>{

    try{
        const {email , password} = req.body;

        if(!email && !password)
        {
            response.status(400).send("input required")
        }

        const oldUser = await User.findOne({email});

        if(oldUser)  // registered user is found and user document is returned
        {
            const passwordCompare = await bcrypt.compare( password ,  oldUser.password   ) // encrypted password comparison logic

            if(passwordCompare)
            {
                let token = jwtToken.sign({  // Token is created with account specific information specifiaccly id and email
                    id: oldUser._id,
                    email: oldUser.email
                },
                process.env.SECRET ,
                {
                    expiresIn: 86400  // Cookie stored in browser permitting account access until configured expiry duration
                })

                res.cookie('jwt',token,{httpOnly: true, maxAge: 86400}) // Jwt token sent to client to store in cookie in name of jwt

                res.status(200)
                .json({
                    "result": "success",
                    "data": {
                        oldUser,
                        token
                    }
                })
            }
        }
        else{
            res.status(409).send("user does not exist")
        }

    }
    catch(e)
    {
        res.status(500).json({
            "result": "error",
            "message": e.message
        })
    }

        
}

exports.logout = async (req,res)=>{   // client logout request handled here
    try{

        res.cookie('jwt' , '' , { // cookie deleted so user has to re-authenticate
                maxAge: 1
        })

        res.status(200)
        .json({
            "result": "success",
            "data": {
            }
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