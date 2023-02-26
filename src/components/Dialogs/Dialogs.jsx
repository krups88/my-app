import React from "react";
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/1">Bohdan</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Sveta</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Yura</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'>Mara</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5'>Gron</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/6'>Tolik</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.dialog}>Hi</div>
                <div className={s.dialog}>How is your it-kamasutra</div>
                <div className={s.dialog}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs;