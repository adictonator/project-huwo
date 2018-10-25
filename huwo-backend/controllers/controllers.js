'use strict'

const Tasks = require('./tasks/taskController')
const Users = require('./users/usersController')

const Controllers = {
	tasks: Tasks,
	users: Users
}

module.exports = Controllers
