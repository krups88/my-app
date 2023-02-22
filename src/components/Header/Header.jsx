import React from "react"
import s from'./Header.module.css';


const Header = () => {
    return (
            <header className={s.header}>
                <img src='https://www.planetware.com/wpimages/2019/11/canada-in-pictures-beautiful-places-to-photograph-morraine-lake.jpg' className={s.img}/>
            </header>
    )
}

export default Header;