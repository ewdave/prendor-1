/**
 * Created by ponty on 10/12/15.
 */
var mongoose = require('mongoose');

var FileSchema = new mongoose.Schema({
    title:String,
    ext:String,
    size:Number,
    insertedAt:Number,
    loc:String
});

var File = mongoose.model('File',FileSchema);

module.exports.FileSchema = FileSchema;
module.exports.File = File;
