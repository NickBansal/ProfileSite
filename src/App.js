import React, { Component } from 'react';
import './Stylesheets/App.css';
import Navbar from './Components/Navbar'
import About from './Components/About'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <About />
      </div>
    );
  }
}

export default App;
