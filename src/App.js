import React,{useState} from "react";

const questions = [
  {
    questionText: "What a capital of USA ?",
    answerOptions: [
      { answerText: "Boston", isCorrect: false },
      { answerText: "Washington", isCorrect: true },
      { answerText: "New-york", isCorrect: false },
      { answerText: "LOs-Angeles", isCorrect: false },
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

const [currentQuestions, setCurrentQuestions]= useState( )

const App = () => {
  return (
    <div className="app">
      <div className="quiz">
        <div className="question-section">
          <div className="question-count">
            <span>Question 1</span> /4
          </div>
          <div className="">Question 1</div>question-text
        </div>
        <div className="answer-section">
          <button>Variant 1</button>
          <button>Variant 2</button>
          <button>Variant 3</button>
          <button>Variant 4</button>
        </div>
      </div>
    </div>
  );
};

export default App;
