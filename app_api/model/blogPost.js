var mongoose = require('mongoose');

var blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  tags: {
    type: [String]
  }
});

var BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;
