import React from "react";

function Counter() {
  const [count, setCount] = React.useState(0);
  console.log("rerender");

  const id = React.useRef(null); // persist value across re-renders but will not trigger a re-render unlike useState

  const clear = () => {
    clearInterval(id.current);
  };

  React.useEffect(() => {
    id.current = window.setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return clear;
  }, []);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={clear}>STOP COUNT</button>
    </>
  );
}

export default Counter;
