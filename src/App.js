import React, { Component } from 'react';
import './Stylesheets/App.css';
import Navbar from './Components/Navbar'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;
