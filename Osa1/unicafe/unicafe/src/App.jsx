import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <div>
        <h1>give feedback</h1>
      </div>
      <div>
        <Button feedback={"good"} />
        <Button feedback={"neutral"} />
        <Button feedback={"bad"} />
      </div>
      <div>
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
      </div>
    </>
  );
}

export default App;
