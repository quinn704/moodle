'use strict';

const request = require('request');

const port = 'http://localhost:3000';

// Example for testing the data returned by the homepage
request.get(port, (error, response, body) => {
	if (!error) {
		console.log('Received http response with the following body: ');
		console.log(body);
	}
})

// Test the /find-one-subject endpoint by sending a POST message to it
request.post(
	port + '/find-one-post',
	{
		form: {title: "Message1"},
	}, (error, response, body) => {
		console.log(body);
	}
);

// Test the /add-post endpoint by sending a POST message to it
request.post(
	port + '/add-post',
	{
		form:
			{
				title: "Message3",
				content: "Message 3 content"
			}
	},
	(error, response, body) => {
		console.log(body);
	}
);
