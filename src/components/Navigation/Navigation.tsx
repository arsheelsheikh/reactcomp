import "./Navigation.css";
import { useState } from "react";
import { Link } from "react-scroll";


export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="Navigation">
      <div className="Navigation__hamburger-menu-wrapper">
        <img
          className="Navigation__hamburger-icon"
          onClick={toggleMenu}
          src="/hamburger_menu_images/hamburger-menu.svg"
          alt="menu"
          style={{ visibility: isOpen ? "hidden" : "visible" }}
        />
        <div
          className="Navigation__menu"
          style={{
            width: isOpen ? "14rem" : "0rem",
            padding: isOpen ? "0.5rem 1rem 2rem 0.5rem" : "0rem",
            opacity: isOpen ? "100%" : "0%",
          }}
        >
          <div className="Navigation__menu-options">
            <img
              src="/hamburger_menu_images/close.svg"
              alt=""
              className="Navigation__close-icon"
              onClick={toggleMenu}
            />
            <Link
              className="Link"
              to="section1"
              smooth={true}
              duration={500}
              offset={-50}
            >
              Counter
            </Link>
            <Link
              className="Link"
              to="section2"
              smooth={true}
              duration={500}
              offset={-50}
            >
              Progress Bar
            </Link>
            <Link
              className="Link"
              to="section3"
              smooth={true}
              duration={500}
              offset={-50}
            >
              Image Carrousel
            </Link>
            <Link
              className="Link"
              to="section4"
              smooth={true}
              duration={500}
              offset={-50}
            >
              Accordian
            </Link>
            <Link
              className="Link"
              to="section5"
              smooth={true}
              duration={500}
              offset={-50}
            >
              Tool Tip
            </Link>
            <Link
              className="Link"
              to="section6"
              smooth={true}
              duration={500}
              offset={-50}
            >
              Pop Up
            </Link>
            <Link
              className="Link"
              to="section7"
              smooth={true}
              duration={500}
              offset={-50}
            >
              Dropdown
            </Link>
            <Link
              className="Link"
              to="section8"
              smooth={true}
              duration={500}
              offset={-50}
            >
              Tabs
            </Link>
            <Link
              className="Link"
              to="section9"
              smooth={true}
              duration={500}
              offset={-50}
            >
              Radio Buttons
            </Link>
            <Link
              className="Link"
              to="section10"
              smooth={true}
              duration={500}
              offset={-50}
            >
              Toggle Switch
            </Link>
            <Link
              className="Link"
              to="section11"
              smooth={true}
              duration={500}
              offset={-50}
            >
              Input Validation
            </Link>
          </div>
          <div className="Navigation__social-wrapper">
            <a
              target="_blank"
              href="https://github.com/arsheelsheikh"
              className="Navigation__social-link" rel="noreferrer"
            >
              <img
                className="Navigation__social-icon"
                src="/github.svg"
                alt="github"
              />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/arsheelsheikh/"
              className="Navigation__social-link" rel="noreferrer"
            >
              <img
                className="Navigation__social-icon"
                src="/linkedin.svg"
                alt="linkedin"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
