function Statistics(props) {
  return (
    <>
      <h2>Statistics</h2>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>bad: {props.bad}</p>
    </>
  );
}

export default Statistics;
