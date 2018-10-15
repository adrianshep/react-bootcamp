import React, { Component } from 'react';
import Home from './Home'
import About from './About'
import Topics from './Topics'

class App extends Component {
  render() {
    return (
      <div>
        Hello World
        <Home />
        <About />
        <Topics />
      </div>
    )
  }
}

export default App
