import "./LandingPage.css";

export default function LandingPage() {
  return (
    <section className="LandingPage">
      <h1 className="Header" style={{ fontSize: "2rem", fontWeight: 700 }}>
        Simply
        <h1 className="Header-react">
          React <img
            className="React-Logo"
            src="/react.svg"
            alt="React logo"
          />
        </h1>
        Components.
      </h1>
      <div className="ScrollDown ">
        <p>Scroll Down</p>
        <img className="DownArrow" src="/arrow_down.svg" alt="down-arrow" />
      </div>
    </section>
  );
}
