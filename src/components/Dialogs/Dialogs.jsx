import React from "react";
import s from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/Dialogitem";


const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Bohdan'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Yura'},
        {id: 4, name: 'Mara'},
        {id: 5, name: 'Gron'},
        {id: 6, name: 'Tolik'}]

    let dialogsElements = dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);


    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Buy'},
        {id: 3, message: 'how are you '},
        {id: 4, message: 'kamasutra'}]

    let messagesElements = messages
        .map(message => <Message message={message.message} id={message.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;