import React from "react";
import "./Button.css";
function Button(props) {
  let isNum = !isNaN(props.value) || props.value === "=" || props.value === ".";

  return (
    <button
      onClick={() => {
        props.onClick(props.value);
      }}
      className={isNum ? "button" : "operator"}
    >
      {props.value}
    </button>
  );
}
export default Button;
