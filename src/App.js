import React, { Component } from 'react';
import './Stylesheets/App.css';
import Landing from './Pages/Landing'
import About from './Pages/About'

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
