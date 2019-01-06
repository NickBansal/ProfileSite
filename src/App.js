import React, { Component } from 'react';
import './Stylesheets/App.css';
import Landing from './Pages/Landing'
import About from './Pages/About'
import Projects from './Pages/Projects'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
        <About />
        <Projects />
      </div>
    );
  }
}

export default App;
