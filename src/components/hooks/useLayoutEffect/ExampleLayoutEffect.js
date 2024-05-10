import React, { useEffect, useLayoutEffect, useState } from "react";

function ExampleLayoutEffect() {
  const [number, setNumber] = useState(0);
  const [sectionStyle, setSectionStyle] = useState({});

  // useEffect(() => {
  //   const random = Math.floor(Math.random() * 500);

  //   for (let i = 0; i <= 100000000; i++) {
  //     if (i === 100000000) {
  //       setSectionStyle({ paddingTop: `${random}px` });
  //     }
  //   }
  // }, [number]);

  useLayoutEffect(() => {
    const random = Math.floor(Math.random() * 500);

    for (let i = 0; i <= 100000000; i++) {
      if (i === 100000000) {
        setSectionStyle({ paddingTop: `${random}px` });
      }
    }
  }, [number]);

  return (
    <>
      <section style={sectionStyle}>
        <p>{number}</p>
      </section>

      <button
        onClick={() => setNumber((c) => c + Math.floor(Math.random() * 10))}
      >
        +
      </button>
      <button onClick={() => setNumber((c) => c - 1)}>-</button>
    </>
  );
}

export default ExampleLayoutEffect;

// useEffect is async - it will not delay paiting the DOM
// - correct and more performant 99% of the time. however there are times when you want to use useLayoutEffect
// useLayoutEffect is synchronous - and it will delay
// - it wants to run its code before painting the dom into the browser
// - if you want the code to run before it directly modifies the dom
