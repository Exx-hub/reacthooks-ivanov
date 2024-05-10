import React from "react";

const Title = () => {
  console.log("Title");
  return <div>useCallback Hook</div>;
};

export default React.memo(Title);
