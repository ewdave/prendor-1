/**
 * Created by ponty on 8/18/2015.
 */
var LocalStrategy = require('passport-local').Strategy;
var UserModel = require('./../models/users/userModel');
var FacebookStrategy =  require("passport-facebook").Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var configAuth = require('./../config/social-plugins');


module.exports = function(passport) {

    passport.serializeUser(function(user,done){
        done(null,user.id)
    });

    passport.deserializeUser(function(id,done){
        UserModel.findById(id,function(err,user){
            console.log("======================================================================")
            console.log(user);
            console.log("********************************************************************")
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
                    newUser.facebookId = token;
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


    passport.use(new GoogleStrategy({
        clientID:configAuth.google.clientID,
        clientSecret:configAuth.google.clientSecret,
        callbackURL:configAuth.google.callbackURL,
        enableProof: true
    },(req,token,refreshToken,profile,done) => {
        process.nextTick(()=>{
            UserModel.findOne({'googleId':profile.id},(err,user)=>{
                if(err) return done(err);

                if(user) {
                    done(null,user);
                } else {
                    var newUser = new UserModel();
                    newUser.googleId = profile.id;
                    newUser.googleToken = token;
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
    }));

    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    (req, email, password, done) => {

        // asynchronous
        // UserModel.findOne wont fire unless data is sent back
        process.nextTick(function() {

        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        var confirmPass = req.body.cpass;
        
        UserModel.findOne({ 'user_email_address' :  email }, function(err, user) {
            // if there are any errors, return the error
            if (err)
                return done(err);

            // check to see if theres already a user with that email
            if (user) {
                return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
            } else {

                // if there is no user with that email
                // create the user
                var newUser  = new UserModel();
                
                // set the user's local credentials
                var full_name = req.body.name;

                newUser.user_email_address    = email;
                newUser.encrypted_password = newUser.generateHash(password);
                newUser.user_full_name = full_name;

                

               

                             newUser.save((err) => {
                              if (err)
                                    throw err;
                                return done(null, newUser);
                            });


              
            }

        });    

        });

    }));


     passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },(req, email, password, done) => { // callback with email and password from our form

        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists

        console.log(email);
        UserModel.findOne({'user_email_address' :  email }, function(err, user) {
            // if there are any errors, return the error before anything else

            console.log(user);
            if (err)
                return done(err);

            // if no user is found, return the message
            if (!user)
                return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash

            // if the user is found but the password is wrong
            if (!user.validatePassword(password))  {
                console.log("password not the same")
                return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata
            } else {

                console.log("============== password the same **********************")
            // all is well, return successful user
            return done(null, user);
            }

        });

    }));



};
