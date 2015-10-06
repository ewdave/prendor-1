/**
 * Created by aregbede on 01/08/2015.
 */
var mongoose = require("mongoose");
var SkillSchema = new mongoose.Schema({
    area:String,
    field:String
});


var Skill = mongoose.model('Skill',SkillSchema);

module.exports.SkillSchema = SkillSchema;
module.exports.Skill = Skill;