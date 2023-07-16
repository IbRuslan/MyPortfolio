import React, {useEffect, useState} from 'react';
import s from './Header.module.css'
import Scrollspy from "react-scrollspy";

export const Header = () => {

    return (
        <nav className={s.nav}>
            <div className={s.container}>
                <div className={s.nav_row}>
                    <div className={s.logo}>IbRuslan</div>
                    <Scrollspy className={s.scroll} items={['about','skills','projects','contacts']} currentClassName={s.is_active} offset={-200}>
                        <li className={s.scroll_item}><a href={"#about"} className={s.scroll_item_link}>About</a></li>
                        <li className={s.scroll_item}><a href={"#skills"} className={s.scroll_item_link}>Skills</a></li>
                        <li className={s.scroll_item}><a href={"#projects"} className={s.scroll_item_link}>Projects</a></li>
                        <li className={s.scroll_item}><a href={"#contacts"} className={s.scroll_item_link}>Contacts</a></li>
                    </Scrollspy>
                </div>
            </div>
        </nav>
    );
};

