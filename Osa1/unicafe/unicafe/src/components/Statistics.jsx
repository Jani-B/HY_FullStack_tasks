import StatisticsLine from "./StatisticsLine";

function Statistics({ good, neutral, bad }) {
  const all = good + neutral + bad;
  const pointsGood = good * 1;
  const pointsBad = bad * -1;

  const averagecalc = (pointsGood + pointsBad) / all;
  const average = Math.round(averagecalc * 10) / 10;

  const positivecalc = (good / all) * 100;
  const positive = Math.round(positivecalc * 10) / 10;
  const positivePercent = ` ${positive} %`;

  if (all > 0) {
    return (
      <>
        <h2>Statistics</h2>
        <table>
          <StatisticsLine text="Good" value={good} />
          <StatisticsLine text="Neutral" value={neutral} />
          <StatisticsLine text="Bad" value={bad} />
          <StatisticsLine text="All" value={all} />
          <StatisticsLine text="Average" value={average} />
          <StatisticsLine text="Positive" value={positivePercent} />
        </table>
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
