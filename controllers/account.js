/**
 * Created by ponty on 8/17/2015.
 */
var UserModel = require('../models/userModel');


var Account = function(){

};

Account.prototype.checkIfUserExist = function(req,res){
    //moongoose query DB for user
    var userEmail = req.body.email;

    UserModel.find({email:userEmail},function(err,users){
        if(err) res.json({state:false,message:'Sorry there was an error'})
        if(users.length != 0){
            res.json({state:true,message:'Sorry User Aready Taken'})
        } else {
            res.json({state:false,message:'User not taken'})
        }
    });

};

Account.prototype.createAccount = function(){

};


Account.prototype.getRegStatus = function(req,res){

    if(req.isAuthenticated()){
       var email = req.user.email;
        console.log(email+" user auth");
        UserModel.findOne({email:email},function(err,user){


            if(err) res.json({state:false,msg:'Sorry there was an error'});
            if(user.length != 0){
                console.log(user.email)
                res.json({state:true,msg:user.regStatus})
            } else {
                res.json({state:false,msg:'Sorry user doesnt exist'});
            }
        })

    } else {
    res.send('looser')
        //var email = req.params.email;
       /*
       *  UserModel.find({email:email},function(err,users){

        if(err) res.json({state:false,message:'Sorry there was an error'});
        if(users.length != 0){
        res.json({state:true,msg:users.regStatus})
        } else {
        res.json({state:false,message:'Sorry user doesnt exist'});
        }
        });
        */

    }
};

Account.prototype.deleteAccount  = function(req,res){
    var email = req.params.email;
    UserModel.findOneAndRemove({email:email},function(err){
        if(err) console.log(err);
        res.send('Successfully deleted user with name');
    })

};

/**
 * var checkIfAccountTaken = function(req,res){

    //moongoose query DB for user
    var userEmail = req.body.email;

    UserModel.find({email:userEmail},function(err,users){
        if(err) res.json({status:false,message:'Sorry there was an error'})
        if(users){
            res.json({status:'true',message:'Sorry User Aready Taken'})
        } else {
            res.json({status:'true',message:'Usernot taken'})
        }
    });

};


 var createAccount = function(){

}

 *
 * **/


module.exports = Account;
