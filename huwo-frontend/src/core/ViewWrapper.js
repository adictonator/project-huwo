import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header'
import Routing from './Routing'

export default class ViewWrapper extends Component {
	render() {
		return (
			<BrowserRouter>
				<React.Fragment>
					<Header />
					<section className="hero">
						<Routing />
					</section>
				</React.Fragment>
			</BrowserRouter>
		)
	}
}
