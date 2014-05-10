var express = require('express');
var controller = require('../controllers/posts.js');
var posts = express.Router();

/* GET home page. */
posts.get('/', controller.listAllPosts);
posts.post('/', controller.createNewPost);
posts.get('/:id', controller.getPostById);
posts.put('/:id', controller.updatePost);
posts.delete('/:id', controller.deletePost);

module.exports = posts;
