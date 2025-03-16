import { useState } from "react";
import "./FlashCard.css";

function FlashCard({ data, guessSubmitted, setGuessSubmitted }) {
  const [flipped, setFlipped] = useState(false);
  const [userInput, setUserInput] = useState(""); 
  const [feedback, setFeedback] = useState(null); 

  const checkGuess = () => {
    if (userInput.trim().toLowerCase() === data.answer.toLowerCase()) {
      setFeedback("Correct!");
    } else {
      setFeedback("Incorrect");
    }
    setGuessSubmitted(true);
  };
  return (
    <div className="flashcard-container">
      <div 
        className={`flashcard ${flipped ? "flipped" : ""}`} 
        onClick={() => {
          if (guessSubmitted) setFlipped(!flipped);
        }}
      >
        <p>{flipped ? data.answer : data.question}</p>
      </div>

      <div className="input-section">
        <input
          type="text"
          placeholder="Take a guess"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          disabled={flipped}
        />
        <button onClick={checkGuess} disabled={flipped}>Submit Guess</button>
        {feedback && <p className="feedback">{feedback}</p>}
      </div>
    </div>
  );
}

export default FlashCard;
