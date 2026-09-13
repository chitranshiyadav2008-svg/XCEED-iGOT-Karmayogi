import React from "react";
import "./skillTwinNavigator.css";

const competencies = [
  {
    name: "Data Analysis",
    score: 82,
  },
  {
    name: "Statistical Methods",
    score: 68,
  },
  {
    name: "Survey Design",
    score: 54,
  },
  {
    name: "Data Visualization",
    score: 61,
  },
];

const features = [
  {
    icon: "✦",
    title: "AI Skill Twin",
    text: "A living digital model of your competencies, updated with every assessment and course you finish.",
  },
  {
    icon: "◎",
    title: "Role Readiness Score",
    text: "See exactly how prepared you are for your current designation and the next one up.",
  },
  {
    icon: "⌁",
    title: "Gap Detection",
    text: "Compare your proficiency against the official competency framework for your role.",
  },
  {
    icon: "→",
    title: "Learning Pathways",
    text: "Ordered, time-boxed recommendations so you always know what to learn next.",
  },
  {
    icon: "◫",
    title: "Progress Analytics",
    text: "Track growth over time and export department-level readiness summaries.",
  },
  {
    icon: "◆",
    title: "Built for Government",
    text: "Employee-ID based access, department mapping and privacy-first data handling.",
  },
];

const steps = [
  {
    number: "01",
    title: "Create your profile",
    text: "Department, role and years of experience.",
  },
  {
    number: "02",
    title: "Map your skills",
    text: "Self-rate proficiency, then take a short assessment.",
  },
  {
    number: "03",
    title: "Grow with guidance",
    text: "Follow your pathway and watch readiness rise.",
  },
];

