import React, { Component } from 'react'

export default class Task extends Component {
	deleteTask = id => {
		fetch('/api/tasks', {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				id: id
			})
		})
			.then(resp => resp.json())
			.then(resp => alert(resp.data.msg))
	}

	render() {
		return (
			<div>
				This work is related to: {this.props.task.title}.{' '}
				<button onClick={() => this.deleteTask(this.props.task._id)}>
					Delete Task
				</button>
			</div>
		)
	}
}
