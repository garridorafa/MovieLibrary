import React, { Component } from 'react'

export class Navigation extends Component {
	render() {
		return (
			<header>
				<div style= {body}>
					<nav>
						<a href="#" >Movies Library</a>
						<input type="text" />
						<input type="submit" value="Search"/>
						<a href="#" >Movies </a>
						<a href="#" >Genres </a>
						<a href="#" >Actors </a>
						<a href="#" >Login </a>
					</nav>
				</div>
			</header>
		)
	}
}

export default Navigation



const body = {
	padding: "8px"
}