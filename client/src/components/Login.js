import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div>
        <h2>Login</h2>
        
        <form action="http://localhost:8080/auth/login" method="post">
          User: <input id="login_user" name="username" /> <br/>
          Pass: <input id="login_pass" name="password" /> <br/>
          <button type="submit">Log in</button>
        </form>
      </div>
    )
  }
}
