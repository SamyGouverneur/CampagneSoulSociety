import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min';
import 'bootstrap/dist/js/bootstrap';
import './App.scss';
import Home from './components/home/Home';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <header className="App-header">
          <Home />
        </header>
      </div>
    );
  }
}

export default App;
