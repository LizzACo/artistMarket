const express = require("express");
const recordRoutes = express.Router();
const signIn = require("../controller/authenticate-controller");
const res = require("express/lib/response");
const passport = require('passport');  // authentication



  recordRoutes.route("/signUp").post(function (req, response) {
      
    try{
        console.log("rutessss")
        signIn.signUpController(req,response)
    }
    catch(e)    
    {
        res.status(500).json(
            {
                "result": "error",
                "message": e.message
            }
        )
    }

  });

  recordRoutes.post( "/signIn" , passport.authenticate('local', { failureMessage: 'not valid' }) , function (req, res) {
      
    try{

        if(req.user == "succuess")
        {
          res.status(200).json({
            "result": "unauthorized",
          })
        }
        else{
          res.status(200).json({
            "result": "succuess",
            "user": req.user
          })
        }

    }
    catch(e)    
    {
        res.status(500).json(
            {
                "result": "error",
                "message": e.message
            }
        )
    }

  });

  recordRoutes.route("/signOut").get(function (req, res) {
    
    try{
        req.session.destroy(function (err) {
            res.status(200).json(
                {
                    "result": "success",
                    "message": "logged out"
                }
            )
          });
    }
    catch(e)    
    {
        res.status(500).json(
            {
                "result": "error",
                "message": e.message
            }
        )
    }
    
    });


  module.exports = recordRoutes