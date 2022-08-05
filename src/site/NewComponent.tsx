import React from 'react';
import {StudentsType} from '../App';


type NewComponentType = {
  students: Array<StudentsType>
}

export const NewComponent = (props: NewComponentType) => {

    return (
        <ul>
            {props.students.map((s, index) => {
                return (
                    <li key={s.id}>
                        <span>{s.name}</span>
                        <span>{s.age}</span>
                    </li>
                )
            })}
        </ul>
    )
}