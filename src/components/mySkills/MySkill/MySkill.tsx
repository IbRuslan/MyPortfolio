import React from 'react';
import {motion} from "framer-motion";
import s from "../MySkils.module.css";
import {MyProjectsAnimationType} from "../../projects/Project/Project";

type MySkillType = {
    title: string
    urlImage: string
    custom: number
    variants: MyProjectsAnimationType
}

const MySkill: React.FC<MySkillType> = ({title, urlImage, custom, variants}) => {
    return (
        <motion.div variants={variants} custom={custom} className={s.paper}>
            <div className={s.icon}><img src={urlImage} alt="html"/></div>
            <h3>{title}</h3>
        </motion.div>
    );
};

export default MySkill;