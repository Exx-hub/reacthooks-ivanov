import React from "react";

const Count = React.memo(({ text, count }) => {
  console.log(`${text}`);
  return (
    <div>
      {text}: {count}
    </div>
  );
});

export default Count;
