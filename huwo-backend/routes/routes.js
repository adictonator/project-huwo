const c = require('../controllers/controllers')

module.exports = function(app) {
	app

		/**
		 * Authentication Routes
		 */
		.post('/login', c.auth.login)

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
		.get('/user/:id/tasks', c.users.getUserTasks)
		.post('/users', c.users.createUser)
		.delete('/users', c.users.deleteUser)
}
