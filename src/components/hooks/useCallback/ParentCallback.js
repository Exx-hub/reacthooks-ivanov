import React, { useCallback, useState } from "react";
import Button, { MemoizedButton } from "./Button";
import Count from "./Count";
import Title from "./Title";

function ParentCallback() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge((prev) => prev + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary((prev) => prev + 1000);
  }, [salary]);

  //   const MemoizedIncrementAge = useCallback(incrementAge, []);
  //   const MemoizedIncrementSalary = useCallback(incrementSalary, []);

  console.log("parent");

  return (
    <div>
      {/* <Title /> */}
      {/* <Count text="Age" count={age} /> */}
      {/* <Button onClick={MemoizedIncrementAge}>Increment Age</Button> */}
      {/* <Count text="Salary" count={salary} /> */}
      {/* <Button onClick={incrementSalary}>Increment Salary</Button> */}

      <Title />
      {/* <MemoizedButton>{age}</MemoizedButton> */}
      <Count text="Age" count={age} />
      <Button onClick={incrementAge}>Increment Age</Button>

      <Count text="Salary" count={salary} />

      <Button onClick={incrementSalary}>Increment Salary</Button>
      {/* <button onClick={() => setCount((c) => c + 1)}>increase count</button> */}
    </div>
  );
}

export default ParentCallback;
