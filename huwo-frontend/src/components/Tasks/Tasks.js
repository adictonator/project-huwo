import React, { Component } from 'react'
import Task from './Task'

export default class Tasks extends Component {
	constructor() {
		super()

		this.state = {
			tasks: null
		}
	}

	fetchAllTasks = () => {
		fetch('/api/tasks')
			.then(resp => resp.json())
			.then(tasks => this.setState({ tasks }))
	}

	componentDidMount() {
		this.fetchAllTasks()
	}

	render() {
		console.log('asda', this.state.tasks)
		return this.state.tasks
			? this.state.tasks.map(task => <Task key={task._id} task={task} />)
			: 'Loading tasks'
	}
}
