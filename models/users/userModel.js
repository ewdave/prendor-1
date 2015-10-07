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
    user_full_name:String,
    user_state:String,
    user_about:String,
    locale:String,
    user_country:String,
    user_website:String,
    user_lang:String,
    display_picture:String,
    created_at:{type: Date, default: Date.now},
    encrypted_password:String,
    skills: [SkillSchema],
    team_id:ObjectID

},{collection:'userDetails'});

UserSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
UserSchema.methods.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.encrypted_password;
};

var UserModel = mongoose.model('UserModel', UserSchema);

module.exports = UserModel;

/**
user_id
>username //unique index
>user_email_address //unique index
>user_state
>user_country
>user_locale //index
>user_full_name
>user_about
>user_display_picture
>user_lang //index
user_website
encrypted_password
team_id //index



created_at //datetime
signin_count
current_sign_in_at //datetime
last_sign_in_at //datetime
current_sign_in_ip
last_sign_in_ip
failed_attempts [default 0 max 4]
confirmation_token //encrypted
confirmation_sent_at //valid 21 days
confirmed //boolean 
confirmed_at
resetPassword => activities
**/

