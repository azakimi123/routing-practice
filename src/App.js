import React, { Component } from 'react';
import Nav from './Components/Nav';
import Home from './Components/Home';
import './App.css';

class App extends Component {
  render() {
    return(
      <div>
        <body>
          <Nav/>
          <Home/>
        </body>
      </div>
    )
  }
}

export default App;
