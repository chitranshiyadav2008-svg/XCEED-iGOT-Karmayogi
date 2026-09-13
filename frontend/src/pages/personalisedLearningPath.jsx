import React from "react";
import "./personalisedLearningPath.css";

const learningModules = [
  {
    number: "01",
    title: "Fundamentals of Data Interpretation",
    skill: "Data Interpretation",
    level: "Priority",
    duration: "2.5 hours",
    progress: 100,
    status: "Completed",
    description:
      "Build a strong foundation for interpreting statistical results, identifying patterns and drawing meaningful conclusions.",
    topics: ["Reading statistical outputs", "Identifying trends", "Drawing conclusions"],
  },
  {
    number: "02",
    title: "Advanced Data Interpretation",
    skill: "Data Interpretation",
    level: "Recommended",
    duration: "3 hours",
    progress: 35,
    status: "In Progress",
    description:
      "Strengthen your ability to analyse complex datasets and convert statistical findings into actionable insights.",
    topics: ["Comparative analysis", "Statistical reasoning", "Evidence-based insights"],
  },
  {
    number: "03",
    title: "Data Visualisation for Statistical Analysis",
    skill: "Data Visualization",
    level: "High Priority",
    duration: "3.5 hours",
    progress: 0,
    status: "Not Started",
    description:
      "Learn to select, create and interpret effective visualisations for communicating statistical information.",
    topics: ["Chart selection", "Dashboard design", "Visual storytelling"],
  },
  {
    number: "04",
    title: "Applied Statistical Methods",
    skill: "Statistical Methods",
    level: "Recommended",
    duration: "4 hours",
    progress: 0,
    status: "Not Started",
    description:
      "Develop practical knowledge of statistical methods commonly used in official statistics and data analysis.",
    topics: ["Hypothesis testing", "Sampling", "Statistical inference"],
  },
];

