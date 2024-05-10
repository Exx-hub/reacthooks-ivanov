import { useState } from "react";
import useCounter from "./useCounter";

const Counter = () => {
  const { count, decrement, increment } = useCounter();
  return (
    <div>
      <p>{count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
