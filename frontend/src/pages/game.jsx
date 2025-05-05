import React, { useState } from "react";

const choices = ["Rock", "Paper", "Scissors"];

const RockPaperScissors = () => {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  const playGame = (choice) => {
    const compChoice = choices[Math.floor(Math.random() * 3)];
    setPlayerChoice(choice);
    setComputerChoice(compChoice);

    if (choice === compChoice) {
      setResult("It's a draw!");
    } else if (
      (choice === "Rock" && compChoice === "Scissors") ||
      (choice === "Paper" && compChoice === "Rock") ||
      (choice === "Scissors" && compChoice === "Paper")
    ) {
      setResult("You win! 🎉");
    } else {
      setResult("You lose! 😢");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white shadow-md rounded-2xl text-center">
      <h2 className="text-2xl font-bold mb-4">✊🖐✌ Rock-Paper-Scissors</h2>
      <div className="flex justify-center gap-4 mb-4">
        {choices.map((choice) => (
          <button
            key={choice}
            onClick={() => playGame(choice)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            {choice}
          </button>
        ))}
      </div>
      {playerChoice && (
        <p className="text-lg">
          You: <strong>{playerChoice}</strong> | Computer: <strong>{computerChoice}</strong>
        </p>
      )}
      {result && <p className="mt-3 text-xl font-semibold">{result}</p>}
    </div>
  );
};

export default RockPaperScissors;
