import React from "react"
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css';


/*let s = {
    'nav': 'Navbar_nav__kxGZj',
    'item': 'Navbar_item__73g31'
}*/

/*let c1 = 'item';
let c2 = 'active';
let classes = c1+ " " + c2;
let classesNew = `${s.item} ${s.active}`; */

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <img src="https://freesvg.org/img/abstract-user-flat-4.png" className={s.logoProfile} />
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
                </div>
            </div>
            <div>
                <img src="https://icons.veryicon.com/png/o/internet--web/lobomeeting_web_designsystem/message-16.png" className={s.logoMessages} />
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
                </div>
            </div>
            <div>
                <img src="https://cdn-icons-png.flaticon.com/512/21/21601.png" className={s.logoNews} />
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
                </div>
            </div>
            <div>
                <img src="https://freesvg.org/img/Sound-Wave-Headphones.png" className={s.logoMusic} />
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
                </div>
            </div>
            <div>
                <img src="https://www.svgrepo.com/show/16804/global-settings.svg" className={s.logoSettings} />
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;