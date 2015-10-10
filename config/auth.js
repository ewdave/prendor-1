module.exports = {
	welcome:function (req, res, next) {

    // if user is authenticated in the session, carry on 
    if (!req.isAuthenticated()){
        res.render('welcome.ejs')
    } else {
        return next();
    }
    
},

returnHome: function (req,res,next){
 if (req.isAuthenticated()){
        res.redirect('/')
    } else {
        return next();
    }
}
}