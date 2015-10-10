/**
 * Created by ponty on 8/17/2015.
 */
var express = require('express');
var mongoose = require("mongoose");
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var flash = require('connect-flash');
var session = require('express-session');
var Account = require("./controllers/account");
var passport = require("passport");
var path = require("path");
var app = express();
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: true})); // support encoded bodies
app.use(express.static(path.join(__dirname, 'public')));
// Set view path
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(session({
    secret: 'thereisonlyontrueGodandHsnameisjesuschrist.heisthesaviouroftyeworld',
    saveUninitialized: false,
    resave: false
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

require('./config/passport')(passport);
var auth = require('./config/auth');
var dbConfig = require('./config/db');
var account  = new Account();

/**
===========================================NOT USING SOCIAL AUTH IN DEV STAGE ONLY USING IN PROD=======================================
app.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email']}));

// handle the callback after facebook has authenticated the user
app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect: '/',
        failureRedirect: '/'
    }));

app.get('/auth/google',
    passport.authenticate('google',
        { scope: ['https://www.googleapis.com/auth/plus.login'] }));


// handle the callback after google has authenticated the user
app.get('/auth/google/callback',
    passport.authenticate('google',
        {
            successRedirect: '/',
            failureRedirect: '/'
        }));



**/



app.get('/', auth.welcome,(req, res) => {
    res.render('index.ejs');
});


app.get('/login',auth.returnHome,(req,res) => {
    res.render('login.ejs')
});

app.get('/register',auth.returnHome,(req,res) => {
    res.render('register.ejs')
});


app.post('/api/verifytaken',account.checkIfUserExist);
/*
app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/', // redirect to the secure profile section
        failureRedirect : '/authFail', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
}));

*/
app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/regSuccess', // redirect to the secure profile section
        failureRedirect : '/authFail', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
}));

app.get('/authFail',(req,res) => {
        res.json({status:false,message:"Login/Signup Failed"});
})

app.get('/regSuccess',(req,res) => {
        res.json({status:true,message:"Successful"});
})


app.post('/register', passport.authenticate('local-signup', {
        successRedirect : '/regSuccess', // redirect to the secure profile section
        failureRedirect : '/authFail', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
}));

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});



var server = app.listen(5000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)

});


mongoose.connect(dbConfig.url);