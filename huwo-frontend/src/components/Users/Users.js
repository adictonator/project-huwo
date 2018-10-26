import React, { Component } from 'react'
import User from './User'

export default class Users extends Component {
	constructor() {
		super()

		this.state = {
			users: null
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ users }))
	}

	render() {
		return (
			<React.Fragment>
				{this.state.users
					? this.state.users.map(user => <User key={user.id} user={user} />)
					: 'Loading Users'}
			</React.Fragment>
		)
	}
}
