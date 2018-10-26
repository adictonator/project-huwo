import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class User extends Component {
	render() {
		return (
			<div>
				and name {this.props.user.name}.
				<Link to={`/user/${this.props.user.id}`}>View Details</Link>
			</div>
		)
	}
}
