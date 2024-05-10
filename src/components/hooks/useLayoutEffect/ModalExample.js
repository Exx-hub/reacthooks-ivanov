import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

function ModalExample() {
  const [show, setShow] = useState(false);
  const popupRef = useRef(null);
  const buttonRef = useRef(null);

  console.log(popupRef.current);

  useLayoutEffect(() => {
    if (popupRef.current === null || buttonRef.current === null) return;

    const { bottom } = buttonRef.current.getBoundingClientRect();

    popupRef.current.style.top = `${bottom + 25}px`;
  }, [show]);
  return (
    <>
      <button ref={buttonRef} onClick={() => setShow((prev) => !prev)}>
        Click here
      </button>
      {show && (
        <div style={{ position: "absolute", bottom: 0 }} ref={popupRef}>
          This is a popup
        </div>
      )}
    </>
  );
}

export default ModalExample;

// similar to useEffect but runs synchronously unlike useEffect that is asynchronous and runs after render
// use this if you want red layout and synchronously re-render
// or read side effect before painting. if youre basing your dom on side effect code
