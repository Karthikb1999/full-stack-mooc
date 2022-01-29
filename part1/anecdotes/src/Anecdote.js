const Anecdote = ({ anecdotes, votes, selected }) => {
    return (
        <div>
            <div>{anecdotes[selected]}</div>
            <div>has {votes[selected]} votes</div>
        </div>
    )
}

export default Anecdote;