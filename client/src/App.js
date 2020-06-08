import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

//Samples
//import movies from './sample/sampleMovies.json'
//import actors from './sample/sampleActors.json'

//Components
import Login from './components/Login';
import Navigation from "./components/Navigation";
import Movie from "./components/Movie";
import Movies from "./components/Movies";
import Actor from "./components/Actor";
import Actors from "./components/Actors";


export default class App extends Component {
  state = {
    movies: [],
    actors: [],
    error: null
  }

  componentDidMount() {
    fetch('http://localhost:8080/movies')
      .then(res => res.json())
      .then(movies => {
        console.log(movies)
        this.setState({
          ...this.state,
          movies
        })
      })
      .catch(error => {
        this.setState({
          ...this.state,
          error
        })
      })
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Login />
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