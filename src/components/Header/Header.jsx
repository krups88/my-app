import React from "react"
import s from'./Header.module.css';


const Header = () => {
    return (
            <header className={s.header}>
                <img src='https://www.svgrepo.com/show/303155/under-armour-logo.svg' className={s.img}/>
            </header>
    )
}

export default Header;