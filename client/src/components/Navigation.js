import React, { Component } from 'react'

export class Navigation extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="true" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" ></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarToggler">
					<a className="navbar-brand" href="/" >Movies Library</a>
					<form className="form-inline ">
						<input lass="form-control" type="search" placeholder="Movies, actors, genres..."/>
						<input className="btn btn-info" type="submit" value="Search"/>
					</form>
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link" href="/movies" >Movies </a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/genres" >Genres </a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/actors" >Actors </a>
						</li>
						<li className="nav-item ">
							<a className="nav-link" href="/login" >Login </a>
						</li>
					</ul>
				</div>			
			</nav>
		)
	}
}

export default Navigation