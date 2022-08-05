import React, {useState} from 'react';
import {NewComponentMoney} from './NewComponentMoney';


export type FilterType = 'all' | 'dollar' | 'ruble';

export function Money() {
    const [money, setMoney] = useState([
        {banknote: 'dollar', nominal: 100, number: ' a1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' z1234567890'},
        {banknote: 'ruble', nominal: 100, number: ' w1234567890'},
        {banknote: 'dollar', nominal: 100, number: ' e1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' c1234567890'},
        {banknote: 'ruble', nominal: 100, number: ' r1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' x1234567890'},
        {banknote: 'ruble', nominal: 50, number: ' v1234567890'},
    ])
    const [filter, setFilter] = useState<FilterType>('all')

    let currentMoney = money;
    if (filter === 'ruble') {
        currentMoney = money.filter((filteredMoney, index) => filteredMoney.banknote === 'ruble')
    }
    if (filter === 'dollar') {
        currentMoney = money.filter((filteredMoney, index) => filteredMoney.banknote === 'dollar')
    }

    const onClickFilterHandler = (nameButton: any) => {
        setFilter(nameButton);
    }

    return (
        <div>
            <NewComponentMoney
                money={money}
                currentMoney={currentMoney}
                onClickFilterHandler={onClickFilterHandler}
            />
        </div>

    )

}



