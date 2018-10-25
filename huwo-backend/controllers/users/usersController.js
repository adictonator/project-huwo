const mongoose = require('mongoose'),
	Task = mongoose.model('Tasks')

exports.listAllTasks = function(req, res) {
	Task.find({}, function(err, task) {
		if (err) res.send(err)
		res.json(task)
	})
}

exports.createTask = function(req, res) {
	const kk = new Task({
		title: 'one test',
		createdBy: 'admin'
	})

	kk.save()
}
