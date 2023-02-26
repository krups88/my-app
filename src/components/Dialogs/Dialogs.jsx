import React from "react";
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}


const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: 'Bohdan' },
        { id: 2, name: 'Sveta' },
        { id: 3, name: 'Yura' },
        { id: 4, name: 'Mara' },
        { id: 5, name: 'Gron' },
        { id: 6, name: 'Tolik' }]


    let messagesData = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Buy' },
        { id: 3, message: 'how are you ' },
        { id: 4, message: 'kamasutra' }]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />

            
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
                <Message message={messagesData[3].message} />
            </div>
        </div>
    )
}

export default Dialogs;