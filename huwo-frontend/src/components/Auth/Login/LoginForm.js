import React, { Component } from 'react'

export default class LoginForm extends Component {
	render() {
		return (
			<form onSubmit={e => this.props.processLogin(e)}>
				<input type="text" name="username" placeholder="Email" />
				<input type="password" name="password" placeholder="Password" />
				<button>Login</button>
			</form>
		)
	}
}
