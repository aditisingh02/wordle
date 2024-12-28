import { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([...Array(6)]);
  const [history, setHistory] = useState(["hello"]);
  const [isCorrect, setIsCorrect] = useState(false);

  //format the guess to color match
  const formatGuess = () => {
    let solutionArr = [...solution];
    let guessArr = [...currentGuess].map((letter) => {
      return { key: letter, color: "grey" };
    });

    //change colors
    guessArr.forEach((guess, index) => {
      if (solutionArr[index] === guess.key) {
        guessArr[index].color = "green";
        solutionArr[index] = null;
      }
    });

    guessArr.forEach((guess, index) => {
      if (solutionArr.includes(guess.key) && guess.color !== "green") {
        guessArr[index].color = "yellow";
        solutionArr[solutionArr.indexOf(guess.key)] = null;
      }
    });

    return guessArr;
  };
  //add new guess to guesses array
  const addNewGuess = (guessArr) => {
    if (currentGuess === solution) {
      setIsCorrect(true);
    }
    setGuesses((prevGuesses) => {
      let newGuesses = [...prevGuesses];
      newGuesses[turn] = guessArr;
      return newGuesses;
    });

    setHistory((prevhistory) => {
      return [...prevhistory, currentGuess];
    });

    setTurn((prevTurn) => {
      return prevTurn + 1;
    });
    setCurrentGuess("");
  };
  const handleKeyup = ({ key }) => {
    if (key === "Enter") {
      // Check if the turn is less than 5
      if (turn > 5) {
        console.log("you used all your guesses");
        return;
      }
      // do not allow duplicate guesses
      if (history.includes(currentGuess)) {
        console.log("you already tried that");
        return;
      }

      //check if length of currentGuess is 5
      if (currentGuess.length !== 5) {
        console.log("guess must be 5 letters long");
        return;
      }
      const formatted = formatGuess();
      console.log(formatted);
    }
    if (key === "Backspace") {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
      return;
    }
    if (/^[a-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + key;
        });
      }
    }
  };

  return {
    turn,
    currentGuess,
    guesses,
    isCorrect,
    handleKeyup,
  };
};

export default useWordle;
