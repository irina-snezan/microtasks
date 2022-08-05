import React from 'react';
import {FilterType} from './Money';

type NewComponentMoneyType = {
    money: Array<MoneyPropsType>
    currentMoney: Array<MoneyPropsType>
    onClickFilterHandler: (filter: FilterType) => void
}

type MoneyPropsType = {
    banknote: string
    nominal: number
    number: string
}
export const NewComponentMoney = (props: NewComponentMoneyType) => {


    return (
        <>
            <ul>
                {props.currentMoney.map((objFromMoneyArr: any, index: number) => {
                    return (
                        <li key={index}>
                            <span> {objFromMoneyArr.banknote}</span>
                            <span> {objFromMoneyArr.nominal}</span>
                            <span> {objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => props.onClickFilterHandler('all')}>all</button>
                <button onClick={() => props.onClickFilterHandler('ruble')}>rubles</button>
                <button onClick={() => props.onClickFilterHandler('dollar')}>dollars</button>
            </div>
        </>
    )
}
