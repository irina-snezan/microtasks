import React, {ChangeEvent, useState} from 'react';

type InputType = {
    title: string
    setTitle: (title: string) => void
}

const Input = (props: InputType) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }

    return (
        <div>
            <input value={props.title} onChange={onChangeInputHandler}/>
        </div>
    )
}
export default Input;
