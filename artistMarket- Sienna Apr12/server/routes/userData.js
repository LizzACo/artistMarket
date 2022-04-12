const express = require("express");
const recordRoutes = express.Router();
const userController = require("../controller/user-controller");
// This help convert the id from string to ObjectId for the _id.
var ObjectId = require('mongodb').ObjectID;


recordRoutes.get("/getAlluser" , function (req, res) {
    try{
        console.log("routessss")
        userController.findAllUser(req,res)
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
