import React from 'react';
import {motion} from 'framer-motion'
import s from "./MySkils.module.css";
import html from '../../img/skills/Html.svg'
import css from '../../img/skills/css3.svg'
import javascript from '../../img/skills/js.svg'
import typescript from '../../img/skills/ts.svg'
import react from '../../img/skills/react.svg'
import redux from '../../img/skills/Redux.svg'
import storybook from '../../img/skills/storybook.svg'
import mui from '../../img/skills/materialui.svg'
import git from '../../img/skills/git.svg'
import figma from '../../img/skills/figma.svg'

export const MySkills = () => {

    const mySkillsAnimation = {
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
        <div id={'skills'} className={s.container}>
            <div className={s.page}>
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ amount: 0.2}}
                    className={s.skill} id='skills'>
                    <motion.h2 custom={1} variants={mySkillsAnimation}  className={s.skill_title}>My skills</motion.h2>
                    <div className={s.skills_body}>
                        <div className={s.skill_body}>
                            <motion.div variants={mySkillsAnimation} custom={1} className={s.paper}>
                                <div className={s.icon}><img src={html} alt="html"/></div>
                                <h3>HTML5</h3>
                            </motion.div>
                            <motion.div variants={mySkillsAnimation} custom={1.1} className={s.paper}>
                                <div className={s.icon}><img src={css} alt="css"/></div>
                                <h3>CSS</h3>
                            </motion.div>
                            <motion.div variants={mySkillsAnimation} custom={1.2} className={s.paper}>
                                <div className={s.icon}><img src={javascript} alt="js"/></div>
                                <h3>JS</h3>
                            </motion.div>
                            <motion.div variants={mySkillsAnimation} custom={1.3} className={s.paper}>
                                <div className={s.icon}><img src={typescript} alt="ts"/></div>
                                <h3>TS</h3>
                            </motion.div>
                            <motion.div variants={mySkillsAnimation} custom={1.4} className={s.paper}>
                                <div className={s.icon}><img src={react} alt="react"/></div>
                                <h3>REACT</h3>
                            </motion.div>
                            <motion.div variants={mySkillsAnimation} custom={1.5} className={s.paper}>
                                <div className={s.icon}><img src={redux} alt="redux"/></div>
                                <h3>REDUX</h3>
                            </motion.div>
                            <motion.div variants={mySkillsAnimation} custom={1.6} className={s.paper}>
                                <div className={s.icon}><img src={storybook} alt="storybook"/></div>
                                <h3>STORYBOOK</h3>
                            </motion.div>
                            <motion.div variants={mySkillsAnimation} custom={1.7} className={s.paper}>
                                <div className={s.icon}><img src={mui} alt="mui"/></div>
                                <h3>MUI</h3>
                            </motion.div>
                            <motion.div variants={mySkillsAnimation} custom={1.8} className={s.paper}>
                                <div className={s.icon}><img src={git} alt="git"/></div>
                                <h3>GIT</h3>
                            </motion.div>
                            <motion.div variants={mySkillsAnimation} custom={1.9} className={s.paper}>
                                <div className={s.icon}><img src={figma} alt="figma"/></div>
                                <h3>FIGMA</h3>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};