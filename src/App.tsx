import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import LandingPage from "./components/LandingPage/LandingPage";
import ComponentDemos from "./components/ComponentDemos/ComponentDemos";

function App() {
  return (
    <div className="App">
      <Navigation />
      <LandingPage />
      <ComponentDemos />
    </div>
  );
}

export default App;
