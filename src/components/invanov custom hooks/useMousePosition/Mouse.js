import React from "react";
import { useMousePosition } from "./useMousePosition";

function Mouse() {
  const position = useMousePosition();
  return (
    <div>
      {position.x}:{position.y}
    </div>
  );
}

export default Mouse;
