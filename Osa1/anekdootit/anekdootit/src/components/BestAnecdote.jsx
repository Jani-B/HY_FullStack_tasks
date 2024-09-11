function BestAnecdotes(props) {
  return (
    <>
      <h1>Anecdote with most votes</h1>
      <p>{props.anecdotes[props.best]}</p>
    </>
  );
}

export default BestAnecdotes;
