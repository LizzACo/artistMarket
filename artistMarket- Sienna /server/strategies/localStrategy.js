const LocalStrategy = require("passport-local");
const passport = require("passport")
const User = require('../models/UserSchema')
const bcrypt = require("bcryptjs")
passport.use(new LocalStrategy(
{
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true,
}    ,  function(req, username, password, done) {
      // look for the user data
      console.log(username , "username")
      User.findOne({ email: username }, async function (err, user) {

        console.log(password , "password")

        if (err) { return done(err); }
        if (!user) { return done(null, false, { message: 'User not found.' }); }

        let resPass = await bcrypt.compare(password , user.password)
        
        console.log(resPass , "Authorized")
          if(resPass)
          {
            return done(null, user , { message: 'valid' });
          }
          else{
            return done(null, false, { message: 'not valid' });
          }

      });
    }
  ));


  passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });



  module.exports = passport;