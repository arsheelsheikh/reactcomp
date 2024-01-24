import { useState } from "react";
import "./Toggle Switch.css";
import Gist from "super-react-gist";

export default function ToggleSwitch() {
  const [isClicked, setIsClicked] = useState(false);
  function handleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <div className="ToggleSwitch__wrapper">
      <h1 className="ToggleSwitch__h1">Toggle Switch</h1>
      <div
        className="ToggleSwitch__background"
        onClick={handleClick}
        style={{ background: isClicked ? "#04aa6d" : "" }}
      >
        <div
          className={`ToggleSwitch__handle ${isClicked ? "clicked" : ""}`}
        ></div>
      </div>
      <div className="ToggleSwitch__gist">
        <Gist url="https://gist.github.com/arsheelsheikh/28d7f6ed8e2f55d5ed7c3f4d49652d3d" />
        <a
          className="Sandbox__link"
          href="https://codesandbox.io/s/toogle-switch-4ysckd"
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
