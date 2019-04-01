import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min';
import 'bootstrap/dist/js/bootstrap';
import './App.scss';
import { BrowserRouter } from "react-router-dom";
import Navbar from './Components/Navbar'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                </header>
                <Navbar/>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
