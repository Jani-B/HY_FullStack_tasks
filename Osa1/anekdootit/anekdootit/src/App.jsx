import { useEffect, useState } from "react";
import Anecdotes from "./components/Anecdote";
import Button from "./components/Button";
import BestAnecdote from "./components/BestAnecdote";
import "./App.css";

function App() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
    "The only way to go fast, is to go well.",
  ];

  let votes = Array(anecdotes.length).fill(0); //this creates an array with 0 on all

  const [selected, setSelected] = useState(0);
  const [currentVote, setCurrentVote] = useState(votes); //we added the votes array to the first time to useState
  const [best, setBest] = useState(0);

  useEffect(() => {
    //useEffect to checn biggestIndex every time currentVote changes
    biggestIndex(currentVote);
  }, [currentVote]);

  //this is to get randomIndex to be used to select  random anecdote.
  const selectRandom = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    if (randomIndex !== selected) {
      //only if the random index is different than the current anecdote index
      setSelected(randomIndex);
    } else {
      //if it is same we run this function again
      selectRandom();
    }
  };
  //to add 1 on the correct anecdote vote number array
  const vote = () => {
    const voteCopy = [...currentVote];
    voteCopy[selected] += 1;
    setCurrentVote(voteCopy);
  };

  //this is used to get the index of the biggest number on the currentVote state
  const biggestIndex = (current) => {
    let max = current[0];
    let maxIndex = 0;

    for (let i = 1; i < current.length; i++) {
      if (current[i] > max) {
        maxIndex = i;
        max = current[i];
      }
    }
    setBest(maxIndex);
  };

  return (
    <>
      <div>
        <Anecdotes
          anecdotes={anecdotes}
          selected={selected}
          votes={currentVote}
        />
        <Button clickEvent={vote} text={"Vote"} />
        <Button clickEvent={selectRandom} text={"Get Next Anecdote"} />
      </div>
      <div>
        <BestAnecdote anecdotes={anecdotes} best={best} />
      </div>
    </>
  );
}

export default App;
