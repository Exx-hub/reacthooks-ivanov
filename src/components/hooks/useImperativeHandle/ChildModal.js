import React, { forwardRef, useImperativeHandle, useState } from "react";

function ChildModal(props, ref) {
  const [modalState, setModalState] = useState(false);

  useImperativeHandle(ref, () => ({
    openModal: () => setModalState(true),
  }));

  console.log("child rendered");
  console.log("B1");
  if (!modalState) return null;

  console.log("B2");
  console.log("b2");
  return (
    <div>
      <p>This is my modal</p>
      <button onClick={() => setModalState(false)}>Close</button>
    </div>
  );
}

export default forwardRef(ChildModal);
