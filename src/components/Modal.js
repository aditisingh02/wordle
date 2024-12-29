import React from "react";

export default function Modal({ isCorrect, turn, solution }) {
  return (
    <div className="modal">
      <div className="modal-content">
        {isCorrect && (
          <div>
            <h1 className="success">Correct</h1>
            <p>
              You found the word in {turn} {turn === 1 ? "try" : "tries"}
            </p>
            <p className="solution">
              Solution: <strong>{solution}</strong>
            </p>
          </div>
        )}
        {!isCorrect && (
          <div>
            <h1 className="failure">Game Over</h1>
            <p>Better luck next time!</p>
            <p className="solution">
              The word was: <strong>{solution}</strong>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
