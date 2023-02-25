import React from "react";
import s from './Dialogs.module.css';


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Bohdan
                </div>
                <div className={s.dialog}>
                    Sveta
                </div>
                <div className={s.dialog}>
                    Yura
                </div>
                <div className={s.dialog}>
                    Mara
                </div>
                <div className={s.dialog}>
                    Gron
                </div>
                <div className={s.dialog}>
                    Tolik
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is your it-kamasutra</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs;