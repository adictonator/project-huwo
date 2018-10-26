import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { WebRoutes } from './WebRoutes'

export default class Navigation extends Component {
	render() {
		return (
			<nav className="header__nav">
				{WebRoutes.map(link => (
					<Link key={link.to.toString()} to={link.to}>
						{link.title}
					</Link>
				))}
			</nav>
		)
	}
}
