import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Components
import Login from './components/Login';
import Navigation from "./components/Navigation";
import Movies from "./components/Movies";
import Actors from "./components/Actors";
import Footer from './components/Footer';


export default class App extends Component {
  state = {
    movies: [],
    actors: [],
    genres: [],
    error: null
  }

  componentDidMount() {
    fetch('http://localhost:8080/movies')
      .then(res => res.json())
      .then(movies => {
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

      fetch('http://localhost:8080/actors')
      .then(res => res.json())
      .then(actors => {
        this.setState({
          ...this.state,
          actors
        })
      })
      .catch(error => {
        this.setState({
          ...this.state,
          error
        })
      })

      fetch('http://localhost:8080/genres')
      .then(genres => {
        this.setState({
          ...this.state,
          genres
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
      <Router>
        <div className="app">
          <Navigation />
          <Switch>
            <Route path="/" exact>
              <h1 className="d-flex justify-content-center">Welcome to Movie Library!!!</h1>
              <p className="d-flex justify-content-center">This is a page that love movies :)</p>
            </Route>
            <Route path="/movies">
              <h1 className="d-flex justify-content-center" >Movies List</h1>
              <Movies movies={this.state.movies} />
            </Route>
            <Router path="/genres">
              <h1 className="d-flex justify-content-center" >Genres List</h1>
            </Router>
            <Router path="/actors">
              <h1 className="d-flex justify-content-center" >Actors List</h1>
              <Actors actors={this.state.actors}/>
            </Router>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}
