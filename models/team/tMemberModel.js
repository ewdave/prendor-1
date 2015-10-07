var mongoose = require("mongoose");

var TeamMemberSchema = new mongoose.Schema({
	member_id:ObjectID,
	member_role:String,
	joined_at:{type: Date, default: Date.now}

})

var TeamMember = mongoose.model('TeamMember',TeamMemberSchema);

module.exports.TMembersSchema = TeamMemberSchema;
module.exports.TeamMember = TeamMember;