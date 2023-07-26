import React, {ChangeEvent, useState} from 'react';
import {motion} from 'framer-motion'
import s from './Contacts.module.css'
import email from '../../img/mail.svg'
import phone from '../../img/phone.svg'
import { useForm, ValidationError } from '@formspree/react';

export const Contacts = () => {
    const [user_name, setName] = useState('');
    const [user_email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [state, handleSubmit] = useForm("mzblzqoq");
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const onChangeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }
    const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value)
    }
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = {
            name: user_name,
            email: user_email,
            message: message,
        };

        try {
            await handleSubmit(formData);
            setName('');
            setEmail('');
            setMessage('');
            setShowSuccessMessage(true);
            setTimeout(() => { // задержка на 3 секунды
                setShowSuccessMessage(false);
            }, 3000);
        } catch (error) {
            console.log(error);
        }
    };

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
                        <form className={s.form} onSubmit={onSubmit}>
                            <div className={s.form_container}>
                            <label>Name</label>
                            <input value={user_name} onChange={onChangeNameHandler} id="name" type="text" name="name" required className={s.contacts_form_input}
                                   placeholder="Write your name"
                            />
                            <label>Mail</label>
                            <input value={user_email} onChange={onChangeEmailHandler} id="email" type="email" name="email" required className={s.contacts_form_input}
                                   placeholder="Write your email"
                            />
                            <label>Message</label>
                            <textarea value={message} onChange={onChangeMessageHandler} id="message" name="message" required className={`${s.contacts_form_input} ${s.form_box}`}
                                      placeholder=""
                            />
                            </div>
                            {showSuccessMessage &&
                                <div className="success-message">
                                    <p>Ваша форма была успешно отправлена!</p>
                                </div>
                            }
                            <button type={'submit'} className={s.contacts_button} disabled={state.submitting}>
                                Submit
                            </button>
                        </form>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};