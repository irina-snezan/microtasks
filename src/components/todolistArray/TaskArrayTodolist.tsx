import React, {useState} from 'react';
import {Todolist} from './Todolist';
import {v1} from 'uuid';
import classes from './TaskArrayTodolist.module.css';

export type TodolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}
export type FilterValuesType = 'all' | 'active' | 'completed';

function TaskArrayTodolist() {

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},
            {id: v1(), title: 'Rest API', isDone: false},
            {id: v1(), title: 'GraphQL', isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: 'HTML&CSS2', isDone: true},
            {id: v1(), title: 'JS2', isDone: true},
            {id: v1(), title: 'ReactJS2', isDone: false},
            {id: v1(), title: 'Rest API2', isDone: false},
            {id: v1(), title: 'GraphQL2', isDone: false},
        ]
    });

    function removeTask(todolistID: string, id: string) {
        setTasks({...tasks, [todolistID]: tasks[todolistID].filter(filtered => filtered.id != id)})
    }
function removeTodolist(todolistID: string){
        setTodolists(todolists.filter(el => el.id !== todolistID))
    delete tasks[todolistID]
}
    function addTask(todolistID: string, title: string) {
        let newTask = {id: v1(), title: title, isDone: false};
        setTasks({...tasks, [todolistID]: [newTask, ...tasks[todolistID]]});
    }

    function changeStatus(todolistID: string, taskId: string, isDone: boolean) {
        setTasks({...tasks, [todolistID]: tasks[todolistID].map(s => s.id === taskId ? {...s, isDone} : s)});
    }

    function changeFilter(todolistID: string, value: FilterValuesType) {
        setTodolists(todolists.map(filtered => filtered.id === todolistID ? {...filtered, filter: value} : filtered));
    }

    return (
        <div className={classes.todolist}>
            {todolists.map((t) => {
                let tasksForTodolist = tasks[t.id];
                if (t.filter === 'active') {
                    tasksForTodolist = tasks[t.id].filter(t => t.isDone === false);
                }
                if (t.filter === 'completed') {
                    tasksForTodolist = tasks[t.id].filter(t => t.isDone === true);
                }
                return <Todolist
                    key={t.id}
                    title={t.title}
                    todolistID={t.id}
                    tasks={tasksForTodolist}
                    removeTask={removeTask}
                    removeTodolist={removeTodolist}
                    changeFilter={changeFilter}
                    addTask={addTask}
                    changeTaskStatus={changeStatus}
                    filter={t.filter}
                />
            })}
        </div>
    );
}

export default TaskArrayTodolist;