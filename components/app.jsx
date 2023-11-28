"use client"

import React, { useState } from 'react';
import styles from './styles/styles.module.scss';

const TruthOrDareGame = () => {
  const [question, setQuestion] = useState('');

  const getRandomQuestion = () => {
    const questions = ['真心問題1', '真心問題2', '真心問題3'];
    const randomIndex = Math.floor(Math.random() * questions.length);
    setQuestion(questions[randomIndex]);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The Truth or Dare of Wage Slave</h1>
      <button 
        className={styles.button} 
        onClick={getRandomQuestion}
      >
        下一個問題
      </button>
      {question && <p className={styles.question}>{question}</p>}
    </div>
  );
};

export default TruthOrDareGame;