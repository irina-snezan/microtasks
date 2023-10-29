import {useState} from 'react';
import React from 'react';

type FruitsType = 'all'| 'apple'| 'orange'|'banana';


const Fruits = () => {
    const [fruits, setFruits] = useState([
        {fruit: "orange", color: 'orange', number: 3},
        {fruit: "apple", color: 'red', number: 2},
        {fruit: "apple", color: 'green', number: 1},
        {fruit: "orange", color: 'orange', number: 6},
        {fruit: "banana", color: 'yellow', number: 7},
        {fruit: "orange", color: 'green', number: 5},
        {fruit: "apple", color: 'red', number: 4},
        {fruit: "orange", color: 'orange', number: 2}
    ])

    const[filter, setFilter] = useState<FruitsType>('all')

let currentFruits = fruits;
    if (filter === 'apple') {
        currentFruits = fruits.filter((filteredFruits, index) => filteredFruits.fruit === 'apple')
    }
    if (filter === 'orange')
    {
        currentFruits = fruits.filter(filteredFruits => filteredFruits.fruit === 'orange')
    }
    if (filter === 'banana') {
        currentFruits = fruits.filter(filteredFruits => filteredFruits.fruit === 'banana')
    }


    const onclickHandler = (nameButton: FruitsType) => {
        setFilter(nameButton)
    }

    return (
        <div>
            <ul>
                {currentFruits.map((objFromFruitsArr, index) => {
                    return(
                        <li key={index}>
                            <span> {objFromFruitsArr.fruit} </span>
                            <span> {objFromFruitsArr.color} </span>
                            <span> {objFromFruitsArr.number} </span>
                        </li>
                    )
                })}
            </ul>
            <button onClick={()=>onclickHandler('all')}>all</button>
            <button onClick={()=>onclickHandler('apple')}>apple</button>
            <button onClick={()=>onclickHandler('orange')} >orange</button>
            <button onClick={()=>onclickHandler('banana')}>banana</button>
        </div>
    );
};

export default Fruits;

