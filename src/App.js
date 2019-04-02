import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min';
import 'bootstrap/dist/js/bootstrap';
import './App.scss';
import Home from './components/home/Home';
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar'
import Concept from './components/concept/Concept'
import Pricing from './components/pricing/Pricing'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="all_sections">
            <Home />
            <Concept />
            <Pricing />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
