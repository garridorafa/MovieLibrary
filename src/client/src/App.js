import React, { Component } from 'react';

//Samples
import movies from './sample/sampleMovies.json'

//Components
import Navigation from "./components/Navigation";
import Movie from "./components/Movie"


export default class App extends Component {
  state = {
    movies: movies
  }

  render() {
    return (
      <div className="App">

        {/*<Navigation/>*/}
        {this.state.movies.map( movie => <Movie movie={movie} /> )}
        
      </div>
    );
  }
}
