import React, { useState } from "react";
import "./App.css";

const App = () => {
  const questions = [
    {
      questionText: "What a capital of USA ?",
      answerOptions: [
        { answerText: "Boston", isCorrect: false },
        { answerText: "Washington", isCorrect: true },
        { answerText: "New-york", isCorrect: false },
        { answerText: "Los-Angeles", isCorrect: false },
      ],
    },
    {
      questionText: "What is not a programming language?",
      answerOptions: [
        { answerText: "Go", isCorrect: false },
        { answerText: "HTML", isCorrect: true },
        { answerText: "Java-script", isCorrect: false },
        { answerText: "Python", isCorrect: false },
      ],
    },
    {
      questionText: "Which company developed React?",
      answerOptions: [
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Mail", isCorrect: false },
        { answerText: "Facebook", isCorrect: true },
        { answerText: "Google", isCorrect: false },
      ],
    },
    {
      questionText: "What does not apply to the universe Marvel?",
      answerOptions: [
        { answerText: "Batman", isCorrect: true },
        { answerText: "Hulk", isCorrect: false },
        { answerText: "Iron-Man", isCorrect: false },
        { answerText: "Avengers", isCorrect: false },
      ],
    },
  ];
  const [currentQuestions, setCurrentQuestions] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestions + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestions(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="section-score">
          <div>
            The right answer {score} from {questions.length}
          </div>
          <button className="refresh-btn">Try again</button>
        </div>
      ) : (
        <div className="quiz">
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestions + 1}</span> / {questions.length}
            </div>
            <div className="">Question 1</div>
            {questions[currentQuestions].questionText}
          </div>
          <div className="answer-section">
            {questions[currentQuestions].answerOptions.map((item) => (
              <button onClick={() => handleAnswerOptionClick(item.isCorrect)}>
                {item.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
