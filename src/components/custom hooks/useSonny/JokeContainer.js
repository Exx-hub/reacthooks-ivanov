import { useState } from "react";
import useRandomJoke from "./useRandomJoke";

function JokeContainer() {
  const { joke, fetchJoke, input1, input2, setInput1, setInput2 } =
    useRandomJoke();
  return (
    <div>
      <h1>The Joke Generator</h1>
      <button onClick={fetchJoke}>Generate Joke</button>
      <h2>{joke}</h2>
      <input value={input1} onChange={(e) => setInput1(e.target.value)} />
      <input value={input2} onChange={(e) => setInput2(e.target.value)} />
    </div>
  );
}

export default JokeContainer;
