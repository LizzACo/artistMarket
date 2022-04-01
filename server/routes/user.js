const express = require("express");
const passport = require('passport');
const bcrypt = require('bcryptjs');
const localStrategy = require('passport-local');
const User = require("../UserSchema");
const bodyParser = require("body-parser");
const app = express();
const cookieParser = require("cookie-parser");
const session = require("express-session");
const cors = require("cors");
app.use(cors());

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the records.
recordRoutes.route("/user").get(function (req, res) { //collection name
  let db_connect = dbo.getDb("artistMarket");
  db_connect
    .collection("user")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single record by id
  recordRoutes.route("/user/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { "_id": ObjectId( req.params.id )};
  db_connect
      .collection("user")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// This section will help you create a new record.
recordRoutes.route("/user/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    username: req.body.username,
    email: req.body.email,
  };
  db_connect.collection("user").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a record by id.
// this section may need some edits
recordRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { "_id": ObjectId( req.params.id )};
  let newvalues = {
    $set: {
      username: req.body.username,
      email: req.body.email,
    },
  };
  db_connect
    .collection("user")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { "_id": ObjectId( req.params.id )};
  db_connect.collection("user").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

recordRoutes.route("/user/registerUser").post(function (req, response) {
  let db_connect = dbo.getDb();
  // const hashedPassword = bcrypt.hash(req.body.password, 10);
  let myobj = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  };
  db_connect.collection("users").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});


recordRoutes.route("/user/loginUser").post(function (req, response) {
	// let db_connect = dbo.getDb("artistMarket");


  const {email , password} = req.body;

  console.log('email',email);
  // const connect = dbo.getDb();
  const res =  db_connect.connection("user").find();
  console.log(res)
  response.json({"message":"data sent"});
});



//Passport code

app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());

recordRoutes.post('/loginUser', passport.authenticate('local', {
  successRedirect: "/home",
  failureRedirect: "/login"
}));


app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);

passport.use(new localStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false
},
	function(usernameField, passwordField, done) {
		User.findOne({ usernameField: usernameField }, function(err, user) {
		if (err) {
			return done(err);
		}
		if (!user) {
			console.log("incorrect email"+user);
			return done(null, false);
		}
		if (user.password != passwordField) {
		console.log("incorrect pass");
			return done(null, false);
		}
		return done(null, user);
		});

	}
));

passport.serializeUser((user, cb) => {
	console.log(user.id);
	cb(null, { id: user.id });
});

passport.deserializeUser((id, cb) => {
  User.findOne({ _id: id }, (err, user) => {
    const userInformation = {
      usernameField: user.email,
    };
    cb(err, userInformation);
  });
});


module.exports = recordRoutes;
