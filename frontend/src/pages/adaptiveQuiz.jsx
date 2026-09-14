import React from "react";
import "./adaptiveQuiz.css";

function AdaptiveQuiz() {
  const handleStartAssessment = () => {
    window.location.href = "/adaptive-quiz-test";
  };

  const handleSkillTwin = () => {
    window.location.href = "/updated-skill-twin";
  };

  const handleBack = () => {
    window.location.href = "/what-if-simulator";
  };

  return (
    <div className="adaptive-page">

      {/* TOP BAR */}
      <div className="adaptive-top-strip">
        Capacity Building Commission · Karmayogi Bharat
      </div>

      {/* NAVBAR */}
      <header className="adaptive-navbar">

        <div className="adaptive-brand">
          <div className="adaptive-brand-icon">
            🎓
          </div>

          <div>
            <strong>SkillSaarthi</strong>
            <span>AI Skill Intelligence Platform</span>
          </div>
        </div>

        <nav className="adaptive-nav-links">
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

        <div className="adaptive-profile">
          <div className="adaptive-avatar">
            RS
          </div>

          <div>
            <strong>Rahul Sharma</strong>
            <span>Data Analyst</span>
          </div>
        </div>

      </header>

      {/* MAIN */}
      <main className="adaptive-container">

        {/* BREADCRUMB */}
        <div className="adaptive-breadcrumb">
          AI Skill Twin
          <span>›</span>
          <strong>Adaptive Assessment</strong>
        </div>

        {/* HERO */}
        <section className="adaptive-hero">

          <div className="adaptive-eyebrow">
            AI-POWERED ADAPTIVE ASSESSMENT
          </div>

          <h1>
            Adaptive Skill Assessment
          </h1>

          <p>
            Questions adapt to your performance to accurately measure
            your evolving skill level.
          </p>

        </section>

        {/* PROFILE CARD */}
        <section className="adaptive-profile-card">

          <div className="adaptive-user-section">

            <div className="adaptive-large-avatar">
              RS
            </div>

            <div>
              <h2>Rahul Sharma</h2>
              <p>Data Analyst</p>
            </div>

          </div>

          <div className="adaptive-level">

            <div>
              <span>Current Level</span>
              <strong>55%</strong>
            </div>

            <div className="adaptive-level-line">
              <div style={{ width: "55%" }}></div>
            </div>

            <small>
              Target level: <b>80%</b>
            </small>

          </div>

        </section>

        {/* ASSESSMENT INFO */}
        <section className="adaptive-info-grid">

          <div className="adaptive-card">

            <div className="adaptive-card-icon">
              ◉
            </div>

            <div>
              <span>Skill</span>
              <h3>Data Analysis</h3>
            </div>

          </div>

          <div className="adaptive-card">

            <div className="adaptive-card-icon">
              ↑
            </div>

            <div>
              <span>Primary Skill Gap</span>
              <h3>Regression</h3>
            </div>

          </div>

          <div className="adaptive-card">

            <div className="adaptive-card-icon">
              #
            </div>

            <div>
              <span>Questions</span>
              <h3>8</h3>
            </div>

          </div>

          <div className="adaptive-card">

            <div className="adaptive-card-icon">
              ◐
            </div>

            <div>
              <span>Starting Difficulty</span>
              <h3>Medium</h3>
            </div>

          </div>

        </section>

        {/* FOCUS AREAS */}
        <section className="adaptive-section">

          <div className="adaptive-section-heading">
            <div>
              <span className="adaptive-small-label">
                ASSESSMENT CONFIGURATION
              </span>

              <h2>Focus Areas</h2>

              <p>
                The assessment will adapt around your identified skill gaps.
              </p>
            </div>
          </div>

          <div className="adaptive-focus-card">

            <div className="adaptive-focus-row">

              <div>
                <strong>Regression</strong>
                <span className="adaptive-high">
                  High priority
                </span>
              </div>

              <div className="adaptive-focus-percent">
                50%
              </div>

            </div>

            <div className="adaptive-progress">
              <div style={{ width: "50%" }}></div>
            </div>

          </div>

          <div className="adaptive-focus-card">

            <div className="adaptive-focus-row">

              <div>
                <strong>Correlation</strong>
                <span className="adaptive-medium">
                  Medium priority
                </span>
              </div>

              <div className="adaptive-focus-percent">
                30%
              </div>

            </div>

            <div className="adaptive-progress">
              <div style={{ width: "30%" }}></div>
            </div>

          </div>

          <div className="adaptive-focus-card">

            <div className="adaptive-focus-row">

              <div>
                <strong>Data Visualization</strong>
                <span className="adaptive-low">
                  Low priority
                </span>
              </div>

              <div className="adaptive-focus-percent">
                20%
              </div>

            </div>

            <div className="adaptive-progress">
              <div style={{ width: "20%" }}></div>
            </div>

          </div>

        </section>

        {/* RECOMMENDATION */}
        <section className="adaptive-recommendation">

          <div className="adaptive-recommendation-icon">
            ✦
          </div>

          <div>

            <span>
              RECOMMENDED LEARNING AREA
            </span>

            <h2>
              Regression Analysis
            </h2>

            <p>
              Your Skill Twin indicates that Regression Analysis
              is currently the most important area to strengthen.
            </p>

          </div>

        </section>

        {/* HOW IT WORKS */}
        <section className="adaptive-explanation">

          <div className="adaptive-small-label">
            HOW IT WORKS
          </div>

          <h2>
            An assessment that adapts to you
          </h2>

          <p>
            Unlike a fixed test, our adaptive assessment changes
            question difficulty based on your responses. This helps
            create a more accurate picture of your actual competency.
          </p>

          <div className="adaptive-flow">

            <div className="adaptive-flow-item">
              <div>1</div>
              <strong>Start</strong>
              <span>Medium difficulty</span>
            </div>

            <div className="adaptive-flow-arrow">
              →
            </div>

            <div className="adaptive-flow-item">
              <div>2</div>
              <strong>Adapt</strong>
              <span>Questions change</span>
            </div>

            <div className="adaptive-flow-arrow">
              →
            </div>

            <div className="adaptive-flow-item">
              <div>3</div>
              <strong>Measure</strong>
              <span>Update Skill Twin</span>
            </div>

          </div>

        </section>

        {/* ACTIONS */}
        <section className="adaptive-actions">

          <button
            className="adaptive-back-button"
            onClick={handleBack}
          >
            ← Back
          </button>

          <button
            className="adaptive-start-button"
            onClick={handleStartAssessment}
          >
            Start Assessment →
          </button>

        </section>

        <div className="adaptive-note">
          AI-powered assessment · Demo data for SIH prototype
        </div>

      </main>

    </div>
  );
}

export default AdaptiveQuiz;