function App() {
  return (
    <div className="app">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="brand">
          <div className="brand-logo">✦</div>

          <div>
            <div className="brand-name">SkillSaarthi</div>
            <div className="brand-subtitle">Competency AI</div>
          </div>
        </div>

        <nav className="nav-links">
          <a href="#overview">Overview</a>
          <a href="#path">Learning Path</a>
          <a href="#skills">Skills</a>
        </nav>

        <div className="nav-right">
          <span className="ai-badge">AI Learning Path</span>
          <button className="avatar">C</button>
        </div>
      </header>

      <main className="container">

        {/* HERO */}
        <section className="hero">

          <div className="hero-content">
            <div className="eyebrow">PERSONALISED LEARNING</div>

            <h1>
              Your Personalised
              <br />
              <span>Learning Path</span>
            </h1>

            <p>
              An AI-generated learning journey designed around your current
              Skill Twin, role requirements and remaining competency gaps.
            </p>

            <div className="hero-actions">
              <button className="primary-btn">
                Start Learning →
              </button>

              <button className="secondary-btn">
                View My Skill Twin
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="journey-orbit">
              <div className="orbit-line"></div>

              <div className="orbit-center">
                <div className="sparkle">✦</div>
                <strong>AI</strong>
                <span>Learning Path</span>
              </div>

              <div className="orbit-node node-one">
                <span>01</span>
                Assessment
              </div>

              <div className="orbit-node node-two">
                <span>02</span>
                Skill Gap
              </div>

              <div className="orbit-node node-three">
                <span>03</span>
                Learning
              </div>

              <div className="orbit-node node-four">
                <span>04</span>
                Reassessment
              </div>
            </div>
          </div>

        </section>

        {/* PROFILE SUMMARY */}
        <section className="profile-summary" id="overview">

          <div className="profile-main">
            <span className="section-label">LEARNING PROFILE</span>

            <h2>Built around your competency gaps</h2>

            <p>
              Your learning path is continuously personalised using your
              assessment results, completed learning and the competency
              requirements of your target role.
            </p>
          </div>

          <div className="profile-stats">

            <div className="stat">
              <span>ROLE</span>
              <strong>Statistical Investigator</strong>
            </div>

            <div className="stat">
              <span>ROLE READINESS</span>
              <strong>84%</strong>
            </div>

            <div className="stat">
              <span>SKILL GAPS</span>
              <strong>4</strong>
            </div>

            <div className="stat">
              <span>ESTIMATED PATH</span>
              <strong>13 hrs</strong>
            </div>

          </div>

        </section>

        {/* AI INSIGHT */}
        <section className="ai-insight">

          <div className="ai-icon">✦</div>

          <div className="ai-content">
            <span className="section-label">AI RECOMMENDATION</span>

            <h2>
              Your highest-impact learning sequence
            </h2>

            <p>
              Based on your updated Skill Twin, Data Interpretation is your
              highest-priority competency. Strengthening this skill first is
              expected to give you the strongest improvement toward your role
              readiness target.
            </p>

            <div className="ai-tags">
              <span>Role relevant</span>
              <span>High impact</span>
              <span>Personalised</span>
            </div>
          </div>

          <div className="impact-score">
            <span>EXPECTED IMPACT</span>
            <strong>+6%</strong>
            <small>Role readiness</small>
          </div>

        </section>

        {/* PATH HEADER */}
        <section className="path-header" id="path">

          <div>
            <span className="section-label">YOUR JOURNEY</span>
            <h2>Recommended Learning Path</h2>

            <p>
              Follow the sequence below to systematically close your remaining
              skill gaps.
            </p>
          </div>

          <div className="path-progress">
            <div className="progress-top">
              <span>Overall progress</span>
              <strong>34%</strong>
            </div>

            <div className="progress-bar">
              <div></div>
            </div>

            <small>1 of 4 modules completed</small>
          </div>

        </section>

        {/* LEARNING PATH */}
        <section className="learning-path">

          <div className="path-line"></div>

          {learningModules.map((module) => (
            <article
              className={`module-card ${
                module.status === "Completed"
                  ? "completed"
                  : module.status === "In Progress"
                  ? "active"
                  : ""
              }`}
              key={module.number}
            >

              <div className="module-number">
                {module.status === "Completed" ? "✓" : module.number}
              </div>

              <div className="module-body">

                <div className="module-top">

                  <div>
                    <div className="module-meta">
                      <span className="skill-name">
                        {module.skill}
                      </span>

                      <span
                        className={`priority-tag ${module.level
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {module.level}
                      </span>
                    </div>

                    <h3>{module.title}</h3>
                  </div>

                  <div className="module-duration">
                    <span>◷</span>
                    {module.duration}
                  </div>

                </div>

                <p className="module-description">
                  {module.description}
                </p>

                <div className="topics">

                  {module.topics.map((topic) => (
                    <span key={topic}>{topic}</span>
                  ))}

                </div>

                <div className="module-footer">

                  <div className="module-progress">

                    <div className="module-progress-label">
                      <span>{module.status}</span>
                      <strong>{module.progress}%</strong>
                    </div>

                    <div className="module-track">
                      <div
                        style={{
                          width: `${module.progress}%`,
                        }}
                      ></div>
                    </div>

                  </div>

                  <button
                    className={
                      module.status === "Completed"
                        ? "completed-btn"
                        : "module-btn"
                    }
                  >
                    {module.status === "Completed"
                      ? "Review Module"
                      : module.status === "In Progress"
                      ? "Continue Learning"
                      : "Start Module"}
                    {" →"}
                  </button>

                </div>

              </div>

            </article>
          ))}

        </section>

        {/* SKILL GAP MAP */}
        <section className="section" id="skills">

          <div className="section-heading">
            <span className="section-label">SKILL GAP MAPPING</span>

            <h2>
              How your learning maps to your skill gaps
            </h2>

            <p>
              Every recommendation is connected to a competency in your
              Skill Twin.
            </p>
          </div>

          <div className="mapping-card">

            <div className="mapping-row heading">
              <span>Competency</span>
              <span>Current</span>
              <span>Target</span>
              <span>Gap</span>
              <span>Learning</span>
            </div>

            <div className="mapping-row">
              <strong>Data Interpretation</strong>

              <span>70%</span>

              <span>85%</span>

              <span className="gap-high">15 pts</span>

              <span>
                <b>2 modules</b>
              </span>
            </div>

            <div className="mapping-row">
              <strong>Data Visualization</strong>

              <span>68%</span>

              <span>82%</span>

              <span className="gap-high">14 pts</span>

              <span>
                <b>1 module</b>
              </span>
            </div>

            <div className="mapping-row">
              <strong>Statistical Methods</strong>

              <span>72%</span>

              <span>85%</span>

              <span className="gap-medium">13 pts</span>

              <span>
                <b>1 module</b>
              </span>
            </div>

            <div className="mapping-row">
              <strong>Statistical Computing</strong>

              <span>70%</span>

              <span>80%</span>

              <span className="gap-medium">10 pts</span>

              <span>
                <b>1 module</b>
              </span>
            </div>

          </div>

        </section>

        {/* LEARNING STRATEGY */}
        <section className="strategy-section">

          <div className="strategy-content">

            <span className="section-label">
              WHY THIS ORDER?
            </span>

            <h2>
              Your learning path adapts as you improve.
            </h2>

            <p>
              SkillSaarthi doesn't simply recommend a fixed list of courses.
              Your learning sequence changes as new assessment evidence becomes
              available.
            </p>

            <div className="strategy-points">

              <div>
                <span>01</span>
                <div>
                  <strong>Learn</strong>
                  <p>Complete targeted learning activities.</p>
                </div>
              </div>

              <div>
                <span>02</span>
                <div>
                  <strong>Apply</strong>
                  <p>Strengthen the competency through practice.</p>
                </div>
              </div>

              <div>
                <span>03</span>
                <div>
                  <strong>Reassess</strong>
                  <p>Measure your updated demonstrated proficiency.</p>
                </div>
              </div>

              <div>
                <span>04</span>
                <div>
                  <strong>Adapt</strong>
                  <p>AI updates your next learning recommendation.</p>
                </div>
              </div>

            </div>

          </div>

          <div className="strategy-visual">

            <div className="cycle-card">

              <div className="cycle-circle">
                <div className="cycle-center">
                  <span>AI</span>
                  <strong>ADAPT</strong>
                </div>

                <div className="cycle-point p1">Learn</div>
                <div className="cycle-point p2">Apply</div>
                <div className="cycle-point p3">Assess</div>
                <div className="cycle-point p4">Adapt</div>
              </div>

            </div>

          </div>

        </section>

        {/* COMPLETION */}
        <section className="completion-card">

          <div>
            <span className="section-label">NEXT MILESTONE</span>

            <h2>
              Complete your next learning module
            </h2>

            <p>
              Continue with Advanced Data Interpretation to make the next
              measurable improvement in your Skill Twin.
            </p>
          </div>

          <div className="completion-right">
            <div className="completion-number">
              <strong>35%</strong>
              <span>path completed</span>
            </div>

            <button className="primary-btn">
              Continue Learning →
            </button>
          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer>

        <div className="footer-brand">
          <div className="brand-logo">✦</div>

          <div>
            <strong>SkillSaarthi</strong>
            <span>AI-powered competency development</span>
          </div>
        </div>

        <div className="footer-note">
          Learning recommendations are personalised estimates based on
          available assessment and learning evidence.
        </div>

      </footer>

    </div>
  );
}

export default App;