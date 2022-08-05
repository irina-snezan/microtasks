import {useState} from 'react';


type HooksType = {}


export const Hooks = (props: HooksType) => {

    let [a, setA] = useState(1)
    const onclickHandler = () => {
        setA(++a);
        console.log(a);
    }


    const onclickHandler2 = () => {
        a = 0;
        setA(a);
        console.log(a);
    }

    return (
        <div style={{margin: '50px'}}>
            <h1>{a}</h1>
            <button onClick={onclickHandler}>number</button>
            <button onClick={onclickHandler2}>0</button>

        </div>

    )
}