import { useState } from "react";
import "./Accordian.css";
import Gist from "super-react-gist";

export default function Accordian() {
  const [accordionTabs, setAccordionTabs] = useState([
    { id: 1, contentId: 11, isOpen: false },
    { id: 2, contentId: 22, isOpen: false },
    { id: 3, contentId: 33, isOpen: false },
  ]);

  function handleOpenTab(num: number) {
    const array = [...accordionTabs];
    function closeAllTabs() {
      for (let i = 0; i < array.length; i++) {
        array[i].isOpen = false;
      }
    }
    if (array[num].isOpen) {
      closeAllTabs();
    } else {
      closeAllTabs();
      array[num].isOpen = true;
    }
    setAccordionTabs(array);
  }

  return (
    <div className="Accordian">
      <h1 className="Accordian__h1">Accordian</h1>
      <ul className="Accordian__wrapper">
        {accordionTabs.map((tab, index) => (
          <div className="Accordian__tab-wrapper" key={tab.id}>
            <div
              className="Accordian__tab"
              onClick={() => {
                handleOpenTab(index);
              }}
            >{`Tab ${tab.id}`}</div>
            <div
              className="Accordian__tab-content"
              style={{ display: tab.isOpen ? "block" : "none" }}
            >
              {tab.id}. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Sit amet purus gravida quis blandit turpis cursus. Leo duis ut
              diam quam nulla porttitor massa id.
            </div>
          </div>
        ))}
      </ul>
      <div className="Accordian__gist">
        <Gist url= "https://gist.github.com/arsheelsheikh/b42249291c2921e7c50870a68005c6b7" />
        <a
          className="Sandbox__link"
          href="https://codesandbox.io/s/accordian-wm48dd?file=/src/App.js"
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
