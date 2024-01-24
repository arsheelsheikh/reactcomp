import "./InputValidation.css";
import { useState } from "react";
import Gist from "super-react-gist";

export default function InputValidation() {
  const [inputValue, setInputValue] = useState("");

  const [result, setResult] = useState("");

  const [textColor, setTextColor] = useState(true);

  const [showResult, setShowResult] = useState(false);

  function handleValidation(str: string) {
    const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const isMatch = regex.test(str);
    if (isMatch) {
      setResult("Valid Input");
      setTextColor(true);
      setShowResult(true);
    } else {
      setResult("Error: Invalid Input");
      setTextColor(false);
      setShowResult(true);
    }
  }

  return (
    <div className="InputValidation">
      <h1 className="InputValidation__h1">Input Validation</h1>
      <div className="InputValidation__wrapper">
        <input
          className="InputValidation__input"
          type="text"
          name="input"
          id="email"
          placeholder="Enter Email Address"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
            console.log(inputValue);
          }}
        />
        <button
          className="InputValidation__submit"
          onClick={() => {
            handleValidation(inputValue);
          }}
        >
          Submit
        </button>
      </div>
      <p
        className="InputValidation__result"
        style={{
          background: textColor ? "rgb(4, 170, 109)" : "red",
          display: showResult ? "block" : "none",
        }}
      >
        {result}
      </p>
      <div className="InputValidation__gist">
        <Gist url="https://gist.github.com/arsheelsheikh/74685f730e607ee05c4cc5d6ae4f5e27" />
        <a
          className="Sandbox__link"
          href="https://codesandbox.io/s/input-validation-r9rdrl?file=/src/App.js"
          target="_blank" rel="noreferrer"
        >
          Test on CodeSandbox
          <img
            className="Sandbox__icon"
            src="/codesandbox.svg"
            alt="codesandbox-logo"
          />
        </a>
      </div>
    </div>
  );
}
