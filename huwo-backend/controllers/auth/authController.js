const mongoose = require('mongoose'),
	Users = mongoose.model('Users')

exports.validateUser = function(req, res) {
	Users.findOne({email: req.body.username}, function(err, user) {
		console.log('asd', user)
	})
}
