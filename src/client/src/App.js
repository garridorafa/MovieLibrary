import React, { Component } from 'react';

//Samples
import movies from './sample/sampleMovies.json'
import actors from './sample/sampleActors.json'

//Components
import Navigation from "./components/Navigation";
import Movie from "./components/Movie"
import Movies from "./components/Movies"
import Actor from "./components/Actor"
import Actors from "./components/Actors"


export default class App extends Component {
  state = {
    movies: movies,
    actors: actors
  }

  render() {
    return (
      <div className="App">
       
      </div>
    );
  }
}

//Testing components
/*
<Movies movies={this.state.movies} />
<Actors actors={actors}/>
<Navigation/>
*/