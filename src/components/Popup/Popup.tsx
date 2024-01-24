import "./Popup.css";
import { useState } from "react";
import Gist from "super-react-gist";

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  function handlePopup() {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }

  return (
    <div className="PopupComponent">
      <h1 className="Popup__h1">Pop Up</h1>
      <div className="Popup__wrapper">
        <button
          className="Popup__button"
          onClick={() => {
            if (!isOpen) {
              handlePopup();
            }
          }}
        >
          Click Me
          <div className="Popup" style={{ display: isOpen ? "flex" : "none" }}>
            <div className="Popup__card">
              <p>Hello World!</p>
              <button className="Popup__close-button" onClick={handlePopup}>
                Close
              </button>
            </div>
          </div>
        </button>
      </div>
      <div className="Popup__gist">
        <Gist url="https://gist.github.com/arsheelsheikh/fe2f45e6cdeb2a5a5a55f36201118824" />
        <a
          className="Sandbox__link"
          href=""
          target="_blank"
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
