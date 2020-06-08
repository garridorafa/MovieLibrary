import React, { Component } from 'react'


export default class Movie extends Component {
  render() {
		const { movie } = this.props;
		return (
			<div>
					<h2> {movie.name} </h2>
					<img src={movie.cover} alt=""></img>
					<p>Genres:</p>
					<ul>
							{movie.genres && movie.genres.map(genre => <li> <a href=""> {genre.genreName} </a> </li>)}
					</ul>
					<p> {movie.year} </p>
					<p>Casting:</p>
					<ul>
							{movie.actors && movie.actors.map(actor => <li> <a href=""> {actor.name} </a> </li>)}
					</ul>
					<h3>Trailer</h3>
					<iframe src={movie.youtubelink} ></iframe>
			</div>
		)
	}
}
