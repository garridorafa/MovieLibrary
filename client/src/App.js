import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Components
import Login from './components/Login';
import Navigation from "./components/Navigation";
import Movies from "./components/Movies";
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
        </div>
      </Router>
    );
  }
}
