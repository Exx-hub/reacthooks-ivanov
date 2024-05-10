import React, { useRef } from "react";
import ChildModal from "./ChildModal";

function ParentModal() {
  const modalRef = useRef();

  console.log(modalRef.current);
  console.log("A1");
  const handleOpenModal = () => {
    console.log("inside handleOpenModal");

    modalRef.current.openModal();
  };

  console.log("parent rendered/mounted");
  console.log("A2");
  return (
    <div>
      <p>Parent Modal Component</p>
      <ChildModal ref={modalRef} />
      <button onClick={handleOpenModal}>Open</button>
    </div>
  );
}

export default ParentModal;
