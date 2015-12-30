var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
  title: String,
  link: String,
  votes: Number
});

var Post = mongoose.model("Post", postSchema);

module.exports = Post;