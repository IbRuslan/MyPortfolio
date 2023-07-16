import React from 'react';
import s from './footer.module.css'
import github from '../../img/icons/GitHub.svg'
import link from '../../img/icons/LinkedIn.svg'
import vk from '../../img/icons/VK.svg'
import tg from '../../img/icons/Telegram.svg'

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.container}>
                <div className={s.networks}>
                    <div className={s.network}>
                        <a href="https://github.com/IbRuslan"><img src={github} alt="github"/></a>
                    </div>
                    <div className={s.network}>
                        <a href="https://www.linkedin.com/in/ruslan-ibragimov-1b5220276/"><img src={link} alt="linkedIh"/></a>
                    </div>
                    <div className={s.network}>
                        <a href="https://vk.com/executioner29"><img src={vk} alt="vkontakte"/></a>
                    </div>
                    <div className={s.network}>
                        <a href="https://t.me/Spectre2901"><img src={tg} alt="telegram"/></a>
                    </div>
                </div>
            </div>
        </div>
    );
};
