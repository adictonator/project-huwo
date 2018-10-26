import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import CreateTask from './CreateTask'

export default class TasksRouting extends Component {
	render() {
		return <Route path="/task/new" render={() => <CreateTask />} />
	}
}
