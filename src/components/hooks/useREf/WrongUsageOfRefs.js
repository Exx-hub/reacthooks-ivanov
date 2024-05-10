import React, { useEffect, useRef } from "react";

function Test() {
  const counter = useRef(0);
  console.log(counter.current);
  // increase the counter by one
  const handleIncreaseCounter = () => {
    counter.current = counter.current + 1;
  };

  useEffect(() => {
    console.log("counter changed to: ", counter.current);
  }, [counter]);
  return (
    <div>
      <h1>Learn about useRef!</h1>
      <h2>Value: {counter.current}</h2>
      <button onClick={handleIncreaseCounter}>Increase counter</button>
    </div>
  );
}

export default Test;

// updates will not be displayed
// component will not render even is counter values increases
// useRef can store mutable value and persist but does not cause component to re-render
