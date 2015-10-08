/**
 * Created by aregbede on 05/08/2015.
 */
var mongoose = require('mongoose');
var TeamSchema = new mongoose.Schema({
    teamName:String,
    teamCoords:[ObjectId],
    teamReps:[ObjectId],
    teamCoverDPUrl:String,
    teamDPUrl:String,
    teamReviews:ObjectId,
    teamAccount:ObjectId,
    teamAdmin:ObjectId
},{collection:'teamDetails'});

/**
 *
 *
 * Team has a name
 * Team has Coordinators (min-max)
 * Team has Representatives (min-max)
 * Team has members (min-max)
 * Team has an account
 * Team has reviews
 * Team has portfolio
 * Team has skills
 * Team has Field
 * Team can bid
 * Team can post project
 * Team has trackHistory
 * Team has photos [Cover n Dp]
 * Team has Projects
 * Team has Jobs
 * Team has notification
 * Team has Messages
 * Team can Chat
 *
 *
 */