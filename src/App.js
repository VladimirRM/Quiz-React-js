import React,{useState} from 'react'

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
  return (
    <div className='app'>
      
      
    </div>
  )
}

export default App
