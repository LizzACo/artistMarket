const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5001;
app.use(cors());
app.use(express.json());
app.use(require("./routes/user")); 
const passport = require("passport");
const localStrategy  = require("passport-local").Strategy;
const session = require("express-session");
const cookieParser = require("cookie-parser");
const User = require("./UserSchema");
const recordRoutes = express.Router();
const bodyParser = require("body-parser");

mongoose.connect(
	"mongodb+srv://Kanishk:Seeker1234@cluster0.xmcpk.mongodb.net/artistMarket?retryWrites=true&w=majority",
	{
	  useNewUrlParser: true,
	  useUnifiedTopology: true,
	},
	() => {
	}
  );

const dbo = require("./db/conn");
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app were connecting to
    credentials: true,
  })
);

app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});
