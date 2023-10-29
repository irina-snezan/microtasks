import React, {useState} from 'react';
import './App.css';
import Button from './components/button/Button';
import {Money} from './site/Money';
import {Hooks} from './site/Hooks';
import Input from './components/input/Input';
import {Plus} from './site/Plus';
import {NewComponent} from './site/NewComponent';
import {Money2} from './site/Money2';
import TaskArrayTodolist from './components/todolistArray/TaskArrayTodolist';
import {Form} from './components/input2/Form';
import {Button2} from './components/Button2/Button2';
import Fruits from './components/Fruits/Fruirs';

export  type StudentsType = {
    id: number
    name: string
    age: number
}

function App() {

    let [students, setStudents] = useState(
        [
            {id: 1, name: 'James', age: 8},
            {id: 2, name: 'Robert', age: 18},
            {id: 3, name: 'John', age: 28},
            {id: 4, name: 'Michael', age: 38},
            {id: 5, name: 'William', age: 48},
            {id: 6, name: 'David', age: 58},
            {id: 7, name: 'Richard', age: 68},
            {id: 8, name: 'Joseph', age: 78},
            {id: 9, name: 'Thomas', age: 88},
            {id: 10, name: 'Charles', age: 98},
            {id: 11, name: 'Christopher', age: 100},
        ]);

    const button1Foo = (subscriber: string) => {
        console.log(subscriber)
    };
        const  button2Foo = (subscriber2: string) => {
            console.log(subscriber2)
        };
    const  button3Foo = (subscriber3: string) => {
        console.log(subscriber3)
    };
    return (
        <div>
            <h2>Input</h2>
            <Input message={'message'}/>
            <h2>Input2</h2>
            <Form/>
            <h2>Counter</h2>
            <Hooks/>
            <h2>Filtering money</h2>
            <Money/>
            <NewComponent students={students}/>
            <h2>Button</h2>
            <Button />
            <h2>Counter2</h2>
            <Plus/>
            <h2>Filtering money</h2>
            <Money2/>
            <h2>Associative array</h2>
            <TaskArrayTodolist/>
            <Button2 name={'цісні'} callback={() =>  button1Foo('вітаю, дружа!')}/>
            <Button2 name={'цісні'} callback={() =>  button2Foo('вітаю')}/>
            <Button2 name={'Stupid button'} callback={() =>  button3Foo('I am stupid button')}/>
            <h2>Fruits filter</h2>
            <Fruits/>
        </div>
    )
}

export default App;
