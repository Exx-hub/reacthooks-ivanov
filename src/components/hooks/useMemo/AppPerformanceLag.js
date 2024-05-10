import React, { useCallback, useEffect, useMemo, useState } from "react";

const getArray = () => {
  for (let i = 0; i < 1000000000; i++) {}

  return ["alvin", "acosta"];
};

function AppPerformanceLag() {
  const [userNumber, setUserNumber] = useState("");
  const [randomInput, setRandomInput] = useState("");

  const fib = useCallback((n) => {
    for (let i = 0; i < 1000000000; i++) {}
    return n;
  }, []);

  // initially fib as placed outside component, so useCallback was not needed since fib function is not re-initialized
  // on every render.
  // but if you place fib inside, a new fib instance is created on every re-render, triggering useMemo to recalculate
  // so useCallback is used to cache the function as well

  const fibNum = useMemo(() => fib(userNumber), [userNumber, fib]);
  // fibNum returns a value. value returned from fib function.
  // on every render of the component, new reference is created and fib function is called
  // repeating expensive calculation on every render, causing component to render slowly
  // even if fibNumber is not being used or not being updated
  // totally unrelated to every render, but on every render it is being re-calculated
  // natural flow of the component.
  // when number input is changed, userNumber state is updated, that is the only time
  // fibNum should be recomputed since it dependes on userNumber value

  // take note that since fibNum returns a number, a primitive value, on every render, fibNum is recalculated
  // and gets the primitive value result. so if you have useEffect using fibNum as dependency,
  // it will not re-run the useEffect since react detects that it is the same primitive value from before

  // example of non-primitive values

  //   const myArray = getArray();

  // this example will run useEffect every time since it returns a non-primitive value which is an array
  // unlike in fibnum that just returns a number, so it doesnt re-run useEffect on every render

  const myArray = useMemo(() => getArray(), []);

  useEffect(() => {
    console.log("effect ran");
    console.log(myArray);
  }, [myArray]);
  // useEffect will not run but the expensive calculation was already re-calculated
  // unlike in useCallback examples for example, have the same useEffect will be re-run because it returns a function
  // and has a different reference in memory

  //   const fibNum = fib(userNumber);

  return (
    <div>
      <h1>Number Sequence:</h1>
      <input
        placeholder="user number"
        type="number"
        value={userNumber}
        onChange={(e) => setUserNumber(e.target.value)}
      />
      <p>{fibNum || "--"}</p>

      <input
        placeholder="random input"
        type="text"
        value={randomInput}
        onChange={(e) => setRandomInput(e.target.value)}
      />
    </div>
  );
}

export default AppPerformanceLag;
