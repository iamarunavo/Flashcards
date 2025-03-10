import { useState } from "react";
import FlashCard from "./FlashCard.jsx";
import "./App.css";

const cardSet = {
  title: "Computer Science Trivia",
  description: "Test your knowledge with these CS questions!",
  questions: [
    { question: "What does CPU stand for?", answer: "Central Processing Unit" },
    { question: "What is the time complexity of binary search?", answer: "O(log n)" },
    { question: "Which data structure uses LIFO?", answer: "Stack" },
    { question: "What does HTTP stand for?", answer: "Hypertext Transfer Protocol" },
    { question: "Who created Linux?", answer: "Linus Torvalds" },
  ],
};

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getNextCard = () => {
    setCurrentIndex(Math.floor(Math.random() * cardSet.questions.length));
  };

  return (
    <div className="app">
      <h1>{cardSet.title}</h1>
      <p>{cardSet.description}</p>
      <p>Total Cards: {cardSet.questions.length}</p>
      <FlashCard data={cardSet.questions[currentIndex]} />
      <button onClick={getNextCard}>Next Question</button>
    </div>
  );
}

export default App;
