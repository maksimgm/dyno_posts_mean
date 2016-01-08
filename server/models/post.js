var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
  title: String,
  link: String,
  votes: Number,
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

var Post = mongoose.model("Post", postSchema);

module.exports = Post;