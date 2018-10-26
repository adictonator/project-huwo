import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import UserDetails from './UserDetails'

export default class UsersRouting extends Component {
	render() {
		return (
			<Route
				path="/user/:id"
				render={params => <UserDetails userID={params.match.params.id} />}
			/>
		)
	}
}
