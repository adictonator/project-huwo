import React, { Component } from 'react'
import { doFetch } from '../../core/Helpers'

export default class CreateTask extends Component {
	constructor() {
		super()

		this.state = {
			users: null
		}
	}
	createTask = e => {
		e.preventDefault()
		const formData = new FormData(e.target)
		const user = {}

		for (let entry of formData.entries()) {
			user[entry[0]] = entry[1]
		}

		this.submitData(user)
	}

	fetchAllUsers = () => {
		doFetch('/api/users').then(users => this.setState({ users }))
	}

	submitData = data => {
		doFetch('/api/tasks', 'POST', data)
	}

	componentDidMount() {
		this.fetchAllUsers()
	}

	render() {
		console.log('sdaas', this.state)
		return (
			<div>
				<form onSubmit={e => this.createTask(e)}>
					<input type="text" name="taskTitle" placeholder="Task Title" />
					<input type="text" name="taskCategory" placeholder="Task Category" />
					<textarea name="taskDescription" placeholder="Task description" />
					<select name="assignedUser">
						<option value="">Assign to</option>
						{this.state.users
							? this.state.users.map(u => (
									<option key={u._id} value={u._id}>
										`Name: {u.name} email {u.email}`
									</option>
							  ))
							: ''}
					</select>
					<button type="submit">Create Task</button>
				</form>
			</div>
		)
	}
}
