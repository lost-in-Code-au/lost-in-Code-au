import React, { Component } from 'react'

class Navi extends Component {

  render() {
    return (
      <nav>
        <div className="navi">
        <ul>
          <div className="leftNav">
            <li><img id="logo" src="./build/favlogowhite.png" alt="" /></li>
            <li><a href="https://expo.io/@lost-in-code">Current React-native Projects</a></li>
          </div>
          <div className="rightNav">
            <li><a href="mailto:reece.c.jones@gmail.com"><img src="./icons/email.png" alt="" /></a></li>
            <li><a href="https://github.com/lost-in-Code-au"><img src="./icons/github.png" alt="" /></a></li>
            <li><a href="https://uk.linkedin.com/in/reece-jones-53a584b2"><img src="./icons/linkedin.png" alt="" /></a></li>
          </div>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navi
