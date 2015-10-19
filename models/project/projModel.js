/**
 * Created by ponty on 10/12/15.
 */
var mongoose = require('mongoose');

var SkillSchema = require("./../skillModel").SkillSchema;
var LocationSchema = require("./../locationModel").LocationSchema;
var ProjectSchema = new mongoose.Schema({

    title:String,
    location:[LocationSchema],
    pricePDur:Number,
    pricePHr:Number,
    duration:{mnths:Number,wks:Number,days:Number},
    files:[String],
    skills:[SkillSchema],
    description:String,
    language:String,
    postedBy:String

});

/**
 *     Statics
 * find project by ID
 *
 *
 * */

var Project = mongoose.model('Project',ProjectSchema);

