import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div className="container">
      <h2>Login</h2>
        
        <form className="container">
          <div className="form-group">
            <label>User o email:</label>
            <input type="email" className="form-control"  id="login_user" />
          </div>
          <div className="form-group">
            <label>Pass:</label> 
            <input type="password" className="form-control" id="login_pass" />
          </div>
          <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
      </div>
    )
  }
}
