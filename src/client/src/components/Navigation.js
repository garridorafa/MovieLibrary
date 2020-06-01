import React, { Component } from 'react'

export class Navigation extends Component {
	render() {
		return (
			<header>
				<div>
					<nav>
						<a>Movies Library</a>
						<input/>
						<input type="submit" value="Search"/>
						<a>Movies </a>
						<a>Genres </a>
						<a>Actors </a>
					</nav>
				</div>
			</header>
		)
	}
}

export default Navigation
