var express = require("express");
var app = express();

//Passport
var passport = require('passport');
var postRoutes = require('./routes/posts');

var path = require('path');
var LocalStrategy = require('passport-local').Strategy;
//pass passport for config
require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());

//Cookie and session
var cookieParser = require('cookie-parser');
var session = require('express-session');
app.use(session({
  secret: 'this is the secret',
  name: "secret",
  proxy: true,
  resave: true,
  saveUninitialized: true
}));
app.use(cookieParser());

var bodyParser = require("body-parser");
app.use(bodyParser.json());
var methodOverride = require('method-override');
app.use(methodOverride('_method'));

var morgan = require('morgan');
app.use(morgan('tiny'));

app.use('/css',express.static(path.join(__dirname, "../client/css")));
app.use('/js',express.static(path.join(__dirname, "../client/js")));
app.use('/img',express.static(path.join(__dirname, "../client/img")));
app.use('/templates',express.static(path.join(__dirname, "../client/js/templates")));

// prefix added to the begining of a path in the 'todoRoutes'
app.use('/api/posts', postRoutes);
require('./routes/users')(app,passport);

app.get("*", function(req,res){
  res.sendFile(path.join(__dirname, '../client', 'index.html'));
});

app.listen(3000,function(){
  console.log("Server is listening to port 3000");
});
 