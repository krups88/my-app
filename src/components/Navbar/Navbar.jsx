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
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/news'>News</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/music'>Music</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/settings'>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;