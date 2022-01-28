const Total = (props) => {
    const partExercises = props.partExercises;
    const sum = partExercises.reduce((partialSum, a) => partialSum + a.count, 0);
    return (
        <p>
            Number of exercises {sum}
        </p>
    )
}

export default Total;