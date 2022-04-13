const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');


const user = new mongoose.Schema({
  name : String,
  email: String,
  password: String,
});

module.exports = mongoose.model("User", user);


