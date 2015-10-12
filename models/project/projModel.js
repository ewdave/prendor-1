/**
 * Created by ponty on 10/12/15.
 */
var mongoose = require('mongoose');

var SkillSchema = require("./../skillModel").SkillSchema;
var FileSchema = require('./../fileModel').FileSchema;
var ProjectSchema = new mongoose.Schema({

    title:String,
    location:[{country:String,state:String}],
    pricePDur:Number,
    pricePHr:Number,
    duration:{wk:Number,days:Number},
    files:[FileSchema],
    skills:[SkillSchema],
    description:String,
    milestone:Schema.ObjectId

});

/**
 *     Statics
 * find project by ID
 *
 * */

var Project = mongoose.model('Project',ProjectSchema);

