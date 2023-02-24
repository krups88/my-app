import React from "react"
import s from './Navbar.module.css';
console.log(s);
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
                <a href="/profile">Profile</a>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <a href="dialogs">Messages</a>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <a href="news">News</a>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <a href="music">Music</a>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <a href="settings">Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;