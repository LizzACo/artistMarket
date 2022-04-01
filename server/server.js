const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const mongoose = require("mongoose")
const port = process.env.PORT || 5001;
const passport = require("passport");
const session = require("express-session");
const cookieParser = require("cookie-parser");
require("./passportConfig")

//public routes
const authRoutes = require("./routes/authenticate");
//protected routes
const userRoutes = require("./routes/userData");

//middlewares
app.use(cookieParser("secretcode"));
app.use(cors());
app.use(express.json());

//DB connection
mongoose.connect(            // Using mongoose to conect no requirement of reconnecting . Mongoose is used to save data in MongoDB
  process.env.ATLAS_URI,
  {family:4},
  () => {
    console.log('Connected to MongoDB');
  }
);

//routes
app.use("/auth" , authRoutes)
app.use("/user"  ,  passport.authenticate('jwt', { session: false }) ,  userRoutes)  // protect route can be used further for account specific information

//start server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
