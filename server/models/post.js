var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
  title: String,
  link: String,
  votes: Number
//  add user schema
});

var Post = mongoose.model("Post", postSchema);

module.exports = Post;