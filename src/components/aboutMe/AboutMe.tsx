import React, {useEffect, useRef} from 'react';
import {motion} from 'framer-motion'
import s from './AboutMe.module.css'
import * as THREE from "three";
import NET from 'vanta/dist/vanta.net.min'
import ava from '../../img/ava.jpg'
import {PracticlesWrapper} from "./PracticlesWrapper";

export const AboutMe = () => {
    // const myRef = useRef<HTMLDivElement>(null);
    //
    // useEffect(() => {
    //     if (myRef.current) {
    //         const background = NET({
    //             el: myRef.current,
    //             THREE,
    //             mouseControls: true,
    //             touchControls: true,
    //             gyroControls: false,
    //             minHeight: 200.00,
    //             minWidth: 200.00,
    //             scale: 1.00,
    //             scaleMobile: 1.00,
    //             color: 0xf7f7f7,
    //             backgroundColor: 0xbdb5c8
    //         });
    //
    //         return () => {
    //             background.destroy();
    //         };
    //     }
    // }, []);


    const textAnimation = {
        hidden: {
            x: -100,
            opacity: 0,
        },
        visible: (custom: number) => ({
            x: 0,
            opacity: 1,
            transition: {delay: custom * 0.2}
        }),
    }

    return (
        <div id={'about'} className={s.back}>
            <PracticlesWrapper/>
            <div className={s.container}>
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    className={s.main}>
                    <motion.div custom={1.5} variants={textAnimation} className={s.avatar}>
                        <img src={ava} alt="ava"/>
                    </motion.div>
                    <motion.div custom={1} variants={textAnimation} className={s.description}>
                        <h1>Hi, I'm <strong>Ruslan Ibragimov</strong></h1>
                        <div className={s.text}>
                            <p>I’m a front-end developer who has a results-focused attitude to creating SPA, using
                                React(JS/TS), Redux. I would like to find project work and full-time employment in a
                                company with a modern approach to development and a collaborative team.</p>
                        </div>
                        <a href="#!" className={s.btn}>Download CV</a>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}