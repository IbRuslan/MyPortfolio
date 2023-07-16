import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {AboutMe} from "./components/aboutMe/AboutMe";

function App() {
    return (
        <div className="App">
            <Header/>
            <AboutMe/>
            <Footer/>
        </div>
    );
}

export default App;
