type CarType = {
    id: number
    manufacturer: string
    model: string
}

type TopCarsType = {
    cars: Array<CarType>
}


export const TopCars = (props: TopCarsType) => {

    return (
        <div>

            {props.cars.map((cars, index) => {

                return (
                    <table key={index}>
                        <tr>
                            <th>n/n</th>
                            <th>{cars.id}</th>
                        </tr>
                        <tr>
                            <td>Manufacturer</td>
                            <td>{cars.manufacturer}</td>
                        </tr>
                        <tr>
                            <td>Model</td>
                            <td>{cars.model}</td>
                        </tr>
                    </table>
                )
            })}
        </div>

    )
}