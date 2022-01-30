const Total = (props) => {
    const parts = props.course.parts;
    const sum = parts.reduce((partialSum, a) => partialSum + a.exercises, 0);
    return (
        <h2>
            total of {sum} exercises
        </h2>
    )
}

export default Total;