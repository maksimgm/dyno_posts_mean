var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/post-db");

mongoose.set("debug",true);

module.exports.Post = require('./post');