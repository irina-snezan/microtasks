import React from 'react';
import classes from "./Button2.module.css"
import {callbackify} from 'util';

type Button2Type = {
    name: string;
    callback: () =>  void

}

export const Button2 = (props: Button2Type) => {

    const onClickHandler = () => {
        props.callback()
    }

        return (
            <div>
                <button className={classes.btn} onClick={(event) => onClickHandler}>{props.name}</button>
            </div>
        )

};
