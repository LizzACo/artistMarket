

const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const passport = require("passport");
const User = require("./models/UserSchema")
// const process = require("dotenv").config({ path: "./config.env" });

passport.use(
  new JWTstrategy(
    {
      secretOrKey: process.env.SECRET,
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
    },
    async (token, done) => {
      try {

        console.log(token)
        User.findOne({id: token.id}, (err, user) => {

          if (err) {
              return done(err, false);
          }
  
          if (!user) {
              return done(null, false);
          }
  
          return done(null, user);
  
      });
      } catch (error) {
        done(error);
      }
    }
  )
);