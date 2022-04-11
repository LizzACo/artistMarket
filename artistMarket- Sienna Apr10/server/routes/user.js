// const express = require("express");
// const passport = require('passport');
// const bcrypt = require('bcryptjs');
// const LocalStrategy = require('passport-strategy');

// // recordRoutes is an instance of the express router.
// // We use it to define our routes.
// // The router will be added as a middleware and will take control of requests starting with path /record.
// const recordRoutes = express.Router();

// // This will help us connect to the database
// const dbo = require("../db/conn");

// // This help convert the id from string to ObjectId for the _id.
// const userController = require("../controller/user-controller");


// // This section will help you get a list of all the records.
// // recordRoutes.route("/user").get(function (req, res) { //collection name
// //   let db_connect = dbo.getDb("artistMarket");
// //   db_connect
// //     .collection("user")
// //     .find({})
// //     .toArray(function (err, result) {
// //       if (err) throw err;
// //       res.json(result);
// //     });
// // });

// recordRoutes.route("/getAlluser").get(function (req, res) { //collection name
//   try{
//     userController.findAllUser(req,res)
//   }
//   catch(e)
//   {
//     res.status(500).json(
//       {
//           "result": "error",
//           "message": e.message
//       }
//   )
//   }
// });

// // This section will help you get a single record by id
//   recordRoutes.route("/user/:id").get(function (req, res) {
//   let db_connect = dbo.getDb();
//   let myquery = { "_id": ObjectId( req.params.id )};
//   db_connect
//       .collection("user")
//       .findOne(myquery, function (err, result) {
//         if (err) throw err;
//         res.json(result);
//       });
// });

// // This section will help you create a new record.
// recordRoutes.route("/user/add").post(function (req, response) {
//   let db_connect = dbo.getDb();
//   let myobj = { 
//     username: req.body.username,
//     email: req.body.email,
//   };
//   db_connect.collection("user").insertOne(myobj, function (err, res) {
//     if (err) throw err;
//     response.json(res);
//   });
// });

// // This section will help you update a record by id.
// // this section may need some edits
// recordRoutes.route("/update/:id").post(function (req, response) {
//   let db_connect = dbo.getDb();
//   let myquery = { "_id": ObjectId( req.params.id )};
//   let newvalues = {
//     $set: {
//       username: req.body.username,
//       email: req.body.email,
//     },
//   };
//   db_connect
//     .collection("user")
//     .updateOne(myquery, newvalues, function (err, res) {
//       if (err) throw err;
//       console.log("1 document updated");
//       response.json(res);
//     });
// });

// // This section will help you delete a record
// recordRoutes.route("/:id").delete((req, response) => {
//   let db_connect = dbo.getDb();
//   let myquery = { "_id": ObjectId( req.params.id )};
//   db_connect.collection("user").deleteOne(myquery, function (err, obj) {
//     if (err) throw err;
//     console.log("1 document deleted");
//     response.json(obj);
//   });
// });

// recordRoutes.route("/user/registerUser").post(function (req, response) {
//   let db_connect = dbo.getDb();
//   // const hashedPassword = bcrypt.hash(req.body.password, 10);
//   let myobj = { 
//     name: req.body.name,
//     email: req.body.email,
//     password: req.body.password
//   };
//   db_connect.collection("user").insertOne(myobj, function (err, res) {
//     if (err) throw err;
//     response.json(res);
//   });
// });

// recordRoutes.route("/loginUser").post(function (req, response) { 
// 	let db_connect = dbo.getDb("artistMarket");
// 	db_connect
// 	  .collection("user")
// 	  .find({email: req.body.email,password: req.body.password})
// 	  .toArray(function (err, result) {
// 		console.log(result);
// 		if (err) throw err;
// 		response.json(result);
// 	  });
//   });


// // module.exports = function (passport) {
// //   passport.use(
// //     new localStrategy((username, password, done) => {
// //       User.findOne({ username: username }, (err, user) => {
// //         if (err) throw err;
// //         if (!user) return done(null, false);
// //         bcrypt.compare(password, user.password, (err, result) => {
// //           if (err) throw err;
// //           if (result === true) {
// //             return done(null, user);
// //           } else {
// //             return done(null, false);
// //           }
// //         });
// //       });
// //     })
// //   );

// //   passport.serializeUser((user, cb) => {
// //     cb(null, user.id);
// //   });
// //   passport.deserializeUser((id, cb) => {
// //     User.findOne({ _id: id }, (err, user) => {
// //       const userInformation = {
// //         username: user.username,
// //       };
// //       cb(err, userInformation);
// //     });
// //   });
// // };

// module.exports = recordRoutes;