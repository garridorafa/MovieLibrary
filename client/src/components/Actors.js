import React, { Component } from 'react'

import Actor from './Actor'


export default class Actors extends Component {
	render() {
		return (
			<div>
				{this.props.actors.map(actor => <Actor actor={actor} />)}
			</div>
		)
	}
}