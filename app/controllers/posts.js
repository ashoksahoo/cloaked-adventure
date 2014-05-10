manager = require('./../models/post');



exports.listAllPosts = function(req,res){
	var callback = function(err,obj){
		if(err)
			res.send(500, err);
		else
			res.send(obj)
	};
	manager.findAllPosts(callback)
};

exports.createNewPost = function(req,res){
	var callback = function(err,obj){
		if(err)
			res.send(500, err);
		else
			res.send(obj)
	};
	record = {};
	record.title = req.body.title;
	record.content = req.body.content;
	manager.createPost(record, callback)

};

exports.getPostById = function(req,res){
	var callback = function(err,obj){
		if(err)
			res.send(500, err);
		else
			res.send(obj)
	};
	id = req.params.id;
	manager.findPostById(id, callback)
};

exports.updatePost  = function(req,res){
	var callback = function(err,obj){
		if(err)
			res.send(500, err);
		else
			res.send(obj)
	};
	record = {};
	record.title = req.body.title;
	record.content = req.body.content;
	id = req.params.id;
	manager.updatePost(id,record, callback)
};
exports.deletePost = function(req,res){
	var callback = function(err,obj){
		if(err)
			res.send(500, err);
		else
			res.send(200, "OK")
	};
	id = req.params.id;
	manager.destroyPost(id, callback)
};