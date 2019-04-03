import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min';
import 'bootstrap/dist/js/bootstrap';
import './App.scss';
import Home from './components/home/Home';
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar'
import Concept from './components/concept/Concept'
import Contact from './components/contact/Contact'
import Pricing from './components/pricing/Pricing'
import Footer from './components/footer/Footer';

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
            <Contact />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
