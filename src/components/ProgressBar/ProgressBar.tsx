import { useState } from "react";
import "./ProgressBar.css";
import Gist from "super-react-gist";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  function incrementProgressBar() {
    if (progress < 100) {
      setProgress(progress + 10);
    }
  }

  function resetProgress() {
    setProgress(0);
  }

  return (
    <div className="ProgressBar">
      <h1 className="ProgressBar__h1">Progress Bar</h1>
      <div className="ProgressBar__wrapper">
        <div className="ProgressBar__background">
          <div
            className="ProgressBar__indicator"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div>{`${progress}%`}</div>
        <button
          className="ProgressBar__incrementor"
          onClick={incrementProgressBar}
        >
          Add 10%
        </button>
        <button className="ProgressBar__reset" onClick={resetProgress}>
          Reset
        </button>
      </div>
      <div className="ProgressBar__gist">
        <Gist url="https://gist.github.com/arsheelsheikh/9b31ded005fa63149db4d2774612de8b" />
        <a
          className="Sandbox__link"
          href="https://codesandbox.io/s/progress-bar-ftgz8x?file=/src/styles.css"
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
