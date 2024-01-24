import "./ToolTip.css";
import Gist from "super-react-gist";

export default function ToolTip() {
  return (
    <div className="ToolTipComponent">
      <h1 className="ToolTip__h1">Tool Tip</h1>
      <div className="ToolTip__wrapper">
        Hover Me
        <div className="ToolTip">Tool Tip</div>
      </div>
      <div className="ToolTip__Gist">
        <Gist url="https://gist.github.com/arsheelsheikh/f1b76c31d296ea9ffd8736e9e416e8cf" />
        <a
          className="Sandbox__link"
          href="https://codesandbox.io/s/tool-tip-9ks7f5"
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
