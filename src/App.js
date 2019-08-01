import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min';
import 'bootstrap/dist/js/bootstrap';
import './App.scss';
import Presentation from './components/presentation/Presentation';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <div className="all_sections">
                        <div id="background">
                            <Presentation/>

                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
