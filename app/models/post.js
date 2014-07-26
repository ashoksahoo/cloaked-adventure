mongoose = require("mongoose");
Schema = mongoose.Schema;

var PostSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	title: {
		type: String,
		default: '',
		trim: true
	},
	content: {
		type: String,
		default: '',
		trim: true
	}
	
});

var Post = mongoose.model('Post', PostSchema);


exports.findPostById = function(PostId,callback){
	Post.findOne({_id:PostId}, function(err, obj){
		if (err){
			console.error(err);
			callback(err.message);
		}
		else{
			callback(null,obj)
		}
	});

};


exports.createPost = function(record, callback){
	Post.create(record, function(err, obj){
		if (err){
			callback(err.message);
			console.error(err);
		}else{
			callback(null, obj);
		}
	})
};

exports.findAllPosts = function(callback){
	Post.find().exec(function(err, obj) {
		if (err)
		{
			callback(err);
		}
		else
		{
			callback(null, obj);
		}
	})
};

exports.updatePost=function(id,record,callback){

		Post.findOneAndUpdate(id,{$set:record}, function (err, obj) {
			if (err) {
				console.error(err);
				callback('Error while updating the record');
			}
			else
				callback(null, obj);
		});
};

exports.destroyPost=function(Id,callback){
	Post.findOneAndRemove( Id,function(err, obj){
		if(err)
		{
			console.error(err);
			callback( 'Error while deleting the record');
		}
		else
			callback(null,obj);
	});
};
