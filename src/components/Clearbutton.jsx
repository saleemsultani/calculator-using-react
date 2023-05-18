import React from "react";
import "./Clearbutton.css";

function Clearbutton(props) {
  return (
    <button className="clear" onClick={() => props.onClear()}>
      Clear
    </button>
  );
}

export default Clearbutton;
