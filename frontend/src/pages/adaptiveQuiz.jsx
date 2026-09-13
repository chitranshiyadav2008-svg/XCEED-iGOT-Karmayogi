import React, { useState } from "react";
import "./adaptiveQuiz.css";

function AdaptiveQuiz() {
  const [showSimulator, setShowSimulator] = useState(false);

  const competencies = [
    {
      name: "Data Analysis",
      current: 82,
      required: 90,
      gap: 8,
      status: "Strong",
      statusClass: "strong",
    },
    {
      name: "Statistical Methods",
      current: 68,
      required: 85,
      gap: 17,
      status: "Moderate",
      statusClass: "moderate",
    },
    {
      name: "Data Visualization",
      current: 61,
      required: 82,
      gap: 21,
      status: "High Priority Gap",
      statusClass: "high",
    },
    {
      name: "Survey Design",
      current: 54,
      required: 80,
      gap: 26,
      status: "Needs Improvement",
      statusClass: "needs",
    },
    {
      name: "Data Interpretation",
      current: 64,
      required: 85,
      gap: 21,
      status: "Moderate",
      statusClass: "moderate",
    },
    {
      name: "Statistical Computing",
      current: 58,
      required: 80,
      gap: 22,
      status: "Needs Improvement",
      statusClass: "needs",
    },
  ];

  return (
    <div className="skill-page">

      {/* NAVBAR */}
      <nav className="skill-navbar">
        <div className="brand">
          <div className="brand-icon">✦</div>
          <div>
            <div className="brand-name">SkillSaarthi</div>
            <div className="brand-subtitle">
              AI Skill Intelligence Platform
            </div>
          </div>
        </div>

        <div className="nav-links">
          <a className="active-link">AI Skill Twin</a>
          <a>Adaptive Assessment</a>
        </div>
      </nav>

      {/* MAIN */}
      <main className="skill-container">

        {/* TOP SECTION */}
        <section className="hero-row">
          <div>
            <div className="active-pill">
              <span className="green-dot"></span>
              AI Skill Twin Active
            </div>

            <h1>Your AI Skill Twin</h1>

            <p className="hero-description">
              A dynamic view of your current competencies, role requirements,
              and growth opportunities.
            </p>

            <div className="profile-line">
              <strong>Rahul Sharma</strong>
              <span>Role: Statistical Investigator</span>
              <span>Department: Official Statistics</span>
              <span>Last Assessment: Just now</span>
            </div>
          </div>

          <button className="outline-button">
            ↻ Reassess Skills
          </button>
        </section>

        {/* READINESS */}
        <section className="readiness-card">
          <div className="readiness-left">
            <div className="section-label">ROLE READINESS</div>

            <div className="readiness-number">72%</div>

            <div className="readiness-title">
              Current Role Readiness
            </div>

            <div className="readiness-bar">
              <div
                className="readiness-current"
                style={{ width: "72%" }}
              ></div>

              <div className="target-marker"></div>
            </div>

            <div className="readiness-scale">
              <span>Current 72%</span>
              <span>Target 90%</span>
            </div>

            <button className="text-button">
              View Skill Gaps →
            </button>
          </div>

          <div className="insight-box">
            <div className="insight-label">AI GENERATED INSIGHT</div>

            <p>
              You have a strong foundation in <strong>Data Analysis</strong>.
              Your biggest development opportunities are{" "}
              <strong>Survey Design</strong> and{" "}
              <strong>Statistical Computing</strong>.
            </p>
          </div>
        </section>

        {/* COMPETENCY PROFILE */}
        <section className="section-block">
          <div className="section-heading">
            <div>
              <div className="section-label">COMPETENCY PROFILE</div>
              <h2>Your Competency Profile</h2>
              <p>
                Current capability compared with what the Statistical
                Investigator role requires.
              </p>
            </div>
          </div>

          <div className="competency-grid">
            {competencies.map((skill) => (
              <div className="competency-card" key={skill.name}>

                <div className="competency-top">
                  <h3>{skill.name}</h3>

                  <span className={`status ${skill.statusClass}`}>
                    {skill.status}
                  </span>
                </div>

                <div className="gap-text">
                  Gap: {skill.gap} pts
                </div>

                <div className="skill-values">
                  <div>
                    <span>Current</span>
                    <strong>{skill.current}%</strong>
                  </div>

                  <div>
                    <span>Required</span>
                    <strong>{skill.required}%</strong>
                  </div>
                </div>

                <div className="comparison-bar">
                  <div
                    className="current-bar"
                    style={{ width: `${skill.current}%` }}
                  ></div>

                  <div
                    className="required-marker"
                    style={{ left: `${skill.required}%` }}
                  ></div>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="overview-card">
          <div className="section-label">SKILL TWIN OVERVIEW</div>

          <h2>Skill Twin Overview</h2>

          <p>
            Your competency shape against the role framework.
          </p>

          <div className="overview-list">
            {competencies.map((skill) => (
              <div className="overview-row" key={skill.name}>
                <div className="overview-name">
                  {skill.name}
                </div>

                <div className="overview-bar">
                  <div
                    className="overview-current"
                    style={{ width: `${skill.current}%` }}
                  ></div>

                  <div
                    className="overview-required"
                    style={{ left: `${skill.required}%` }}
                  ></div>
                </div>

                <div className="overview-number">
                  {skill.current}%
                </div>
              </div>
            ))}
          </div>

          <div className="legend">
            <span>
              <i className="legend-current"></i>
              Current
            </span>

            <span>
              <i className="legend-required"></i>
              Required
            </span>
          </div>
        </section>

        {/* INSIGHTS */}
        <section className="insight-grid">

          <div className="highlight-card">
            <div className="card-label">AI GENERATED INSIGHT</div>

            <div className="card-heading">Your Strength</div>

            <h3>Data Analysis</h3>

            <div className="big-percentage">82%</div>

            <p>
              You demonstrate strong capability in analysing and working
              with statistical data.
            </p>
          </div>

          <div className="highlight-card priority-card">
            <div className="card-label">AI GENERATED INSIGHT</div>

            <div className="card-heading">Priority Gap</div>

            <h3>Survey Design</h3>

            <div className="big-percentage">54%</div>

            <p>
              This is currently your largest role-relevant competency gap.
            </p>
          </div>

          <div className="highlight-card">
            <div className="card-label">AI GENERATED INSIGHT</div>

            <div className="card-heading">Next Development Area</div>

            <h3>Statistical Computing</h3>

            <div className="big-percentage">58%</div>

            <p>
              Improving this skill could significantly increase your role
              readiness.
            </p>
          </div>

        </section>

        {/* SKILL GAP ANALYSIS */}
        <section className="section-block">
          <div className="section-label">SKILL GAP ANALYSIS</div>

          <h2>Skill Gap Analysis</h2>

          <p className="section-description">
            Sorted by gap severity. Select a skill for the full breakdown.
          </p>

          <div className="gap-list">
            {[...competencies]
              .sort((a, b) => b.gap - a.gap)
              .map((skill) => (
                <div className="gap-row" key={skill.name}>

                  <div className="gap-skill">
                    <strong>{skill.name}</strong>
                    <span>
                      Gap: {skill.gap} pts · {skill.current}% of{" "}
                      {skill.required}%
                    </span>
                  </div>

                  <div
                    className={`priority-badge ${
                      skill.gap >= 21
                        ? "high-priority"
                        : skill.gap >= 15
                        ? "medium-priority"
                        : "low-priority"
                    }`}
                  >
                    {skill.gap >= 21
                      ? "HIGH"
                      : skill.gap >= 15
                      ? "MEDIUM"
                      : "LOW"}
                  </div>

                </div>
              ))}
          </div>
        </section>

        {/* ROLE MATCH */}
        <section className="role-match-card">

          <div className="section-label">
            ROLE COMPATIBILITY
          </div>

          <h2>How Well Do Your Skills Match Your Role?</h2>

          <div className="role-title">
            Role: <strong>Statistical Investigator</strong>
            <span>72% overall match</span>
          </div>

          <div className="match-grid">

            <div className="match-item">
              <span>Core Statistical Skills</span>
              <strong>76%</strong>
              <div className="mini-bar">
                <div style={{ width: "76%" }}></div>
              </div>
            </div>

            <div className="match-item">
              <span>Data & Technology Skills</span>
              <strong>68%</strong>
              <div className="mini-bar">
                <div style={{ width: "68%" }}></div>
              </div>
            </div>

            <div className="match-item">
              <span>Research & Survey Skills</span>
              <strong>61%</strong>
              <div className="mini-bar">
                <div style={{ width: "61%" }}></div>
              </div>
            </div>

            <div className="match-item">
              <span>Communication & Interpretation</span>
              <strong>70%</strong>
              <div className="mini-bar">
                <div style={{ width: "70%" }}></div>
              </div>
            </div>

          </div>

          <div className="wide-insight">
            <div className="card-label">AI GENERATED INSIGHT</div>

            <p>
              Your profile matches the analytical core of the role well,
              but research and survey capability trails the framework
              requirement — which is why it dominates your readiness gap.
            </p>
          </div>

        </section>

        {/* NEXT LEARNING */}
        <section className="learning-card">

          <div className="learning-main">

            <div className="section-label">
              YOUR NEXT BEST LEARNING
            </div>

            <h2>Fundamentals of Survey Design & Sampling</h2>

            <p>
              Survey Design is your largest role-relevant gap and feeds
              into Statistical Methods and Data Interpretation, so progress
              here lifts several competencies at once.
            </p>

            <div className="learning-meta">

              <div>
                <span>Skill</span>
                <strong>Survey Design</strong>
              </div>

              <div>
                <span>Current</span>
                <strong>54%</strong>
              </div>

              <div>
                <span>Target</span>
                <strong>80%</strong>
              </div>

              <div>
                <span>Duration</span>
                <strong>3 hours</strong>
              </div>

            </div>

            <div className="learning-actions">
              <span className="priority-label">
                Priority: HIGH
              </span>

              <button className="primary-button">
                View Personalised Learning Path →
              </button>
            </div>

          </div>

        </section>

        {/* WHAT IF */}
        <section className="what-if-card">

          <div>
            <div className="section-label">
              WHAT-IF SIMULATOR
            </div>

            <h2>What if you improve your top skill gap?</h2>

            <p>
              Closing your Survey Design gap has the largest effect on
              role readiness.
            </p>
          </div>

          <div className="what-if-values">

            <div>
              <span>Current</span>
              <strong>72%</strong>
            </div>

            <div className="arrow">→</div>

            <div>
              <span>Estimated</span>
              <strong>80%</strong>
            </div>

            <div className="increase">+8%</div>

          </div>

          <button
            className="outline-button"
            onClick={() => setShowSimulator(!showSimulator)}
          >
            {showSimulator
              ? "Hide Simulator"
              : "Open What-If Simulator"}
          </button>

          {showSimulator && (
            <div className="simulator-box">
              <strong>Estimated impact</strong>
              <p>
                Improving Survey Design from 54% toward the role target
                could increase your estimated role readiness from 72% to
                approximately 80%.
              </p>
              <small>
                Estimated impact — not a guaranteed prediction.
              </small>
            </div>
          )}

        </section>

        {/* CONFIDENCE */}
        <section className="confidence-card">

          <div className="confidence-icon">✓</div>

          <div>
            <div className="section-label">
              SKILL TWIN CONFIDENCE
            </div>

            <h3>High confidence</h3>

            <p>
              Based on your latest adaptive assessment performance and
              the Statistical Investigator role competency framework.
            </p>
          </div>

        </section>

        {/* JOURNEY */}
        <section className="journey-section">

          <div className="section-label">
            SKILL TWIN JOURNEY
          </div>

          <h2>Your Skill Twin Journey</h2>

          <div className="journey">

            <div className="journey-step completed">
              <div className="journey-number">1</div>
              <h3>Completed assessment</h3>
              <p>
                Adaptive Data Analysis assessment finished.
              </p>
            </div>

            <div className="journey-line"></div>

            <div className="journey-step completed">
              <div className="journey-number">2</div>
              <h3>AI Skill Twin generated</h3>
              <p>
                Competency profile modelled against your role framework.
              </p>
            </div>

            <div className="journey-line"></div>

            <div className="journey-step">
              <div className="journey-number">3</div>
              <h3>Skill gaps identified</h3>
              <p>
                Six competencies ranked by gap severity.
              </p>
            </div>

            <div className="journey-line"></div>

            <div className="journey-step">
              <div className="journey-number">4</div>
              <h3>Personalised Learning Path created</h3>
              <p>
                Targeted modules sequenced by impact on readiness.
              </p>
            </div>

            <div className="journey-line"></div>

            <div className="journey-step">
              <div className="journey-number">5</div>
              <h3>Reassessment & Skill Twin update</h3>
              <p>
                Your twin refreshes after your next assessment.
              </p>
            </div>

          </div>

          <div className="bottom-actions">
            <button className="outline-button">
              View Skill Gaps
            </button>

            <button className="primary-button">
              Explore Learning Path →
            </button>
          </div>

        </section>

      </main>

      <footer className="skill-footer">
        <strong>SkillSaarthi</strong>
        <span>AI Skill Intelligence Platform</span>
        <span>SIH Prototype · Demo data only</span>
      </footer>

    </div>
  );
}

export default AdaptiveQuiz;