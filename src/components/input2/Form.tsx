import React, {useState} from 'react';
import Input from './Input';
import {Button} from './Button';
import style from './Form.module.css'
type FormType = {

}

export const Form = (props: FormType) => {
    let [message, setMessage] = useState([
        {message: 'text'},
        {message: 'text2'},
        {message: 'text3'}
    ])
    let [title, setTitle] = useState('');

    const addMessage = (title: string) => {
        let newMessage = {message: title};
        setMessage([newMessage, ...message])
    }

    const callbackButtonHandler = () => {
        addMessage(title);
        setTitle('')
    }

    return (
        <div >
            <div className={style.form}>
            <Input setTitle={setTitle} title={title}/>
            <Button name={'+'} callback={callbackButtonHandler}/>
            </div>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    )
}

