import React from "react";
import s from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/Dialogitem";


const Dialogs = (props) => {


    let dialogsElements = props.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);


    // let messages = [
    //     {id: 1, message: 'Hi'},
    //     {id: 2, message: 'Buy'},
    //     {id: 3, message: 'how are you '},
    //     {id: 4, message: 'kamasutra'}]

    let messagesElements = props.messages
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