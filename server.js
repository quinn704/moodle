'use strict'

const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/SOCIAL_MEDIA', () => {
	console.log('Database Connected...');
});

// Initialize server
const app = express();

// Initialize body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Declare model
const PostSchema = new mongoose.Schema({
	title: { type: String, default: '' },
	content: { type: String, default: '' }
} , { collection : 'post' });

// Register mongoose model
mongoose.model('Post', PostSchema);

// Get mongoose model
const Post = mongoose.model('Post');

// Routes
app.get('/', (request, response) => {
	response.send('Welcome!');
})

app.get('/find-all-posts', (request, response) => {
	// Fetch data from collection
	Post.find((err, posts) => {
		if (!err) {
			response.send(posts);
		}
	});
});

// This route makes use of parameters in the URL
// Returns only one object. Note the use of findOne()
// Like the root URL, you can test this endpoint using a browser
app.get('/find-one-post', (request,response) =>{
	Post.findOne( { title: request.query.title}, (error, post) => {
		if (post && !error) {
			response.send(post);
		} else {
			response.send('Nothing Found!');
		}
	});
});

app.listen(3000, ()=>{
	console.log('Server started');
})