function Anecdotes(props) {
  return (
    <>
      <h1>Random Anecdotes</h1>
      <p>{props.anecdotes[props.selected]}</p>
      <p>This anecdote has: {props.votes[props.selected]} votes</p>
    </>
  );
}

export default Anecdotes;