function SkillTwinNavigator() {
  return (
    <div className="navigator-page">

      {/* NAVBAR */}
      <nav className="navigator-navbar">

        <div className="navigator-brand">

          <div className="navigator-logo">
            ✦
          </div>

          <div>
            <div className="navigator-brand-name">
              SkillSaarthi
            </div>

            <div className="navigator-brand-sub">
              Powered by Xceed
            </div>
          </div>

        </div>

        <div className="navigator-nav-links">

          <a href="#navigator-features">
            Features
          </a>

          <a href="#navigator-how">
            How it works
          </a>

          <a href="#navigator-demo">
            Demo
          </a>

        </div>

        <div className="navigator-nav-buttons">

          <button className="navigator-signin">
            Sign in
          </button>

          <button className="navigator-start">
            Get started
          </button>

        </div>

      </nav>


      {/* HERO */}
      <section className="navigator-hero">

        <div className="navigator-hero-content">

          <div className="navigator-label">
            <span></span>
            SMART INDIA HACKATHON PROTOTYPE
          </div>

          <h1>
            Know Your Skills.
            <br />

            Discover Your Gaps.
            <br />

            <em>Learn What Matters.</em>
          </h1>

          <p className="navigator-hero-description">
            SkillSaarthi is your AI-powered companion for role-based
            competency development. It builds a skill twin of every
            officer, benchmarks it against the competency framework for
            their designation, and turns the difference into a clear
            learning plan.
          </p>

          <div className="navigator-hero-buttons">

            <button className="navigator-primary-button">
              Try the demo dashboard
              <span>→</span>
            </button>

            <button className="navigator-secondary-button">
              Create an account
            </button>

          </div>


          {/* STATS */}
          <div className="navigator-stats">

            <div className="navigator-stat">
              <strong>7</strong>
              <span>core competencies</span>
            </div>

            <div className="navigator-stat">
              <strong>3</strong>
              <span>proficiency levels</span>
            </div>

            <div className="navigator-stat">
              <strong>1</strong>
              <span>readiness score</span>
            </div>

          </div>

        </div>


        {/* SKILL TWIN PREVIEW */}
        <div className="navigator-preview-area">

          <div className="navigator-preview">

            <div className="navigator-preview-header">

              <strong>
                Skill twin preview
              </strong>

              <span>
                <i></i>
                Live
              </span>

            </div>


            <div className="navigator-role">

              <div>

                <small>
                  ROLE
                </small>

                <strong>
                  Statistical Investigator
                </strong>

              </div>

              <div className="navigator-readiness">

                <small>
                  READINESS
                </small>

                <strong>
                  72%
                </strong>

              </div>

            </div>


            <div className="navigator-skills">

              {competencies.map((skill) => (

                <div
                  className="navigator-skill"
                  key={skill.name}
                >

                  <div className="navigator-skill-top">

                    <span>
                      {skill.name}
                    </span>

                    <strong>
                      {skill.score}%
                    </strong>

                  </div>

                  <div className="navigator-skill-track">

                    <div
                      style={{
                        width: `${skill.score}%`,
                      }}
                    />

                  </div>

                </div>

              ))}

            </div>


            <div className="navigator-preview-footer">

              <span>
                AI Skill Twin
              </span>

              <span>
                Updated today
              </span>

            </div>

          </div>


          {/* FLOATING CARD 1 */}
          <div className="navigator-floating-card navigator-floating-one">

            <div className="navigator-floating-icon">
              ✦
            </div>

            <div>
              <strong>
                AI Skill Twin
              </strong>

              <small>
                Continuously evolving
              </small>
            </div>

          </div>


          {/* FLOATING CARD 2 */}
          <div className="navigator-floating-card navigator-floating-two">

            <strong>
              +12%
            </strong>

            <small>
              Readiness growth
            </small>

          </div>

        </div>

      </section>


      {/* FEATURES */}
      <section
        className="navigator-features"
        id="navigator-features"
      >

        <div className="navigator-section-intro">

          <span>
            BUILT FOR COMPETENCY DEVELOPMENT
          </span>

          <h2>
            Everything a competency cell needs
          </h2>

          <p>
            Designed with departmental training officers, built around
            the way government roles actually progress.
          </p>

        </div>


        <div className="navigator-feature-grid">

          {features.map((feature) => (

            <div
              className="navigator-feature-card"
              key={feature.title}
            >

              <div className="navigator-feature-icon">
                {feature.icon}
              </div>

              <h3>
                {feature.title}
              </h3>

              <p>
                {feature.text}
              </p>

              <span className="navigator-feature-arrow">
                →
              </span>

            </div>

          ))}

        </div>

      </section>


      {/* HOW IT WORKS */}
      <section
        className="navigator-how"
        id="navigator-how"
      >

        <div className="navigator-how-header">

          <div>

            <span>
              SIMPLE. PERSONAL. CONTINUOUS.
            </span>

            <h2>
              How it works
            </h2>

          </div>

          <p>
            From your current skills to a clear development path,
            SkillSaarthi closes the loop between assessment and learning.
          </p>

        </div>


        <div className="navigator-steps">

          {steps.map((step, index) => (

            <div
              className="navigator-step"
              key={step.number}
            >

              <div className="navigator-step-number">
                {step.number}
              </div>

              {index < steps.length - 1 && (
                <div className="navigator-step-line"></div>
              )}

              <h3>
                {step.title}
              </h3>

              <p>
                {step.text}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* DEMO */}
      <section
        className="navigator-demo"
        id="navigator-demo"
      >

        <div className="navigator-demo-card">

          <div className="navigator-demo-content">

            <span>
              EXPERIENCE THE SKILL TWIN
            </span>

            <h2>
              See a Statistical Investigator's skill twin
            </h2>

            <p>
              Open the demo session — no sign-up, realistic competency
              data, full dashboard.
            </p>

            <button>
              Continue with Demo
              <span>→</span>
            </button>

          </div>


          <div className="navigator-demo-visual">

            <div className="navigator-demo-circle">

              <div>

                <span>
                  READINESS
                </span>

                <strong>
                  72%
                </strong>

                <small>
                  Statistical Investigator
                </small>

              </div>

            </div>


            <div className="navigator-mini-card navigator-mini-one">

              Data Analysis

              <strong>
                82%
              </strong>

            </div>


            <div className="navigator-mini-card navigator-mini-two">

              Survey Design

              <strong>
                54%
              </strong>

            </div>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="navigator-footer">

        <div className="navigator-footer-brand">

          <div className="navigator-logo">
            ✦
          </div>

          <div>

            <strong>
              SkillSaarthi
            </strong>

            <span>
              AI competency development
            </span>

          </div>

        </div>


        <div className="navigator-footer-text">

          SkillSaarthi · SIH prototype

          <br />

          Demo data only. Not an official government service.

        </div>

      </footer>

    </div>
  );
}

export default SkillTwinNavigator;