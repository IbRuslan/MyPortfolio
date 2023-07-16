import React from 'react';
import {motion} from 'framer-motion'
import s from './Projects.module.css'
import social from '../../../../img/projects/social.jpg'
import todolist from '../../../../img/projects/todolist.jpg'
import shop from '../../../../img/projects/shop.jpg'

export const Projects = () => {

    const myProjectsAnimation = {
        hidden:{
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
        <div className={s.container}>
            <div className={s.projects} id ="projects">
                <h2 className={s.title}>My Projects</h2>
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ amount: 0.2}}
                    className={s.projects_body}>
                    <motion.div custom={1} variants={myProjectsAnimation} className={s.project}>
                        <div className={s.project_img}>
                            <a href="https://www.google.com/"><img src={social} alt="social"/></a>
                        </div>
                        <h3 className={s.project_title}>SOCIAL NETWORK</h3>
                    </motion.div>
                    <motion.div custom={1.3} variants={myProjectsAnimation} className={s.project}>
                        <div className={s.project_img}>
                            <a href="https://www.google.com/"><img src={todolist} alt="todolist"/></a>
                        </div>
                        <h3 className={s.project_title}>TODOLIST</h3>
                    </motion.div>
                    <motion.div custom={1.6} variants={myProjectsAnimation} className={s.project}>
                        <div className={s.project_img}>
                            <a href="https://www.google.com/"><img src={shop} alt="shop"/></a>
                        </div>
                        <h3 className={s.project_title}>SHOP</h3>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};
