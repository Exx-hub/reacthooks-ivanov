import React, { useCallback, useEffect, useState } from "react";

function GoodExample() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);
  const [num1] = useState(4);
  const [num2] = useState(5);

  const sum = useCallback(() => num1 + num2, [num1, num2]);
  // only create a new refence / instance of this function if num1 or num2 changes
  // if no useCallback, every time input changes and causes a re-render,
  // a new sum function instance is created, in turn triggers the useEffect to run because
  // sum is a new function on every render without useCallback

  // const sum = () => num1 + num2;

  //   const buildArray = () => [num1, num2]; // results in endless loop because a new array reference is created every render
  // unlike in sum, it returns a number or a primitive value, different for objects. it creates a new instance
  // in memoty on every render, thus triggering the endless loop on useEffect

  useEffect(() => {
    console.log(`new sum value: ${sum()}`);
    setResult(sum());
    // console.log(`new array: ${buildArray()}`);
    // setResult(buildArray());
  }, [sum]);
  console.log(typeof sum);
  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <h1>Output: {input || "--"}</h1>
    </>
  );
}

export default GoodExample;
