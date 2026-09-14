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
    description:
      "Build a dynamic digital representation of your skills, competencies and learning progress.",
  },
  {
    icon: "◈",
    title: "Skill Gap Analysis",
    description:
      "Identify the competencies you need to strengthen for your current role.",
  },
  {
    icon: "◎",
    title: "Personalised Learning",
    description:
      "Get an adaptive learning path based on your individual skill gaps and goals.",
  },
  {
    icon: "✓",
    title: "Continuous Assessment",
    description:
      "Measure your progress continuously through adaptive assessments and quizzes.",
  },
];

const steps = [
  {
    number: "01",
    title: "Create your profile",
    description:
      "Tell us about your role, responsibilities and current experience.",
  },
  {
    number: "02",
    title: "Assess your skills",
    description:
      "Complete a short AI-powered assessment to understand your current competencies.",
  },
  {
    number: "03",
    title: "Discover your skill gaps",
    description:
      "Our AI identifies the skills that need improvement for your target role.",
  },
  {
    number: "04",
    title: "Follow your learning path",
    description:
      "Learn through a personalised pathway and track your progress over time.",
  },
];

function SkillTwinNavigator() {
  const goToAuth = () => {
    window.location.href = "/auth";
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="navigator-page">

      {/* =========================
          NAVBAR
      ========================= */}

      <header className="navigator-navbar">

        <button
          className="navigator-brand"
          onClick={() => (window.location.href = "/")}
        >
          <div className="navigator-logo">
            <span>◉</span>
          </div>

          <div className="navigator-brand-text">
            <div className="navigator-brand-name">
              SkillSaarthi
            </div>

            <div className="navigator-powered">
              POWERED BY XCEED
            </div>
          </div>
        </button>

        <nav className="navigator-nav-links">
          <button
            onClick={() => scrollToSection("features")}
          >
            Features
          </button>

          <button
            onClick={() => scrollToSection("how-it-works")}
          >
            How it works
          </button>

          <button
            onClick={() => scrollToSection("demo")}
          >
            Demo
          </button>
        </nav>

        <div className="navigator-nav-actions">

          <button
            className="navigator-signin"
            onClick={goToAuth}
          >
            Sign in
          </button>

          <button
            className="navigator-get-started"
            onClick={goToAuth}
          >
            Get started
          </button>

        </div>

      </header>

      {/* =========================
          HERO
      ========================= */}

      <main>

        <section className="navigator-hero">

          <div className="navigator-hero-content">

            <div className="navigator-badge">
              <span>✦</span>
              AI-Powered Learning Platform
            </div>

            <h1>
              Your skills.
              <br />
              <span>Your digital twin.</span>
            </h1>

            <p className="navigator-hero-description">
              SkillSaarthi creates an AI-powered Skill Twin that
              understands your capabilities, identifies skill gaps
              and builds a personalised learning journey for your
              role.
            </p>

            <div className="navigator-hero-actions">

              <button
                className="navigator-primary-button"
                onClick={goToAuth}
              >
                Try the demo dashboard
                <span>→</span>
              </button>

              <button
                className="navigator-secondary-button"
                onClick={goToAuth}
              >
                Create an account
              </button>

            </div>

            <div className="navigator-trust">
              <span>✓</span>
              Built for India's civil servants
              <span className="trust-dot">•</span>
              Powered by AI
            </div>

          </div>

          {/* Skill Twin Preview */}

          <div className="navigator-preview-wrapper">

            <div className="navigator-preview-card">

              <div className="preview-header">

                <div>
                  <span className="preview-label">
                    YOUR AI SKILL TWIN
                  </span>

                  <h3>
                    Statistical Investigator
                  </h3>
                </div>

                <div className="preview-status">
                  <span></span>
                  Active
                </div>

              </div>

              <div className="preview-readiness">

                <div className="readiness-circle">
                  <div className="readiness-number">
                    72%
                  </div>

                  <div className="readiness-text">
                    Role readiness
                  </div>
                </div>

                <div className="readiness-content">
                  <span className="preview-small-label">
                    OVERALL READINESS
                  </span>

                  <strong>
                    Good foundation
                  </strong>

                  <p>
                    Your profile shows strong analytical
                    capabilities with opportunities to grow
                    in survey design and statistical methods.
                  </p>
                </div>

              </div>

              <div className="preview-divider"></div>

              <div className="preview-skills-header">
                <span>Core competencies</span>
                <span>Score</span>
              </div>

              <div className="preview-skills">

                {competencies.map((skill) => (
                  <div
                    className="preview-skill"
                    key={skill.name}
                  >
                    <div className="preview-skill-name">
                      {skill.name}
                    </div>

                    <div className="preview-skill-bar">
                      <div
                        className="preview-skill-fill"
                        style={{
                          width: `${skill.score}%`,
                        }}
                      ></div>
                    </div>

                    <div className="preview-score">
                      {skill.score}%
                    </div>
                  </div>
                ))}

              </div>

              <div className="preview-insight">

                <div className="insight-icon">
                  ✦
                </div>

                <div>
                  <strong>
                    AI insight
                  </strong>

                  <p>
                    Focus on Survey Design next to improve
                    your role readiness by an estimated 8%.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =========================
            FEATURES
        ========================= */}

        <section
          id="features"
          className="navigator-features-section"
        >

          <div className="navigator-section-heading">

            <div className="navigator-section-badge">
              WHAT MAKES SKILLSAARTHI DIFFERENT
            </div>

            <h2>
              One platform for your
              <span> entire learning journey</span>
            </h2>

            <p>
              From understanding your current skills to
              continuously improving them, SkillSaarthi
              keeps your learning journey personalised.
            </p>

          </div>

          <div className="navigator-feature-grid">

            {features.map((feature) => (
              <div
                className="navigator-feature-card"
                key={feature.title}
              >

                <div className="feature-icon">
                  {feature.icon}
                </div>

                <h3>
                  {feature.title}
                </h3>

                <p>
                  {feature.description}
                </p>

              </div>
            ))}

          </div>

        </section>

        {/* =========================
            HOW IT WORKS
        ========================= */}

        <section
          id="how-it-works"
          className="navigator-how-section"
        >

          <div className="navigator-section-heading">

            <div className="navigator-section-badge">
              HOW IT WORKS
            </div>

            <h2>
              From profile to
              <span> progress</span>
            </h2>

            <p>
              A simple, AI-powered journey that adapts to
              your skills and learning needs.
            </p>

          </div>

          <div className="navigator-steps">

            {steps.map((step, index) => (
              <div
                className="navigator-step"
                key={step.number}
              >

                <div className="step-number">
                  {step.number}
                </div>

                <div className="step-content">

                  <h3>
                    {step.title}
                  </h3>

                  <p>
                    {step.description}
                  </p>

                </div>

                {index < steps.length - 1 && (
                  <div className="step-arrow">
                    →
                  </div>
                )}

              </div>
            ))}

          </div>

        </section>

        {/* =========================
            DEMO
        ========================= */}

        <section
          id="demo"
          className="navigator-demo-section"
        >

          <div className="navigator-demo-content">

            <div className="navigator-demo-badge">
              EXPERIENCE THE PLATFORM
            </div>

            <h2>
              See your Skill Twin
              <br />
              <span>in action</span>
            </h2>

            <p>
              Explore a sample Statistical Investigator
              profile and see how SkillSaarthi transforms
              competency data into personalised learning
              recommendations.
            </p>

            <button
              className="navigator-demo-button"
              onClick={goToAuth}
            >
              <span>▷</span>
              Continue with Demo
              <span>→</span>
            </button>

          </div>

          <div className="navigator-demo-visual">

            <div className="demo-glow"></div>

            <div className="demo-mini-card">

              <div className="mini-card-top">
                <span>
                  SKILLSAARTHI
                </span>

                <span className="mini-live">
                  ● LIVE
                </span>
              </div>

              <div className="mini-profile">

                <div className="mini-avatar">
                  S
                </div>

                <div>
                  <strong>
                    Statistical Investigator
                  </strong>

                  <span>
                    Ministry of Statistics
                  </span>
                </div>

              </div>

              <div className="mini-stat-grid">

                <div>
                  <strong>72%</strong>
                  <span>Readiness</span>
                </div>

                <div>
                  <strong>4</strong>
                  <span>Skill gaps</span>
                </div>

                <div>
                  <strong>13h</strong>
                  <span>Learning path</span>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =========================
            FINAL CTA
        ========================= */}

        <section className="navigator-final-cta">

          <div>

            <div className="navigator-section-badge">
              START YOUR JOURNEY
            </div>

            <h2>
              Ready to build
              <br />
              your <span>Skill Twin?</span>
            </h2>

            <p>
              Discover your strengths, close your skill gaps
              and grow with a learning journey designed
              specifically for you.
            </p>

          </div>

          <button
            className="navigator-final-button"
            onClick={goToAuth}
          >
            Get started
            <span>→</span>
          </button>

        </section>

      </main>

      {/* =========================
          FOOTER
      ========================= */}

      <footer className="navigator-footer">

        <div className="footer-brand">

          <div className="footer-logo">
            ◉
          </div>

          <div>
            <strong>
              SkillSaarthi
            </strong>

            <span>
              Powered by XCEED
            </span>
          </div>

        </div>

        <div className="footer-center">
          AI-enabled personalised learning for
          Karmayogis
        </div>

        <div className="footer-right">
          SIH 2026 Prototype
        </div>

      </footer>

    </div>
  );
}

export default SkillTwinNavigator;