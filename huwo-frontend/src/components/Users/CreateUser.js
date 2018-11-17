import React, { Component } from 'react'

export default class CreateUser extends Component {
	createUser = e => {
		e.preventDefault()
		const formData = new FormData(e.target)
		const user = {}

		for (let entry of formData.entries()) {
			user[entry[0]] = entry[1]
		}

		this.submitData(user)
	}

	submitData = data => {
		console.log('asd', data)
		fetch('/api/users', {
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
				<form onSubmit={e => this.createUser(e)}>
					<input type="text" name="name" placeholder="User Name" />
					<input type="email" name="email" placeholder="User Email" />
					<button type="submit">Add User</button>
				</form>
			</div>
		)
	}
}
