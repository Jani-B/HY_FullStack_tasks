function Statistics(props) {
  const all = props.good + props.neutral + props.bad;
  const pointsGood = props.good * 1;
  const pointsBad = props.bad * -1;

  const average = (pointsGood + pointsBad) / all;

  const positive = (props.good / all) * 100;

  if (all > 0) {
    return (
      <>
        <h2>Statistics</h2>
        <p>Good: {props.good}</p>
        <p>Neutral: {props.neutral}</p>
        <p>Bad: {props.bad}</p>
        <p>All: {all}</p>
        <p>Average: {average}</p>
        <p>Positive: {positive}</p>
      </>
    );
  } else {
    return (
      <>
        <p>No feedback given</p>
      </>
    );
  }
}

export default Statistics;
