import React, {useState} from 'react';

type Money2Type = {
    banknote: string
    nominal: number
    number: string
}

export function Money2() {
    const [money, setMoney] = useState([
        {banknote: 'euro', nominal: 100, number: ' a1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' z1234567890'},
        {banknote: 'euro', nominal: 100, number: ' w1234567890'},
        {banknote: 'dollar', nominal: 100, number: ' e1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' c1234567890'},
        {banknote: 'euro', nominal: 100, number: ' r1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' x1234567890'},
        {banknote: 'euro', nominal: 50, number: ' v1234567890'},
    ])
const[filter, setFilter] = useState('all')
    let currentMoney = money;
    if (filter === 'euro') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknote === "euro")
    } else if (filter=== 'dollar') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknote === "dollar")
    }
    const onClickFilterHandler = (nameButton: string) => {

setFilter(nameButton)

    }
    return (
        <>

        <ul>
            {currentMoney.map((m: any, index: number) => {
                return (
                    <li key={index}>
                        <span> {m.banknote}</span>
                        <span> {m.nominal}</span>
                        <span> {m.number}</span>
                    </li>
                )
            })}
        </ul>
            <div>
            <button onClick={() => onClickFilterHandler('all')}>all</button>
            <button onClick={() => onClickFilterHandler('euro')}>euro</button>
            <button onClick={() => onClickFilterHandler('dollar')}>dollar</button>
        </div>
</>
    )
}