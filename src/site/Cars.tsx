type StudentsType = {
    id: number
    name: string
    age: number
}

type NewComponentType = {
    // students: StudentsType[]
    //or
    students: Array<StudentsType>
}

export const Cars = (props: NewComponentType) => {
    return (
        <div>

            {props.students.map((objectStudentsArray, index) => {
                    return (

                    )
                })}
        </div>
    )
}