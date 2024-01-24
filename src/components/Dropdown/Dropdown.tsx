import "./Dropdown.css";
import Gist from "super-react-gist";

export default function Dropdown() {
  return (
    <div className="Dropdown">
      <h1 className="Dropdown__h1">Dropdown</h1>
      <div className="Dropdown__wrapper">
        Hover me
        <ul className="Dropdown__options">
          <li className="Dropdown__option">Option 1</li>
          <li className="Dropdown__option">Option 2</li>
          <li className="Dropdown__option">Option 3</li>
          <li className="Dropdown__option">Option 4</li>
        </ul>
      </div>
      <div className="Dropdown__gist">
        <Gist url="https://gist.github.com/arsheelsheikh/10e33a49b04b150764967b11a3a8a3c1" />
        <a
          className="Sandbox__link"
          href="https://codesandbox.io/s/dropdown-hr3mdf"
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