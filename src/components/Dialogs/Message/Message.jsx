import React from "react";
import s from './../Dialogs.module.css';


export const Message = (props) => {
    return (
        <div className={s.block}>
            <div className={s.dialog}>{props.message}</div>
        </div>
    )
}
