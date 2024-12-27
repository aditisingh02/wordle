const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [history, setHistory] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const foramatGuess = () => {};

  const addNewGuess = () => {};

  const checkGuess = () => {};

  return {
    turn,
    currentGuess,
    guesses,
    isCorrect,
    checkGuess,
  };
};

export default useWordle;
