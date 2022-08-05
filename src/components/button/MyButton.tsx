import React from 'react';

type MyButtonType = {
    name: string
    callBack: () => void
}


export const MyButton = (props: MyButtonType) => {
    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <div>
            <button onClick={onClickHandler}>{props.name}</button>
        </div>
    )
}