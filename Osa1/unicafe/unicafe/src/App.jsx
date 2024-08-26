import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
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
    </>
  );
}

export default App;
