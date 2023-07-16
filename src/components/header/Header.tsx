import React, {useState} from 'react';
import s from './Header.module.css'
import Scrollspy from "react-scrollspy";
import {useWindowSize} from "../../helpers/useWindowsSize";
import menu from "../../img/burger-menu/menu.svg"
import close from "../../img/burger-menu/close.svg"

export const Header = () => {

    const [open, setOpen] = useState(false)
    const hookResize = useWindowSize()

    return (
        <nav className={s.nav}>
            <div className={s.container}>
                {hookResize > 600

                    ? <div className={s.nav_row}>
                        <div className={s.logo}>IbRuslan</div>
                        <Scrollspy className={s.scroll} items={['about', 'skills', 'projects', 'contacts']}
                                   currentClassName={s.is_active} offset={-200}>
                            <li className={s.scroll_item}><a href={"#about"} className={s.scroll_item_link}>About</a>
                            </li>
                            <li className={s.scroll_item}><a href={"#skills"} className={s.scroll_item_link}>Skills</a>
                            </li>
                            <li className={s.scroll_item}><a href={"#projects"}
                                                             className={s.scroll_item_link}>Projects</a></li>
                            <li className={s.scroll_item}><a href={"#contacts"}
                                                             className={s.scroll_item_link}>Contacts</a></li>
                        </Scrollspy>
                    </div>
                    : <div>
                        {!open ? <img className={s.icon} src={menu} alt="menu" onClick={() => setOpen(true)}/>
                            : <div>
                                <img className={s.icon} onClick={() => setOpen(false)} src={close} alt="close"/>

                                <Scrollspy className={s.scroll} items={['about', 'skills', 'projects', 'contacts']}
                                           currentClassName={s.is_active} offset={-200}>
                                    <li className={s.scroll_item}><a href={"#about"}
                                                                     onClick={() => setOpen(false)}
                                                                     className={s.scroll_item_link}>About</a>
                                    </li>
                                    <li className={s.scroll_item}><a href={"#skills"}
                                                                     onClick={() => setOpen(false)}
                                                                     className={s.scroll_item_link}>Skills</a>
                                    </li>
                                    <li className={s.scroll_item}><a href={"#projects"}
                                                                     onClick={() => setOpen(false)}
                                                                     className={s.scroll_item_link}>Projects</a>
                                    </li>
                                    <li className={s.scroll_item}><a href={"#contacts"}
                                                                     onClick={() => setOpen(false)}
                                                                     className={s.scroll_item_link}>Contacts</a>
                                    </li>
                                </Scrollspy>
                            </div>
                        }
                    </div>
                }
            </div>
        </nav>
    );
};

