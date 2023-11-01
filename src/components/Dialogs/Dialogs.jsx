import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";




const Dialogs = () => {
        let dialogs = [
            {id: 1, name: 'Ivan'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'},
        ]

        let messages = [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'How are u?'},
            {id: 5, message: 'Im good'},
            {id: 6, message: 'Are u?'},
        ]

        let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
        let messagesElements = messages.map(m => <Message message={m.message}/>);

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