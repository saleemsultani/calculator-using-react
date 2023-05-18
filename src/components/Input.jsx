import React from "react";
import "./Input.css";

function Input(props) {
  return (
    <input
      type="text"
      className="textInput"
      value={props.value}
      onChange={() => props.onChange()}
    />
  );
}

export { Input };
