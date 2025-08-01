import "./App.css";
import { useState, useEffect } from "react";
import Wordle from "./components/Wordle";
import logo from "./assets/logo.svg";

function App() {
  const [solution, setSolution] = useState("null");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch(
      process.env.NODE_ENV === "production"
        ? "/api/solutions"
        : "http://localhost:3001/solutions"
    )
      .then((res) => res.json())
      .then((json) => {
        const randomSolution = json[Math.floor(Math.random() * json.length)];
        setSolution(randomSolution.word);
      });
  }, [setSolution]);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="App">
      <div className="header">
        <img src={logo} alt="Wordle" className="logo" />
        <label className="switch">
          <input
            checked={darkMode}
            id="checkbox"
            type="checkbox"
            onChange={toggleDarkMode}
          />
          <span className="slider">
            <div className="star star_1"></div>
            <div className="star star_2"></div>
            <div className="star star_3"></div>
            <svg viewBox="0 0 16 16" className="cloud_1 cloud">
              <path
                transform="matrix(.77976 0 0 .78395-299.99-418.63)"
                fill="#fff"
                d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925"
              ></path>
            </svg>
          </span>
        </label>
      </div>
      <hr className="divider" />
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;
