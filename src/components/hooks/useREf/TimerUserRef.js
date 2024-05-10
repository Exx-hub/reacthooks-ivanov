import React, { useEffect, useRef, useState } from "react";

function TimerUseRef() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const renderCount = useRef(0);
  const timerId = useRef();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  console.log("rendered the TimerUserRefComponent");

  const startTimer = () => {
    timerId.current = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerId.current);
    timerId.current = 0;
  };

  const reset = () => {
    stopTimer();
    setCount(0);
  };

  useEffect(() => {
    renderCount.current++;
  }, [count, input]);

  return (
    <div>
      <input placeholder="Random input" value={input} onChange={handleChange} />

      <h2>Renders: {renderCount.current}</h2>

      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={reset}>Reset</button>
      </div>

      <h2>Seconds: {count}</h2>

      <h1>{input}</h1>
    </div>
  );
}

export default TimerUseRef;
