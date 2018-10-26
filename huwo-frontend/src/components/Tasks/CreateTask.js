import React, { Component } from 'react'

export default class CreateTask extends Component {
	createTask = e => {
		e.preventDefault()
		const formData = new FormData(e.target)
		const user = {}

		e.preventDefault()

		for (let entry of formData.entries()) {
			user[entry[0]] = entry[1]
		}

		this.submitData(user)
	}

	submitData = data => {
		console.log('asd', data)
		fetch('/api/tasks', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(resp => console.log(resp))
	}

	render() {
		return (
			<div>
				<form onSubmit={e => this.createTask(e)}>
					<input type="text" name="taskTitle" defaultValue="asdsa" />
					<input type="text" name="taskCategory" />
					<button type="submit">Create Task</button>
				</form>
			</div>
		)
	}
}
