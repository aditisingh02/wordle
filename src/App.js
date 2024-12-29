import { use } from "react";
import "./App.css";
import { useState, useEffect } from "react";
import Wordle from "./components/Wordle";
import logo from "./assets/wordle.png";
function App() {
  const [solution, setSolution] = useState("null");
  useEffect(() => {
    fetch("http://localhost:3001/solutions")
      .then((res) => res.json())
      .then((json) => {
        const randomSolution = json[Math.floor(Math.random() * json.length)];
        setSolution(randomSolution.word);
      });
  }, [setSolution]);
  return (
    <div className="App">
      <h2>
        <img src={logo} alt="Wordle" className="logo" />
        <hr className="divider" />
      </h2>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;
