import React, { Component } from 'react';
import './Stylesheets/App.css';
import Landing from './Components/Landing'
import About from './Components/About'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
        <About />
      </div>
    );
  }
}

export default App;
