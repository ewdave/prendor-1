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

app.get('/auth/google/callback',
    passport.authenticate('google',
        {
            successRedirect: '/',
            failureRedirect: '/'
        }));

function welcome(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (!req.isAuthenticated()){
        res.render('welcome.ejs')
    } else {
        return next();
    }
    
}

function returnHome(req,res,next){
 if (req.isAuthenticated()){
        res.redirect('/')
    } else {
        return next();
    }
}

app.get('/', welcome,(req, res) => {
    res.render('index.ejs');
});


app.get('/login',returnHome,(req,res) => {
    res.render('login.ejs')
});

app.get('/register',returnHome,(req,res) => {
    res.render('register.ejs')
});



app.get('/profile/:id', (req, res) => {
    res.render('profile.ejs')
});



app.get('/api/getauth', function (req, res) {
    if (req.isAuthenticated()) {
        res.json({loggedIn: true, username: req.user.name})
    } else {
        res.json({loggedIn: false, username: ""})
    }
});


app.get('/profile', (req, res)=> {
    res.json(JSON.stringify(req.user));
})


var server = app.listen(5000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)

});


//mongoose.connect('mongodb://localhost/Prendor');