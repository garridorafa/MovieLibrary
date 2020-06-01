import React, { Component } from 'react'

export default class Actor extends Component {
    render() {
        const {actor} = this.props;
        return (
            <div>
                <h2> {actor.name} </h2>
                <p> {actor.dateOfBirth} </p>
                <img src={actor.photo} alt=""></img>
                <p>Movies:</p>
                <ul>
                    {actor.movies.map(movie => <li> <a href=""> {movie.name} </a> </li> )}
                </ul>
                               
            </div>
        )
    }
}
