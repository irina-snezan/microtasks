import React from 'react';

type ButtonType = {
    name: string
    callBack: () => void
}


const Button = (props: ButtonType) => {

    const onClickHandler = () => {
        return props.callBack
    }
    return (
        <div>
            <button onClick={onClickHandler}>{props.name}</button>
        </div>
    )
}
export default Button;

