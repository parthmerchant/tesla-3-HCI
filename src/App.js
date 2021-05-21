import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import { NavLink, BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import TeslaImage from "./images/charlie-deets-D1W5QenBzlU-unsplash.jpg";

import Usability from "./components/Usability";
import Persona from "./components/Persona";
import SocialMedia from "./components/SocialMedia";
import Prototype from "./components/Prototype";


function Tesla(props) {
    return (
        <div>
          <h2>TESLA MODEL 3 - Human-centered design</h2>
                <p>Designed by Parth Merchant</p>
                <a href="https://parthmerchant.com">parthmerchant.com</a><br></br>
                <br></br>
           <img src={TeslaImage} alt="" className="tesla-img"></img>
        </div>
    );
}

class App extends Component{

    // Bring window view to top on change
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render(){
        return(
            <BrowserRouter>
                <center>
                <div className="option-container">
                    <center>
                    <ul className="portfolio-options">
                        <li><NavLink activeClassName='is-active' className="port-option" to="/">Tesla 3</NavLink></li>
                        <li><NavLink activeClassName='is-active' className="port-option" to="/usability-evaluation">Usability Evaluation</NavLink></li>
                        <li><NavLink activeClassName='is-active' className="port-option" to="/persona-design">Persona Design</NavLink></li>
                        <li><NavLink activeClassName='is-active' className="port-option" to="social-media-content">Social Media Content</NavLink></li>
                        <li><NavLink activeClassName='is-active' className="port-option" to="/prototype-design">Prototype Design</NavLink></li>
                    </ul>
                    <br></br>
                    <Switch>
                        <Route exact path="/" component={() => <Tesla/>} />
                        <Route path="/usability-evaluation" component={() => <Usability/>} />
                        <Route path="/persona-design" component={() => <Persona/>}/>
                        <Route path="/social-media-content" component={() => <SocialMedia/>}/>
                        <Route path="/prototype-design" component={() => <Prototype/>}/>
                        <Redirect to="/" />
                    </Switch>
                    </center>
                </div>
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Made with React<br></br>All photos from Unsplash & Pexels.</p>
                </header>
                </center>
            </BrowserRouter>
        );
    }
}

export default App;
