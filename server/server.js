const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const mongoose = require("mongoose")
const port = process.env.PORT || 5001;
const passport = require("passport");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
const UserDetails = require("./models/UserSchema")
const strategy = require("./strategies/localStrategy")
const chkAuth = require("./strategies/checkLogin")

// routes
const authRoutes = require("./routes/authenticate");
const userRoutes = require("./routes/userData");
const artworkRoutes = require("./routes/artwork");
const orderRoutes = require("./routes/order");

//DB connection
mongoose.connect(
  process.env.ATLAS_URI,
  {family:4},
  () => {
    console.log('Connected to MongoDB');
  }
);

app.use(cors({credentials: true, origin: 'http://localhost:3000'}))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(session({
  secret: 'r8q,+&1LM3)CD*zAGpx1xm{NeQhc;#',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60 * 60 * 1000 * 24 } // 1 hour
}));
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use("/auth" , authRoutes)
app.use("/user"  , userRoutes)
app.use("/artwork", artworkRoutes)
app.use("/orders", orderRoutes);

//middleware function to check if the ser is logged in or not
function checkLogin(req,res,done)
{
      if(req.user)
      {
        done()
      }
      else{
        res.status(200).json({
          "msg": "auth faileeddddd"
        })
      }
}

//test for authenticated user
app.get("/checkLoginStatus"  , checkLogin ,  (req,res)=>{
  res.status(200).json(req.user)
})

//start server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
