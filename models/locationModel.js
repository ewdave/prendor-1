/**
 * Created by ponty on 10/19/15.
 */
var mongoose = require("mongoose");
var LocationSchema = new mongoose.Schema({
    country:String,
    state:String
});


var Location = mongoose.model('Location',LocationSchema);

module.exports.LocationSchema = LocationSchema;
module.exports.Location = Location;