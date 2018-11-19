import React, { Component } from 'react'
import { doFetch } from '../../../core/Helpers'
import LoginForm from './LoginForm'

export default class Login extends Component {
	processLogin = e => {
		const formData = new FormData(e.target)
		const creds = {}

		for (let entry of formData.entries()) {
			creds[entry[0]] = entry[1]
		}

		doFetch('/api/login').then(resp => console.log('rss', resp))

		e.preventDefault()
	}

	render() {
		return <LoginForm processLogin={this.processLogin} />
	}
}
