const mongoose = require('mongoose'),
	Schema = mongoose.Schema

const TaskSchema = new Schema({
	title: {
		type: String,
		required: 'Kindly enter the name of the task'
	},
	description: {
		type: String,
	},
	assignedTo: {
		type: Schema.ObjectId,
	},
	createdBy: {
		type: String,
		required: 'important bruh'
	}
}, {timestamps: true})

module.exports = mongoose.model('Tasks', TaskSchema)
