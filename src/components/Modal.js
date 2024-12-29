import React from "react";

export default function Modal({ isCorrect, turn, solution }) {
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>Correct!</h1>
          <p>You guessed the word in {turn} guesses</p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Game Over!</h1>
          <p>The word was "{solution}".</p>
        </div>
      )}
    </div>
  );
}
