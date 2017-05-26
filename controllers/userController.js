const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post('/', function (req, res) {
	console.log("newuser requested",req.body);
	var user = req.body;
	User.create(user,function(err,data){
		if(err){console.log("error",err);}
		console.log("newuser requested");
		res.send( data );
	});
});

router.get('/', function (req, res) {
   User.find(function(err,data){
		if(err){console.log("error",err);}
		res.send( data );
   })
});

router.get('/:firstname', function (req, res) {
   const firstname = req.params.firstname;
   User.find({"firstName":firstname},function(err,data){
		if(err){console.log("error",err);}
		res.send( data );
   })
});


module.exports = router;
