const mongoose = require('mongoose'),
	Schema = mongoose.Schema

const TaskSchema = new Schema({
	title: {
		type: String,
		required: 'Kindly enter the name of the task'
	},
	createdBy: {
		type: String,
		required: 'important bruh'
	}
})

module.exports = mongoose.model('Tasks', TaskSchema)
