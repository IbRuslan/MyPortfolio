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
import unittest from '../../img/skills/unittest.svg'
import rest from '../../img/skills/api.svg'
import MySkill from "./MySkill/MySkill";

export const MySkills = () => {

    const mySkills = [
        {id: 1, title: 'HTML5', urlImage: html},
        {id: 1.1, title: 'CSS', urlImage: css},
        {id: 1.2, title: 'JS', urlImage: javascript},
        {id: 1.3, title: 'TS', urlImage: typescript},
        {id: 1.4, title: 'REACT', urlImage: react},
        {id: 1.5, title: 'REDUX', urlImage: redux},
        {id: 1.6, title: 'UnitTest', urlImage: unittest},
        {id: 1.7, title: 'RestApi', urlImage: rest},
        {id: 1.8, title: 'STORYBOOK', urlImage: storybook},
        {id: 1.9, title: 'MUI', urlImage: mui},
        {id: 2, title: 'GIT', urlImage: git},
        {id: 2.1, title: 'FIGMA', urlImage: figma}
    ]

    const mySkillsAnimation = {
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
        <div className={s.container} id={'skills'}>
            <div className={s.page}>
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{amount: 0.2}}
                    className={s.skill}>
                    <motion.h2 custom={1} variants={mySkillsAnimation} className={s.skill_title}>My skills
                    </motion.h2>
                    <div className={s.skills_body}>
                        <div className={s.skill_body}>
                            {
                                mySkills.map(s => <MySkill key={s.id} title={s.title}
                                                           urlImage={s.urlImage} custom={s.id}
                                                           variants={mySkillsAnimation}/>
                                )
                            }
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};