import React, { Component } from 'react'
import logo from './assets/favicon.ico'
import './App.css'

import Navi from './components/Navi.js'
import Header from './components/Header.js'
import Markdown from './components/Markdown.js'
import GitApi from './components/GitApi.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Lost-in-code</h1>
        </header>
        <p className="App-intro">
          <div>
          <Navi />
          <Header />
          <Markdown />
          <GitApi />
          </div>
        </p>
      </div>
    )
  }
}

export default App
