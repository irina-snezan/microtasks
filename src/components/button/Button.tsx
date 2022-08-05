import React from 'react';
import {MyButton} from './MyButton';
import styles from './button.module.css'

type ButtonType = {

}

const Button = (props: ButtonType) => {

    const Button1Foo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }
    const Button2Foo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }
    const Button3Foo = () => {
        console.log('I am stupid button')
    }

    return (
        <div className={styles.button}>
            <MyButton name={'MyYoutubeChanel-1'} callBack={() => Button1Foo('Hello! I am IVAN', 23)}/>
            <MyButton name={'MyYoutubeChanel-2'} callBack={() => Button2Foo('Hello! I am Ira', 38)}/>
            <MyButton name={'Stupid button'} callBack={Button3Foo}/>
        </div>
    )
}
export default Button;

