import React from 'react';
import {motion} from "framer-motion";
import s from "../Projects.module.css";

type HiddenType = {
    y: number
    opacity: number
}

type VisibleType = {
    y: number
    opacity: number
    transition: {delay: number}
}

type MyProjectsAnimationType = {
    hidden: HiddenType
    visible: (custom: number) => VisibleType
}

type ProjectType = {
    title: string
    urlImage: string
    urlGitRage: string
    custom: number
    variants: MyProjectsAnimationType
}

export const Project = (props: ProjectType) => {
    return (
        <motion.div custom={props.custom} variants={props.variants} className={s.project}>
            <div className={s.project_img}>
                <a href={props.urlGitRage}><img src={props.urlImage} alt={props.title}/></a>
            </div>
            <h3 className={s.project_title}>{props.title}</h3>
        </motion.div>
    );
};
