import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Users from '../components/Users/Users'
import Tasks from '../components/Tasks/Tasks'
import UsersRouting from '../components/Users/UsersRouting'
import TasksRouting from '../components/Tasks/TasksRouting'

export default class Routing extends Component {
	render() {
		const componentsMap = {
			users: <Users />,
			tasks: <Tasks />
		}

		return (
			<React.Fragment>
				<Route
					exact
					path="/:id"
					render={props =>
						componentsMap[props.match.params.id]
							? componentsMap[props.match.params.id]
							: 'Oops 404'
					}
				/>
				<UsersRouting />
				<TasksRouting />
			</React.Fragment>
		)
	}
}
