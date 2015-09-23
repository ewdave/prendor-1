/**
 * Created by aregbede on 01/08/2015.
 */
var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");

var SkillSchema = require("./skillModel").SkillSchema;
var UserSchema = new mongoose.Schema({
    facebookId:String,
    googleId:String,
    linkedId:String,
    facebookToken:String,
    googleToken:String,
    linkedToken:String,
    username: String,
    name:String,
    state:String,
    about:String,
    locale:String,
    city:String,
    time_zone:String,
    language:String,
    display_picture:String,
    created_at:{type: Date, default: Date.now},
    skills: [SkillSchema]

},{collection:'userDetails'});

UserSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
UserSchema.methods.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

var UserModel = mongoose.model('UserModel', UserSchema);

module.exports = UserModel;

