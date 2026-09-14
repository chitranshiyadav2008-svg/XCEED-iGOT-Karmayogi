import React, { useState } from "react";
import "./adaptiveQuizTest.css";

const questions = [
  {
    question:
      "Which technique is most appropriate for predicting a continuous numerical outcome?",
    options: [
      "Linear Regression",
      "K-Means Clustering",
      "Apriori Algorithm",
      "Decision Tree Classification",
    ],
    answer: 0,
    difficulty: "Medium",
  },

  {
    question:
      "What does the coefficient of determination (R²) indicate in a regression model?",
    options: [
      "The number of predictors",
      "The proportion of variance explained by the model",
      "The sample size",
      "The mean of the dependent variable",
    ],
    answer: 1,
    difficulty: "Medium",
  },

  {
    question:
      "Which value indicates a strong positive correlation between two variables?",
    options: [
      "-0.95",
      "-0.10",
      "0.05",
      "0.92",
    ],
    answer: 3,
    difficulty: "Medium",
  },

  {
    question:
      "What is the main purpose of a scatter plot in data analysis?",
    options: [
      "Show the relationship between two numerical variables",
      "Display categorical frequencies only",
      "Calculate the median",
      "Sort data alphabetically",
    ],
    answer: 0,
    difficulty: "Easy",
  },

  {
    question:
      "Which assumption is commonly associated with ordinary least squares regression?",
    options: [
      "Perfect multicollinearity",
      "Independent errors",
      "All variables must be categorical",
      "The sample must contain exactly 10 observations",
    ],
    answer: 1,
    difficulty: "Hard",
  },

  {
    question:
      "If the correlation coefficient is close to zero, what does it generally suggest?",
    options: [
      "A strong positive relationship",
      "A strong negative relationship",
      "Little or no linear relationship",
      "The variables are identical",
    ],
    answer: 2,
    difficulty: "Medium",
  },

  {
    question:
      "Which metric is commonly used to evaluate regression prediction error?",
    options: [
      "Mean Squared Error",
      "Accuracy",
      "Precision",
      "Recall",
    ],
    answer: 0,
    difficulty: "Medium",
  },

  {
    question:
      "What happens when a model overfits the training data?",
    options: [
      "It performs equally well on every unseen dataset",
      "It learns noise and may perform poorly on new data",
      "It always becomes simpler",
      "It removes all predictors",
    ],
    answer: 1,
    difficulty: "Hard",
  },
];

function AdaptiveQuizTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const question = questions[currentQuestion];

  const handleAnswer = (index) => {
    setSelectedAnswer(index);
  };

  const handleNext = () => {
    if (selectedAnswer === null) {
      return;
    }

    if (selectedAnswer === question.answer) {
      setScore((previousScore) => previousScore + 1);
    }

    if (currentQuestion === questions.length - 1) {
      setCompleted(true);
      return;
    }

    setCurrentQuestion((previousQuestion) => previousQuestion + 1);
    setSelectedAnswer(null);
  };

  const handleSkillTwin = () => {
    window.location.href = "/updated-skill-twin";
  };

  const handleSkillGap = () => {
    window.location.href = "/skill-gap";
  };

  const handleLearningPath = () => {
    window.location.href = "/learning-path";
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setCompleted(false);
  };

  if (completed) {
    const finalScore =
      score + (selectedAnswer === question.answer ? 1 : 0);

    return (
      <div className="quiz-page">

        <div className="quiz-top-strip">
          Capacity Building Commission · Karmayogi Bharat
        </div>

        <header className="quiz-navbar">

          <div className="quiz-brand">
            <div className="quiz-brand-icon">
              🎓
            </div>

            <div>
              <strong>SkillSaarthi</strong>
              <span>AI Skill Intelligence Platform</span>
            </div>
          </div>

          <nav>
            <a
              href="/updated-skill-twin"
              onClick={(e) => {
                e.preventDefault();
                handleSkillTwin();
              }}
            >
              AI Skill Twin
            </a>

            <a href="/adaptive-quiz" className="active">
              Adaptive Assessment
            </a>
          </nav>

          <div className="quiz-user">
            <div className="quiz-avatar">
              RS
            </div>

            <div>
              <strong>Rahul Sharma</strong>
              <span>Data Analyst</span>
            </div>
          </div>

        </header>

        <main className="quiz-container">

          <div className="quiz-result-card">

            <div className="quiz-success-icon">
              ✓
            </div>

            <span className="quiz-result-label">
              ASSESSMENT COMPLETE
            </span>

            <h1>
              Your assessment is complete
            </h1>

            <p>
              Your responses have been analysed and your Skill Twin
              can now be updated with the latest competency signals.
            </p>

            <div className="quiz-score">
              <strong>{finalScore}</strong>
              <span>/ {questions.length}</span>
            </div>

            <div className="quiz-result-actions">

              <button
                className="quiz-primary-button"
                onClick={handleSkillTwin}
              >
                View Updated Skill Twin →
              </button>

              <button
                className="quiz-secondary-button"
                onClick={handleSkillGap}
              >
                View Skill Gaps
              </button>

              <button
                className="quiz-secondary-button"
                onClick={handleLearningPath}
              >
                Explore Learning Path
              </button>

              <button
                className="quiz-restart-button"
                onClick={handleRestart}
              >
                Retake Assessment
              </button>

            </div>

          </div>

        </main>

      </div>
    );
  }

  const progress =
    ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="quiz-page">

      {/* TOP STRIP */}
      <div className="quiz-top-strip">
        Capacity Building Commission · Karmayogi Bharat
      </div>

      {/* NAVBAR */}
      <header className="quiz-navbar">

        <div className="quiz-brand">

          <div className="quiz-brand-icon">
            🎓
          </div>

          <div>
            <strong>SkillSaarthi</strong>
            <span>AI Skill Intelligence Platform</span>
          </div>

        </div>

        <nav>

          <a
            href="/updated-skill-twin"
            onClick={(e) => {
              e.preventDefault();
              handleSkillTwin();
            }}
          >
            AI Skill Twin
          </a>

          <a
            href="/adaptive-quiz"
            className="active"
          >
            Adaptive Assessment
          </a>

        </nav>

        <div className="quiz-user">

          <div className="quiz-avatar">
            RS
          </div>

          <div>
            <strong>Rahul Sharma</strong>
            <span>Data Analyst</span>
          </div>

        </div>

      </header>

      {/* QUIZ */}
      <main className="quiz-container">

        <div className="quiz-breadcrumb">
          Adaptive Assessment
          <span>›</span>
          <strong>Question {currentQuestion + 1}</strong>
        </div>

        <section className="quiz-header">

          <div>

            <span className="quiz-eyebrow">
              ADAPTIVE ASSESSMENT
            </span>

            <h1>
              Data Analysis
            </h1>

            <p>
              Answer each question to help us accurately estimate
              your current competency.
            </p>

          </div>

          <div className="quiz-question-count">
            <strong>
              {currentQuestion + 1}
            </strong>

            <span>
              / {questions.length}
            </span>
          </div>

        </section>

        {/* PROGRESS */}
        <div className="quiz-progress-area">

          <div className="quiz-progress-label">

            <span>
              Assessment progress
            </span>

            <strong>
              {Math.round(progress)}%
            </strong>

          </div>

          <div className="quiz-progress">
            <div
              style={{
                width: `${progress}%`,
              }}
            ></div>
          </div>

        </div>

        {/* QUESTION CARD */}
        <section className="quiz-question-card">

          <div className="quiz-question-meta">

            <span>
              Question {currentQuestion + 1}
            </span>

            <span className="quiz-difficulty">
              {question.difficulty}
            </span>

          </div>

          <h2>
            {question.question}
          </h2>

          <p className="quiz-instruction">
            Select the answer you think is most appropriate.
          </p>

          <div className="quiz-options">

            {question.options.map((option, index) => {

              const isSelected =
                selectedAnswer === index;

              return (
                <button
                  key={option}
                  className={`quiz-option ${
                    isSelected ? "selected" : ""
                  }`}
                  onClick={() => handleAnswer(index)}
                >

                  <span className="quiz-option-letter">
                    {String.fromCharCode(65 + index)}
                  </span>

                  <span className="quiz-option-text">
                    {option}
                  </span>

                  <span className="quiz-option-check">
                    {isSelected ? "✓" : ""}
                  </span>

                </button>
              );
            })}

          </div>

          <div className="quiz-bottom">

            <div className="quiz-adaptive-message">
              ✦ Question difficulty adapts based on your responses
            </div>

            <button
              className="quiz-next-button"
              onClick={handleNext}
              disabled={selectedAnswer === null}
            >
              {currentQuestion === questions.length - 1
                ? "Submit Assessment"
                : "Next Question →"}
            </button>

          </div>

        </section>

        <button
          className="quiz-back-button"
          onClick={() => {
            window.location.href = "/adaptive-quiz";
          }}
        >
          ← Back to Assessment Overview
        </button>

      </main>

    </div>
  );
}

export default AdaptiveQuizTest;