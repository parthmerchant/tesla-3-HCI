import logo from './logo.svg';
import './App.css';
import { MdBrightness4 } from 'react-icons/md';

import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes"

import TeslaImage from "./images/charlie-deets-D1W5QenBzlU-unsplash.jpg";

import Navbar from './components/navbar/Navbar';

import Usability from "./components/Usability";
import Persona from "./components/Persona";
import SocialMedia from "./components/SocialMedia";
import Prototype from "./components/Prototype";


function Tesla() {
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


const App = () =>{

    const [theme, setTheme] = useState('light');
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }
        return(
            <BrowserRouter>
                <center>
                <Navbar />
                <div className="main-container">
                <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <>
                <GlobalStyles/>
                <div className="option-container">
                    <center>
                    <MdBrightness4 size="2em" onClick={themeToggler}/>
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
                </>
                </ThemeProvider>
                </div>
                </center>
            </BrowserRouter>
        );
}

export default App;
