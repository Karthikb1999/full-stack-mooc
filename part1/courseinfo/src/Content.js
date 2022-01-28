import Part from "./Part";

const Content = (props) => {
    const partExercises = props.partExercises;
    const partsCompArray = partExercises.map((partExercise, index) =>
        <Part key={index} part={partExercise.part} count={partExercise.count}
        />)
    return (
        <div>
            {partsCompArray}
        </div>
    )
}

export default Content;
