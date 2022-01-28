const Total = (props) => {
    const parts = props.course.parts;
    const sum = parts.reduce((partialSum, a) => partialSum + a.exercises, 0);
    return (
        <p>
            Number of exercises {sum}
        </p>
    )
}

export default Total;