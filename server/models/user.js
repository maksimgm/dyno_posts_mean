var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
//  add user schema
});

var User = mongoose.model("User", userSchema);

module.exports = User;