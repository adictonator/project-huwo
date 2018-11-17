'use strict'

const Tasks = require('./tasks/tasksModel')
const Users = require('./users/usersModel')

const Models = {
	tasks: Tasks,
	users: Users
}

module.exports = Models
