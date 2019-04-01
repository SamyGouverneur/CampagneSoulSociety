import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min';
import 'bootstrap/dist/js/bootstrap';
import './App.scss';
import Home from './components/home/Home';
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <header className="App-header">
            <Home />
          </header>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
