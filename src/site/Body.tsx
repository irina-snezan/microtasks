type BodyType = {
    titleFORBody: string
}
export const Body = (props: BodyType) => {
    return (
        <div>
            {props.titleFORBody}
        </div>
    )
}