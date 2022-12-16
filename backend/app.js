const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require('lodash');
const cors = require('cors');

const app = express();   
mongoose.connect("mongodb://localhost:27017/Blogdata");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.json());
mongoose.set("strictQuery", false);

const datailsSchema = new mongoose.Schema(
  {
    name:String,
    email:String,
    posts:[{
      title:String,
      content:String,
      timestamp:Date
    }],
    
  }
);

const detail = new mongoose.model('Detail',datailsSchema);

const postSchema = new mongoose.Schema({
  title:String,
  content:String
});

const Post =  mongoose.model("Post", postSchema);

app.get("/", function(req,res){
  Post.find(function(err,posts){
    if(!err){
      res.send(posts);
    }
  })
})

app.get("/about", function(req,res){
  res.render("about",{para:aboutContent});
})

app.get("/contact", function(req,res){
  res.render("contact",{para:contactContent});
})

app.post("/compose", function(req,res){
  console.log(req.body.title);
  let post = new Post({
    title:req.body.title,
    content:req.body.content
  });

  post.save(function(err){
    if(!err){
      res.redirect("/");
    }
  });
})

app.post('/login',function(req,res)
{
  console.log(req.body.UserName);


})

app.post('/signup',function(req,res)
{
  let newuser = new detail({
    name:req.body.name,
    mobile:req.body.mobile,
    email:req.body.email,
    password:req.body.password,
    posts:[{}],
    timestamp:"sadfadsf"
  });
  
  newuser.save();
});




app.get("/posts/:id", function(req,res){
  const id = req.params.id;
  Post.findById(id,function(err,post){
     if(!err){
      res.send(post);
     }
  })
});
app.listen(5000, function() {
  console.log("Server started on port 5000");
});
