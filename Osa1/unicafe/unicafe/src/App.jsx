import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Statistics from "./components/Statistics";

function App() {
  const [good, setGood] = useState(2);
  const [neutral, setNeutral] = useState(3);
  const [bad, setBad] = useState(5);

  const setFeedback = (feedback) => {
    if (feedback === "good") {
      setGood(good + 1);
    } else if (feedback === "neutral") {
      setNeutral(neutral + 1);
    } else {
      setBad(bad + 1);
    }
  };

  return (
    <>
      <div>
        <h1>give feedback</h1>
      </div>
      <div>
        <Button feedback={"good"} giveFeedback={() => setFeedback("good")} />
        <Button
          feedback={"neutral"}
          giveFeedback={() => setFeedback("neutral")}
        />
        <Button feedback={"bad"} giveFeedback={() => setFeedback("bad")} />
      </div>
      <div>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </>
  );
}

export default App;
