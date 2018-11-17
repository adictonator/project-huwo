const mongoose = require('mongoose'),
	Schema = mongoose.Schema

const UsersSchema = new Schema({
	name: {
		type: String,
		required: 'Kindly enter the name of the user'
	},
	email: {
		type: String,
		required: 'Kindly enter the email of the user'
	}
}, {timestamps: true})

module.exports = mongoose.model('Users', UsersSchema)
