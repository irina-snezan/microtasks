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
        ])


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
        </div>
    )
}

export default App;
