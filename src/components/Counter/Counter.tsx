import { useState } from "react";
import "./Counter.css";
import Gist from "super-react-gist";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  function handleIncrementPlus() {
    setCounter(counter + 1);
  }

  function handleIncrementMinus() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <div className="Counter">
      <h1 className="Counter__h1">Counter</h1>
      <div className="Counter__wrapper">
        <button className="Counter__button" onClick={handleIncrementMinus}>
          -
        </button>
        <div>{counter}</div>
        <button className="Counter__button" onClick={handleIncrementPlus}>
          +
        </button>
      </div>

      <div className="Counter__gist">
        <Gist url="https://gist.github.com/arsheelsheikh/59f5386607077916aea80d245044f89f" />
        <a
          className="Sandbox__link"
          href="https://codesandbox.io/s/counter-stdwhk?file=/src/App.js"
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
