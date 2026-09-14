import React, { useState } from "react";
import "./skillAssessment.css";

const questions = [
  {
    id: 1,
    competency: "Data Analysis",
    question:
      "Which step should generally come first when analysing a new dataset?",
    options: [
      "Create a final presentation",
      "Understand and inspect the data",
      "Delete all unusual values",
      "Build a machine learning model",
    ],
    answer: 1,
  },

  {
    id: 2,
    competency: "Data Analysis",
    question:
      "Which measure is commonly used to represent the central tendency of numerical data?",
    options: [
      "Mean",
      "Range",
      "Variance",
      "Standard deviation",
    ],
    answer: 0,
  },

  {
    id: 3,
    competency: "Statistical Methods",
    question:
      "What does a standard deviation primarily tell us?",
    options: [
      "The number of observations",
      "How spread out the data is",
      "The largest value in the dataset",
      "The category with the highest frequency",
    ],
    answer: 1,
  },

  {
    id: 4,
    competency: "Statistical Methods",
    question:
      "Which statistical method can be used to study the relationship between two variables?",
    options: [
      "Correlation",
      "Sorting",
      "Data entry",
      "Formatting",
    ],
    answer: 0,
  },

  {
    id: 5,
    competency: "Survey Design",
    question:
      "Which is an important characteristic of a well-designed survey question?",
    options: [
      "It should be clear and unbiased",
      "It should always contain technical terms",
      "It should contain multiple questions together",
      "It should influence the respondent's answer",
    ],
    answer: 0,
  },

  {
    id: 6,
    competency: "Survey Design",
    question:
      "Why is sampling important in a survey?",
    options: [
      "To avoid collecting any data",
      "To select a suitable group representing the population",
      "To guarantee every answer is identical",
      "To remove the need for analysis",
    ],
    answer: 1,
  },

  {
    id: 7,
    competency: "Data Visualization",
    question:
      "Which chart is generally suitable for comparing values across different categories?",
    options: [
      "Bar chart",
      "Scatter plot only",
      "Flowchart",
      "Network diagram",
    ],
    answer: 0,
  },

  {
    id: 8,
    competency: "Data Visualization",
    question:
      "What is one important purpose of data visualization?",
    options: [
      "Make data harder to understand",
      "Hide important patterns",
      "Communicate patterns and insights clearly",
      "Replace the need for accurate data",
    ],
    answer: 2,
  },

  {
    id: 9,
    competency: "Data Interpretation",
    question:
      "If a dataset shows that one value is much higher than most other values, it may be described as:",
    options: [
      "An outlier",
      "A duplicate variable",
      "A sample frame",
      "A questionnaire",
    ],
    answer: 0,
  },

  {
    id: 10,
    competency: "Statistical Computing",
    question:
      "Which activity is an example of statistical computing?",
    options: [
      "Using software to calculate and analyse statistical results",
      "Writing a document without data",
      "Changing the computer wallpaper",
      "Creating a presentation without analysis",
    ],
    answer: 0,
  },
];

function SkillAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const question = questions[currentQuestion];

  const selectAnswer = (optionIndex) => {
    setAnswers({
      ...answers,
      [question.id]: optionIndex,
    });
  };

  const handleSubmit = async () => {
  if (answers[question.id] === undefined) {
    alert("Please answer the current question before submitting.");
    return;
  }

  const unansweredQuestions = questions.filter(
    (item) => answers[item.id] === undefined
  );

  if (unansweredQuestions.length > 0) {
    alert(
      `Please answer all questions before submitting. ${unansweredQuestions.length} question(s) remaining.`
    );
    return;
  }

  const results = calculateResults();

  /*
    Convert competency scores into the format
    expected by MongoDB.
  */

  const skills = Object.keys(results.competencyScores).map(
    (skillName) => {
      const score = results.competencyScores[skillName];

      let level = "Beginner";

      if (score >= 80) {
        level = "Expert";
      } else if (score >= 65) {
        level = "Advanced";
      } else if (score >= 40) {
        level = "Intermediate";
      }

      return {
        skillName,
        score,
        level,
      };
    }
  );

  const token = localStorage.getItem("token");

  if (!token) {
    alert("Your login session has expired. Please login again.");
    window.location.href = "/auth";
    return;
  }

  try {
    const response = await fetch(
      "http://localhost:5000/api/skill-assessment",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },

        body: JSON.stringify({
          skills,
          overallScore: results.overallScore,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Failed to save assessment."
      );
    }

    /*
      Keep localStorage as well because
      the Skill Gap page can use it for now.
    */

    localStorage.setItem(
      "xceedSkillAssessmentResults",
      JSON.stringify(results)
    );

    console.log(
      "Assessment saved to MongoDB:",
      data
    );

    setSubmitted(true);

    setTimeout(() => {
      window.location.href = "/skill-gap";
    }, 1200);

  } catch (error) {
    console.error(
      "Assessment submission error:",
      error
    );

    alert(
      "Could not save your assessment. Please make sure the backend is running."
    );
  }
};

  const progress =
    ((currentQuestion + 1) / questions.length) * 100;

  if (submitted) {
    return (
      <div className="assessment-page">
        <header className="assessment-navbar">
          <button
            className="assessment-brand"
            onClick={() =>
              (window.location.href = "/skill-assessment")
            }
          >
            <div className="assessment-logo">S</div>

            <div>
              <div className="assessment-brand-name">
                SkillSaarthi
              </div>

              <div className="assessment-powered">
                POWERED BY XCEED
              </div>
            </div>
          </button>
        </header>

        <main className="assessment-result-screen">
          <div className="result-icon">✓</div>

          <div className="assessment-badge">
            Assessment Complete
          </div>

          <h1>Your assessment is complete</h1>

          <p>
            We're analysing your responses to identify your
            strengths and skill gaps.
          </p>

          <div className="result-loading">
            <div className="result-loading-bar"></div>
          </div>

          <span className="result-redirect">
            Taking you to your Skill Gap Analysis...
          </span>
        </main>
      </div>
    );
  }

  return (
    <div className="assessment-page">

      {/* =========================
          NAVBAR
      ========================= */}

      <header className="assessment-navbar">

        <button
          className="assessment-brand"
          onClick={() =>
            (window.location.href = "/onboarding")
          }
        >
          <div className="assessment-logo">
            S
          </div>

          <div>
            <div className="assessment-brand-name">
              SkillSaarthi
            </div>

            <div className="assessment-powered">
              POWERED BY XCEED
            </div>
          </div>
        </button>

        <div className="assessment-role">
          <span>ROLE</span>
          <strong>Statistical Investigator</strong>
        </div>

      </header>

      {/* =========================
          MAIN
      ========================= */}

      <main className="assessment-question-container">

        {/* Progress Header */}

        <div className="assessment-progress-header">

          <div>
            <span className="progress-label">
              AI-POWERED SKILL ASSESSMENT
            </span>

            <h1>Assess your current skills</h1>
          </div>

          <div className="question-counter">
            <strong>
              {String(currentQuestion + 1).padStart(2, "0")}
            </strong>

            <span>
              / {String(questions.length).padStart(2, "0")}
            </span>
          </div>

        </div>

        {/* Progress Bar */}

        <div className="progress-track">
          <div
            className="progress-fill"
            style={{
              width: `${progress}%`,
            }}
          ></div>
        </div>

        <div className="progress-info">
          <span>
            Question {currentQuestion + 1} of{" "}
            {questions.length}
          </span>

          <span>
            {Math.round(progress)}% complete
          </span>
        </div>

        {/* Question Card */}

        <section className="question-card">

          <div className="question-top">

            <span className="competency-badge">
              {question.competency}
            </span>

            <span className="adaptive-label">
              ✦ Adaptive Assessment
            </span>

          </div>

          <div className="question-number">
            QUESTION {String(question.id).padStart(2, "0")}
          </div>

          <h2>
            {question.question}
          </h2>

          <p className="question-instruction">
            Select the option that you believe is most
            appropriate.
          </p>

          {/* Options */}

          <div className="options-list">

            {question.options.map((option, index) => {

              const isSelected =
                answers[question.id] === index;

              return (
                <button
                  key={index}
                  className={`assessment-option ${
                    isSelected ? "selected" : ""
                  }`}
                  onClick={() =>
                    selectAnswer(index)
                  }
                >

                  <span className="option-letter">
                    {String.fromCharCode(65 + index)}
                  </span>

                  <span className="option-text">
                    {option}
                  </span>

                  <span className="option-radio">
                    {isSelected ? "✓" : ""}
                  </span>

                </button>
              );
            })}

          </div>

        </section>

        {/* Bottom Controls */}

        <div className="assessment-navigation">

          <button
            className="previous-button"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            ← Previous
          </button>

          <div className="question-dots">

            {questions.map((item, index) => (
              <button
                key={item.id}
                className={`question-dot ${
                  index === currentQuestion
                    ? "active"
                    : answers[item.id] !== undefined
                    ? "answered"
                    : ""
                }`}
                onClick={() => setCurrentQuestion(index)}
                aria-label={`Go to question ${index + 1}`}
              >
                {index + 1}
              </button>
            ))}

          </div>

          {currentQuestion === questions.length - 1 ? (
            <button
              className="next-button submit-button"
              onClick={handleSubmit}
            >
              Submit Assessment
              <span>✓</span>
            </button>
          ) : (
            <button
              className="next-button"
              onClick={handleNext}
            >
              Next
              <span>→</span>
            </button>
          )}

        </div>

        {/* Disclaimer */}

        <div className="assessment-disclaimer-box">
          <span>ⓘ</span>

          <p>
            This assessment is designed only to understand
            your learning needs. It is not an employment or
            performance evaluation. Your responses are used
            to personalise your learning journey.
          </p>
        </div>

      </main>

      <footer className="assessment-footer">
        <span>SkillSaarthi</span>
        <span>·</span>
        <span>SIH 2026 Prototype</span>
      </footer>

    </div>
  );
}

export default SkillAssessment;