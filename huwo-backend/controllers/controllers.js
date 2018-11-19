'use strict'

const Tasks = require('./tasks/tasksController')
const Users = require('./users/usersController')

const Controllers = {
	tasks: Tasks,
	users: Users,
	auth: Auth,
}

module.exports = Controllers
