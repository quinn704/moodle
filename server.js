'use strict'

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/SOCIAL_MEDIA', () => {
	console.log('Connected...');
});

// Declare model
const PostSchema = new mongoose.Schema({
	title: { type: String, default: '' },
	content: { type: String, default: '' }
} , { collection : 'post' });

// Register mongoose model
mongoose.model('Post', PostSchema);

// Get mongoose model
const Post = mongoose.model('Post');

// Fetch data from collection
Post.find((err, posts) => {
	if (!err) {
		console.log(posts);
	}
});