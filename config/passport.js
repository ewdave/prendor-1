/**
 * Created by ponty on 8/18/2015.
 */
var LocalStrategy = require('passport-local').Strategy;
var UserModel = require('./../models/userModel');
var FacebookStrategy =  require("passport-facebook").Strategy;
var configAuth = require('./../config/social-plugins');


module.exports = function(passport) {

    passport.serializeUser(function(user,done){
        done(null,user.id)
    });

    passport.deserializeUser(function(id,done){
        UserModel.findById(id,function(err,user){
            done(err,user)
        });
    });

    passport.use(new FacebookStrategy({
        clientID:configAuth.facebook.clientID,
        clientSecret:configAuth.facebook.clientSecret,
        callbackURL:configAuth.facebook.callbackURL,
        enableProof: true,
        profileFields : ["id","first_name", "last_name", "link","about","gender", "locale", "age_range", "displayName", "photos", "email","languages","timezone"]
    },(req,token,refreshToken,profile,done) => {

        console.log(JSON.stringify(profile))
        process.nextTick(()=>{
            UserModel.findOne({'facebookId':profile.id},(err,user)=>{
                if(err) return done(err);

                if(user) {
                    done(null,user);
                } else {
                    var newUser = new UserModel();
                    newUser.facebookId = profile.id;
                    newUser.token = token;
                    newUser.email = profile.email;
                    newUser.display_picture = profile.photos[0].value;
                    newUser.name = profile.displayName;

                    newUser.save((err) => {
                        if (err)
                            throw err;

                        // if successful, return the new user
                        return done(null, newUser);
                    });
                }

            })
        })

    }))




};
