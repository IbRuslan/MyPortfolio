import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {AboutMe} from "./components/aboutMe/AboutMe";
import {MySkills} from "./components/mySkills/MySkills";
import {ProjectsList} from "./components/projects/ProjectsList";

function App() {
    return (
        <div className="App">
            <Header/>
            <AboutMe/>
            <MySkills/>
            <ProjectsList/>
            <Footer/>
        </div>
    );
}

export default App;
