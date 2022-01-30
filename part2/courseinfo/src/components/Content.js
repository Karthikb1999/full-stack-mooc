import Part from "./Part";

const Content = (props) => {
    const partExercises = props.course.parts;
    const partsCompArray = partExercises.map((part) =>
        <Part key={part.id} name={part.name} exercises={part.exercises}
        />)
    return (
        <div>
            {partsCompArray}
        </div>
    )
}

export default Content;
