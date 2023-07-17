import React from 'react';
import {motion} from 'framer-motion'
import s from './Contacts.module.css'
import email from '../../img/mail.svg'
import phone from '../../img/phone.svg'

export const Contacts = () => {

    const myContactsAnimation = {
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
        <div className={s.container}>
            <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{amount: 0.2}}
                className={s.contacts} id='contacts'>
                <motion.h3 className={s.contacts_title}>Contact me</motion.h3>
                <div className={s.contacts_body}>
                    <motion.div custom={1} variants={myContactsAnimation} className={s.contacts_info}>
                        <div className={s.contacts_data}>
                            <div>
                                <img src={email} alt="mail" className={s.icon}/><span>Email</span>
                            </div>
                            <span>ribragimov2003@gmail.com</span>
                        </div>
                        <div className={s.contacts_data}>
                            <div className={s.icon}>
                                <img src={phone} alt="call" className={s.icon}/><span>Number</span>
                            </div>
                            <span>+998914012901</span>
                        </div>
                    </motion.div>
                    <motion.div custom={1.5} variants={myContactsAnimation} className={s.contacts_form}>
                        <div className={s.form}>
                            <div className={s.form_container}>
                            <label>Name</label>
                            <input type="text" name="user_name" className={s.contacts_form_input}
                                   placeholder="Write your name"
                            />
                            <label>Mail</label>
                            <input type="text" name="user_name" className={s.contacts_form_input}
                                   placeholder="Write your email"
                            />
                            <label>Message</label>
                            <textarea name="user_name" className={`${s.contacts_form_input} ${s.form_box}`}
                                      placeholder=""
                            />
                            </div>
                            <button className={s.contacts_button}>
                                Submit
                            </button>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};