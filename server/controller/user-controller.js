const express = require("express");
const passport = require('passport');
const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-strategy');

const recordRoutes = express.Router();

const dbo = require("../db/conn");

const ObjectId = require("mongodb").ObjectId;

const User = require("../models/UserSchema")


exports.findAllUser = async (req,res)=>{

    try{

        console.log("insideeee")

        const oldUser = await User.find({});
        
        res.status(200).json({
            "result": "success",
            "data": oldUser
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