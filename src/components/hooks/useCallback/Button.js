import React from "react";

const Button = ({ children = "default", onClick }) => {
  console.log(`${children}`);
  return <button onClick={onClick}>{children}</button>;
};

export default React.memo(Button);

export const MemoizedButton = React.memo(Button);
