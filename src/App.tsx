import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {AboutMe} from "./components/aboutMe/AboutMe";
import {MySkills} from "./components/mySkills/MySkills";
import {ProjectsList} from "./components/projects/ProjectsList";
import {Contacts} from "./components/contacts/Contacts";


function App() {

    return (
        <div className="App">
            <Header/>
            <AboutMe/>
            <MySkills/>
            <ProjectsList/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
