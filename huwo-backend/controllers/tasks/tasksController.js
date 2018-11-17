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
		title: req.body.taskTitle,
		description: req.body.taskDescription,
		assignedTo: req.body.assignedUser,
		createdBy: 'admin'
	})
	kk.save()
}

exports.deleteTask = function(req, res) {
	let response = {}
	Task.findByIdAndRemove(req.body.id, (err, task) => {
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
