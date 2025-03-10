import { useState } from "react";
import "./FlashCard.css";

function FlashCard({ data }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flashcard" onClick={() => setFlipped(!flipped)}>
      <p>{flipped ? data.answer : data.question}</p>
    </div>
  );
}

export default FlashCard;
