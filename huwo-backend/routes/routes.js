const c = require('../controllers/controllers')

module.exports = function(app) {
	app.get('/tasks', c.tasks.listAllTasks)
		.post('/tasks', c.tasks.createTask)
		.delete('/tasks', c.tasks.deleteTask)
}
