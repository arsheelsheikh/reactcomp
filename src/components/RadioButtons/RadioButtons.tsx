import { useState } from "react";
import "./RadioButtons.css";
import Gist from "super-react-gist";

export default function RadioButtons() {
  const [radioButtons, setRadioButtons] = useState([
    { id: 1, isOn: false },
    { id: 2, isOn: false },
    { id: 3, isOn: false },
  ]);

  function handleSelection(num: number) {
    const array = [...radioButtons];
    function resetButtons() {
      for (let i = 0; i < array.length; i++) {
        array[i].isOn = false;
      }
    }
    resetButtons();
    array[num].isOn = true;
    setRadioButtons(array);
  }

  return (
    <div className="RadioButtonsComponent">
      <h1 className="RadioButtons__h1">Radio Buttons</h1>
      <p>Click a button</p>
      <div className="RadioButtons-wrapper">
        {radioButtons.map((button, index) => (
          <div
            className="RadioButton"
            onClick={() => {
              handleSelection(index);
            }}
            key={button.id}
            style={{
              backgroundColor: button.isOn
                ? "rgb(4, 170, 109)"
                : "rgb(75,75,75)",
            }}
          >
            {button.id}
          </div>
        ))}
      </div>
      <div className="RadioButtons__gist">
        <Gist url="https://gist.github.com/arsheelsheikh/1e1eb6402c018cdf661b070af8162887" />
        <a
          className="Sandbox__link"
          href="https://codesandbox.io/s/radio-buttons-4t6zyp?file=/src/styles.css"
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
