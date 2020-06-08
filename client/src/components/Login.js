import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div>
        <h2>Login</h2>
        
        <form>
          User : <input id="login_user" /> <br/>
          Pass: <input id="login_pass" /> <br/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}
