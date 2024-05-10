import React, { useState, useRef } from "react";

function HiteshRef() {
  const [myNum, setMyNum] = useState(0);
  console.log("re-render");

  const inputOne = useRef();
  const inputTwo = useRef();

  //   console.log(inputOne);

  const getNumBox = () => {
    console.log("hello");
    inputOne.current.style.width = "400px";
    console.log(inputOne);
  };

  const getTextBox = () => {
    console.log("world");
    console.log(inputTwo.current);
  };

  return (
    <>
      <h2>Learncodeonline</h2>
      <input
        value={myNum}
        onChange={(e) => setMyNum(e.target.value)}
        type="number"
        ref={inputOne}
        style={{ width: "100px" }}
      />
      <input
        value={myNum}
        onChange={(e) => setMyNum(e.target.value)}
        type="text"
        ref={inputTwo}
      />
      <h3>Value is {myNum}</h3>

      <button onClick={getNumBox}>NUMBOX</button>
      <button onClick={getTextBox}>TEXTBOX</button>
    </>
  );
}

export default HiteshRef;
