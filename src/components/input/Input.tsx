import React, {useState} from 'react';

type InputType = {
    message: string

}


const Input = (props: InputType) => {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
        {message: 'message4'},
        {message: 'message5'}
    ])
    return (
        <div className={'input_style'}>
            <div>
                <input/>
                <button>+</button>
            </div>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}

                    </div>
                )
            })}

        </div>
    )
}
export default Input;
