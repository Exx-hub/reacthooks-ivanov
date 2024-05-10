import React, { useState, useReducer } from "react";
import produce from "immer";

const reducer = (state, action) => {
  switch (action.type) {
    case "handleChange":
      return {
        ...state,
        input: action.payload,
      };
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    case "colorChange":
      // used immer for this...creates a draft of the state and treats it as mutable
      // hence can update directly
      return produce(state, (stateDraft) => {
        stateDraft.color = !state.color;
      });
    default:
      return state;
  }
};

const ACTION = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  COLORCHANGE: "colorChange",
  HANDLECHANGE: "handleChange",
};

function ReducerCounter() {
  //   const [input, setInput] = useState("");
  //   const [count, setCount] = useState(0);
  //   const [color, setColor] = useState(false);

  const initialState = {
    input: "",
    count: 0,
    color: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { input, count, color } = state;

  console.log("ReducerCounter mounted/rendered");
  return (
    <div style={{ color: color ? "red" : "gray" }}>
      <input
        value={input}
        onChange={(e) =>
          dispatch({ type: ACTION.HANDLECHANGE, payload: e.target.value })
        }
      />

      <br />
      <br />
      <p>Count: {count}</p>

      <button onClick={() => dispatch({ type: ACTION.DECREMENT })}>-</button>
      <button onClick={() => dispatch({ type: ACTION.INCREMENT })}>+</button>
      <br />
      <button onClick={() => dispatch({ type: ACTION.COLORCHANGE })}>
        Color
      </button>

      <br />
      <h1>{input}</h1>
    </div>
  );
}

export default ReducerCounter;
