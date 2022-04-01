const express = require("express");
const recordRoutes = express.Router();
const signIn = require("../controller/authenticate-controller");
const res = require("express/lib/response");


  recordRoutes.route("/signUp").post(function (req, response) {
      
    try{
        console.log("rutessss")
        signIn.signUpController(req,response)           //signupController handles signup logic refer to authenticate-controller.js
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

  recordRoutes.route("/signIn").post(function (req, response) {
      
    try{
        signIn.signinController(req,response)       //signinController handles signup logic refer to authenticate-controller.js         
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

  recordRoutes.route("/signOut").post(function (req, response) {
      
    try{
        signIn.logout(req,response)
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