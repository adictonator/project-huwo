import React, { Component } from 'react'

export default class UserDetails extends Component {
	state = {
		user: null
	}

	componentDidMount() {
		fetch(`https://jsonplaceholder.typicode.com/users/${this.props.userID}`)
			.then(response => response.json())
			.then(user => this.setState({ user }))
	}

	render() {
		console.log('udets', this.state.user)
		return (
			<div>
				{this.state.user
					? `The user ID is ${this.state.user.id} and name is ${this.state.user.name}`
					: `Loading data`}
			</div>
		)
	}
}