var data = require("../data.json");

exports.addFriend = function(req, res) { 
	// Your code goes here
	res.render('add');
 var myFriend = new Object({
	 			"name": req.query.name,
 				"description": req.query.description,
 				"imageURL": "http://lorempixel.com/400/400/"});

	data['friends'].push(myFriend);

 }
