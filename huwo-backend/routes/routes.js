const c = require('../controllers/controllers')

module.exports = function(app) {
	app
		/**
		 * Tasks routes.
		 *
		 */
		.get('/tasks', c.tasks.listAllTasks)
		.post('/tasks', c.tasks.createTask)
		.delete('/tasks', c.tasks.deleteTask)

		/**
		 * Users routes.
		 *
		 */
		.get('/users', c.users.listAllUsers)
		.get('/user/:id', c.users.getUser)
		.post('/users', c.users.createUser)
		.delete('/users', c.users.deleteUser)
}
