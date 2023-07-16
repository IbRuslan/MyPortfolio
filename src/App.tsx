import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {AboutMe} from "./components/aboutMe/AboutMe";
import {MySkills} from "./components/mySkills/MySkills";

function App() {
    return (
        <div className="App">
            <Header/>
            <AboutMe/>
            <MySkills/>
            <MySkills/>
            <Footer/>
        </div>
    );
}

export default App;
