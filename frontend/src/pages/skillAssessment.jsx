import React, { useState } from "react";
import "./skillAssessment.css";

const competencies = [
  "Data Analysis",
  "Statistical Methods",
  "Data Visualization",
  "Survey Design",
  "Data Interpretation",
  "Statistical Computing",
];

function SkillAssessment() {
  const [started, setStarted] = useState(false);

  const handleStart = () => {
    setStarted(true);
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="assessment-page">

      {/* Navbar */}
      <header className="assessment-navbar">
        <div className="assessment-brand">
          <div className="assessment-logo">S</div>

          <div>
            <div className="assessment-brand-name">
              SkillSaarthi
            </div>

            <div className="assessment-powered">
              Powered by XCEED
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="assessment-main">

        {/* Hero */}
        <section className="assessment-hero">

          <div className="assessment-badge">
            AI-Powered Assessment
          </div>

          <h1>
            Skill Assessment
          </h1>

          <p className="assessment-description">
            A short adaptive assessment that maps your current
            competencies for the Statistical Investigator role and
            builds the foundation of your AI Skill Twin.
          </p>

          <p className="assessment-note">
            This assessment is designed to understand your learning
            needs.
          </p>

          <p className="assessment-disclaimer">
            It is not an employment or performance evaluation.
            Results are used only to personalise your learning path.
          </p>
        </section>

        {/* Assessment Card */}
        <section className="assessment-card">

          <div className="assessment-card-header">
            <div>
              <span className="section-label">
                Assessment Overview
              </span>

              <h2>
                Adaptive Competency Assessment
              </h2>
            </div>

            <div className="official-badge">
              Official Statistics
            </div>
          </div>

          {/* Stats */}
          <div className="assessment-stats">

            <div className="assessment-stat">
              <span className="stat-label">
                Role
              </span>

              <strong>
                Statistical Investigator
              </strong>
            </div>

            <div className="assessment-stat">
              <span className="stat-label">
                Skills assessed
              </span>

              <strong>
                6 competencies
              </strong>
            </div>

            <div className="assessment-stat">
              <span className="stat-label">
                Questions
              </span>

              <strong>
                10 questions
              </strong>
            </div>

            <div className="assessment-stat">
              <span className="stat-label">
                Estimated time
              </span>

              <strong>
                5–7 minutes
              </strong>
            </div>

          </div>

          {/* Competencies */}
          <div className="competency-section">

            <h3>
              Competencies covered
            </h3>

            <div className="competency-grid">

              {competencies.map((skill, index) => (
                <div
                  className="competency-item"
                  key={index}
                >
                  <span className="competency-check">
                    ✓
                  </span>

                  <span>
                    {skill}
                  </span>
                </div>
              ))}

            </div>

          </div>

          {/* Actions */}
          <div className="assessment-actions">

            <button
              className="back-button"
              onClick={handleBack}
            >
              ← Back to Dashboard
            </button>

            <button
              className="start-button"
              onClick={handleStart}
            >
              Start Assessment
              <span>→</span>
            </button>

          </div>

          {started && (
            <div className="assessment-started">
              Assessment started. Your questions will appear here.
            </div>
          )}

        </section>

      </main>

      {/* Footer */}
      <footer className="assessment-footer">
        <span>SkillSaarthi</span>
        <span>·</span>
        <span>SIH Prototype</span>
      </footer>

    </div>
  );
}

export default SkillAssessment;