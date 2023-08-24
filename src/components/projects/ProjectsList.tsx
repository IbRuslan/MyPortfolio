import React from 'react';
import {motion} from 'framer-motion'
import s from './Projects.module.css'
import social from '../../img/projects/network.jpg'
import todolist from '../../img/projects/todolist.jpg'
import shop from '../../img/projects/shop.jpg'
import game from '../../img/projects/game.jpg'
import opros from '../../img/projects/oprosnik.jpg'
import counter from '../../img/projects/counter.jpg'
import {Project} from "./Project/Project";

export const ProjectsList = () => {

    const projectsItem = [
        {id: 1, title: 'Social network', urlImage: social, urlGitRage: 'https://github.com/IbRuslan/social-network'},
        {id: 1.1, title: 'TodoList', urlImage: todolist, urlGitRage: 'https://github.com/IbRuslan/TodoList'},
        {id: 1.3, title: 'SimpleGame', urlImage: game, urlGitRage: 'https://github.com/IbRuslan/myGame'},
        {id: 1.4, title: 'Counter', urlImage: counter, urlGitRage: 'https://github.com/IbRuslan/Counter'},
        {id: 1.5, title: 'Slider', urlImage: opros, urlGitRage: 'https://github.com/IbRuslan/ReactSlider'}
    ]

    const myProjectsAnimation = {
        hidden: {
            y: 100,
            opacity: 0,
        },
        visible: (custom: number) => ({
            y: 0,
            opacity: 1,
            transition: {delay: custom * 0.2},
        })
    }

    return (
        <div id="projects" className={s.container}>
            <div className={s.projects}>
                <h2 className={s.title}>My Projects</h2>
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{amount: 0.2}}
                    className={s.projects_body}>
                    {
                        projectsItem.map(p => <Project key={p.id}
                                                       title={p.title}
                                                       urlImage={p.urlImage}
                                                       urlGitRage={p.urlGitRage}
                                                       custom={p.id}
                                                       variants={myProjectsAnimation}/>)
                    }
                </motion.div>
            </div>
        </div>
    );
};
