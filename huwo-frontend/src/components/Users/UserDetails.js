import React, { Component } from 'react'
import { doFetch } from '../../core/Helpers'

export default class UserDetails extends Component {
	state = {
		user: null,
		tasks: null
	}

	fetchUser = () => {
		doFetch(`/api/user/${this.props.userID}`).then(user => this.setState({ user }))
	}

	fetchUserTasks = () => {
		doFetch(`/api/user/${this.props.userID}/tasks`).then(tasks => this.setState({ tasks }))
	}

	componentDidMount() {
		this.fetchUser()
		this.fetchUserTasks()
	}

	render() {
		console.log('udets', this.state)
		return (
			<div>
				{this.state.user
					? `The user ID is ${this.state.user._id} and name is ${this.state.user.name}`
					: `Loading data`}
				<h3>User's Tasks</h3>
				{this.state.tasks ? (
					<ul>
						{this.state.tasks.map(task => (
							<li key={task._id}>
								{task.title}
								<span>{task.status ? task.status : 'not defined'}</span>
							</li>
						))}
					</ul>
				) : (
					'No tasks assigned to this user!'
				)}
			</div>
		)
	}
}
