import Part from "./Part";

const Content = (props) => {
    const partExercises = props.course.parts;
    const partsCompArray = partExercises.map((part, index) =>
        <Part key={index} name={part.name} exercises={part.exercises}
        />)
    return (
        <div>
            {partsCompArray}
        </div>
    )
}

export default Content;
