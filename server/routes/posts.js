var express = require('express');
var router = express.Router();
var db = require("../models");

// get all posts
router.get('/', function(req, res) {
  db.Post.find({},function(err,posts){
    if(err) return res.json({err:err.message});
    res.status(200).send(posts);
  });
});


// post a post
router.post('/', function(req, res) {
  db.Post.create(req.body,function(err,post){
    if(err) return res.json({err:err.message});
    res.json(post);
  });
});

// show a specific post
router.get('/:id',function(req,res){
  db.Post.findById(req.params.id, function(err,post){
    if(err) return res.json({err:err.message});
    res.status(200).send(post);
  });
});

// edit a post
router.put('/:id',function(req,res){
  db.Post.findByIdAndUpdate(req.params.id, req.body, function(err,post){
    if(err) {
      var json = res.json({err:err.message});
      return json;
    }
    res.status(200).send(post);
  });
});
// delete a todo
router.delete('/:id',function(req,res){
  console.log(req.params.id);
  db.Post.findByIdAndRemove(req.params.id,function(err,post){
    res.status(200).send(post);
  });
});

module.exports = router;

