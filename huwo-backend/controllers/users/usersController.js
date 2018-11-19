const mongoose = require('mongoose'),
	User = mongoose.model('Users')
	Tasks = mongoose.model('Tasks')

exports.listAllUsers = function(req, res) {
	User.find({}, function(err, user) {
		if (err) res.send(err)
		res.json(user)
	})
}

exports.getUser = function(req, res) {
	User.findById(req.params.id, function(err, user) {
		if (err) res.send(err)
		res.json(user)
	})
}

exports.getUserTasks = function(req, res) {
	User.findById(req.params.id, function(err, user) {
		if (err) res.send(err)
		Tasks.find({assignedTo: user._id}, function(err, tasks) {
			if (err) res.send(err)

			res.json(tasks)
		})
	})
}

exports.createUser = function(req, res) {
	const kk = new User({
		name: req.body.name,
		email: req.body.email
	})

	kk.save()
}


exports.deleteUser = function(req, res) {
	let response = {}
	User.findByIdAndRemove(req.body.id, (err, user) => {
		if (err) {
			response['type'] = 'error'
			response['data'] = err
		} else if (task === null) {
			response['type'] = 'error'
			response['data'] = {
				msg: 'The task no longer exists.'
			}
		} else {
			response['type'] = 'success'
			response['data'] = {
				msg: 'issa noce'
			}
		}

		return res.send(response)
	})
}