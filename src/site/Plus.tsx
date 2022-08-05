import {useState} from 'react';

export const Plus = () => {
    let[a, setA] = useState(0);
    const onclickHandler = () => {
        setA(++a);
    }
    const onclickHandler2 = () => {
        a=1;
        setA(a);
    }


    return (
        <div style={{margin: '40px', fontSize: '30px', color:'green'}}>
            <h3>{a}</h3>
            <button onClick={onclickHandler}>number</button>
            <button onClick={onclickHandler2}>0</button>
        </div>
    )
 }