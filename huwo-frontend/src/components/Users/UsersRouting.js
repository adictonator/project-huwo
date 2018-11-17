import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import UserDetails from './UserDetails'
import CreateUser from './CreateUser'

export default class UsersRouting extends Component {
	render() {
		return (
			<Route
				path="/user/:id"
				render={params => {
					if (params.match.params.id === 'new') {
						return <CreateUser />
					} else {
						return <UserDetails userID={params.match.params.id} />
					}
				}
			}
			/>
		)
	}
}
