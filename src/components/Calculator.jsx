import React, { useState } from "react";
import Sound from "./sound.wav";
import "./Calculator.css";
import Button from "./Button.jsx";
import Clearbutton from "./Clearbutton.jsx";
import { Input } from "./Input.jsx";

function Calculator() {
  const [exp, setExp] = useState("");

  function handleChange(event) {
    setExp(event.target.value);
  }

  let audio = new Audio(Sound);

  function handleExp(value) {
    audio.play();
    setExp((prevValue) => {
      if (prevValue === "Error") return prevValue;
      return prevValue.concat(value);
    });
  }

  function isValidExpression(str) {
    str = str.split("");
    const firstChar = str[0];
    // whether first character of string is * or /
    if (firstChar === "*" || firstChar === "/") return false;
    let flag = true;
    let prevChar;
    let currChar;

    // this loop checks whether there are concecutive operators used
    for (let i = 1; i < str.length; i++) {
      prevChar = str[i - 1];
      currChar = str[i];

      if (isNaN(prevChar) && isNaN(currChar)) {
        flag = false;
        break;
      }
    }
    // check whether last character in string is operator
    if (isNaN(currChar)) flag = false;

    return flag;
  }

  function calculate() {
    audio.play();
    // if = is pressed again after evaluating expression will return without doing anything
    if (exp.length === 1) return;
    if (isValidExpression(exp)) setExp(eval(exp).toString());
    else setExp("Error");
  }

  function clear() {
    audio.play();
    setExp("");
  }

  console.log(exp);
  return (
    <div className="Container">
      <Input value={exp} onChange={handleChange} />
      <div className="row">
        <Button value="7" onClick={handleExp} />
        <Button onClick={handleExp} value="8" />
        <Button onClick={handleExp} value="9" />
        <Button onClick={handleExp} value="/" />
      </div>
      <div className="row">
        <Button onClick={handleExp} value="4" />
        <Button onClick={handleExp} value="5" />
        <Button onClick={handleExp} value="6" />
        <Button onClick={handleExp} value="*" />
      </div>
      <div className="row">
        <Button onClick={handleExp} value="1" />
        <Button onClick={handleExp} value="2" />
        <Button onClick={handleExp} value="3" />
        <Button onClick={handleExp} value="+" />
      </div>
      <div className="row">
        <Button onClick={handleExp} value="." />
        <Button onClick={handleExp} value="0" />
        <Button onClick={calculate} value="=" />
        <Button onClick={handleExp} value="-" />
      </div>
      <Clearbutton onClear={clear} />
    </div>
  );
}

export default Calculator;
