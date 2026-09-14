import React, { useState } from "react";
import "./whatIfSimulator.css";

function WhatIfSimulator() {
const [surveyDesign, setSurveyDesign] = useState(54);

const currentReadiness = 72;

const estimatedReadiness = Math.min(
90,
Math.round(72 + (surveyDesign - 54) * 0.31)
);

const improvement = estimatedReadiness - currentReadiness;

return ( <div className="whatif-page"> <header className="whatif-header">
<button
className="whatif-brand"
onClick={() => (window.location.href = "/")}
> <div className="whatif-logo">✦</div>

```
      <div>
        <div className="whatif-brand-name">SkillSaarthi</div>
        <div className="whatif-brand-subtitle">
          AI Skill Intelligence Platform
        </div>
      </div>
    </button>

    <div className="whatif-header-badge">
      WHAT-IF SIMULATOR
    </div>
  </header>

  <main className="whatif-container">
    <div className="whatif-top">
      <div>
        <div className="whatif-eyebrow">
          AI LEARNING SIMULATION
        </div>

        <h1>
          What if you
          <br />
          <span>improve your skills?</span>
        </h1>

        <p>
          Explore how improving a skill could influence your
          overall role readiness before you commit to a learning
          path.
        </p>
      </div>

      <div className="whatif-score">
        <span>CURRENT READINESS</span>
        <strong>{currentReadiness}%</strong>
        <small>Role readiness</small>
      </div>
    </div>

    <section className="whatif-card">
      <div className="whatif-card-header">
        <div>
          <span className="skill-pill">
            TOP SKILL GAP
          </span>

          <h2>Survey Design</h2>

          <p>
            See how strengthening this competency could change
            your projected readiness.
          </p>
        </div>

        <div className="skill-current">
          <span>Current</span>
          <strong>{surveyDesign}%</strong>
        </div>
      </div>

      <div className="slider-section">
        <div className="slider-labels">
          <span>Current skill level</span>
          <strong>{surveyDesign}%</strong>
        </div>

        <input
          type="range"
          min="54"
          max="80"
          value={surveyDesign}
          onChange={(e) =>
            setSurveyDesign(Number(e.target.value))
          }
          className="whatif-slider"
        />

        <div className="slider-range">
          <span>54%</span>
          <span>80%</span>
        </div>
      </div>

      <div className="whatif-result">
        <div className="result-block">
          <span>PROJECTED READINESS</span>

          <strong>{estimatedReadiness}%</strong>

          <small>
            {improvement > 0
              ? `+${improvement}% improvement`
              : "No change yet"}
          </small>
        </div>

        <div className="result-arrow">→</div>

        <div className="result-message">
          <span>AI PROJECTION</span>

          <p>
            Raising Survey Design to{" "}
            <strong>{surveyDesign}%</strong> could improve
            your readiness for the Data Analyst role.
          </p>
        </div>
      </div>
    </section>

    <section className="whatif-insight">
      <div className="insight-icon">✦</div>

      <div>
        <span>AI INSIGHT</span>

        <p>
          Survey Design is currently your highest-priority
          competency gap. Improving it has a measurable effect
          on your projected role readiness.
        </p>
      </div>
    </section>

    <div className="whatif-actions">
      <button
        className="whatif-secondary"
        onClick={() =>
          (window.location.href = "/learning-path")
        }
      >
        ← Back to Learning Path
      </button>

      <button
        className="whatif-primary"
        onClick={() =>
          (window.location.href = "/adaptive-quiz")
        }
      >
        Take Adaptive Quiz →
      </button>
    </div>

    <div className="whatif-note">
      ✦ AI-powered simulation · Demo data for SIH prototype
    </div>
  </main>
</div>
);
}

export default WhatIfSimulator;
