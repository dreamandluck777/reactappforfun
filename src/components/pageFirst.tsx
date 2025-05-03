import React, { useState } from "react";

interface ForUniversalPage {
  questions: string[];
  answers: string[][]; 
  correctAnswers: number[]; 
  name: string; 
  theory: { [key: number]: string }; 
}

const Universal: React.FC<ForUniversalPage> = ({ questions, answers, correctAnswers, name, theory }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState<number | null>(null);

  const isCorrect = userAnswer === correctAnswers[currentQuestion];

  function buttonPrev() {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setUserAnswer(null);
    }
  }

  function buttonNext() {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setUserAnswer(null);
    }
  }

  const styles = {
    main: {
      maxWidth: "800px",
      margin: "0 auto",
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", 
      marginTop: '50px',
    },

    h3: {
      color: "#333",
      marginBottom: "15px",
    },
    h4: {
      color: "#555",
      marginBottom: "15px",
    },
    label: {
      display: "block",
      marginBottom: "10px",
      fontSize: "1.2rem",
      color: "#555",
    },
    input: {
      marginRight: "10px",
      cursor: "pointer",
    },
    p: {
      color: "#555",
    },
    bad: {
      color: "#e74c3c", 
    },
    good: {
      color: "#2ecc71", 
    },
    button: {
      backgroundColor: "#3498db",
      color: "#fff",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "1.1rem",
      margin: "10px 5px",
      transition: "background-color 0.3s ease",
    },
    buttonDisabled: {
      backgroundColor: "#ccc",
      cursor: "not-allowed",
    },
    buttonHover: {
      backgroundColor: "#2980b9",
    },
    questionCounter: {
      marginBottom: "10px",
      color: "#888",
    },
  };

  return (
    <main style={styles.main}>
      <h3 style={styles.h3}>{name}</h3>

      <p style={styles.questionCounter}>
      Question {currentQuestion + 1} из {questions.length}
      </p>

      <h4 style={styles.h4}>{questions[currentQuestion]}</h4>

      {answers[currentQuestion].map((option, index) => (
        <label key={index} style={styles.label}>
          <input
            type="radio"
            name={`question-${currentQuestion}`}
            value={index}
            checked={userAnswer === index}
            onChange={() => setUserAnswer(index)}
            style={styles.input}
          />
          {option}
        </label>
      ))}

      {!isCorrect && userAnswer !== null && (
        <div>
          <p style={{ ...styles.p, ...styles.bad }}>Bad</p>
          <p style={styles.p}>{theory[currentQuestion]}</p>
        </div>
      )}

      {isCorrect && userAnswer !== null && (
        <p style={{ ...styles.p, ...styles.good }}>Good!</p>
      )}

      <div>
        <button
          onClick={buttonPrev}
          disabled={currentQuestion === 0}
          style={currentQuestion === 0 ? { ...styles.button, ...styles.buttonDisabled } : styles.button}
        >
          ←
        </button>
        <button
          onClick={buttonNext}
          style={styles.button}
        >
          →
        </button>
      </div>
    </main>
  );
};

export default Universal;
