import React from "react";
import "./updatedSkillTwin.css";

const skills = [
  {
    name: "Survey Design",
    before: 54,
    current: 72,
    target: 80,
    improvement: 18,
    highlight: true,
  },
  {
    name: "Statistical Computing",
    before: 58,
    current: 70,
    target: 80,
    improvement: 12,
  },
  {
    name: "Data Visualization",
    before: 61,
    current: 68,
    target: 82,
    improvement: 7,
  },
  {
    name: "Data Interpretation",
    before: 64,
    current: 70,
    target: 85,
    improvement: 6,
  },
  {
    name: "Statistical Methods",
    before: 68,
    current: 72,
    target: 85,
    improvement: 4,
  },
  {
    name: "Data Analysis",
    before: 82,
    current: 84,
    target: 90,
    improvement: 2,
  },
];

const gaps = [
  {
    name: "Data Interpretation",
    current: 70,
    target: 85,
    priority: "HIGH",
  },
  {
    name: "Data Visualization",
    current: 68,
    target: 82,
    priority: "HIGH",
  },
  {
    name: "Statistical Methods",
    current: 72,
    target: 85,
    priority: "MEDIUM",
  },
  {
    name: "Statistical Computing",
    current: 70,
    target: 80,
    priority: "MEDIUM",
  },
  {
    name: "Survey Design",
    current: 72,
    target: 80,
    priority: "LOW",
  },
  {
    name: "Data Analysis",
    current: 84,
    target: 90,
    priority: "LOW",
  },
];

const activities = [
  {
    date: "Today",
    text: "Reassessment completed",
  },
  {
    date: "Today",
    text: "Survey Design updated: 54% → 72%",
  },
  {
    date: "Today",
    text: "Statistical Computing updated: 58% → 70%",
  },
  {
    date: "Yesterday",
    text: 'Completed "Fundamentals of Survey Design & Sampling"',
  },
  {
    date: "2 days ago",
    text: "Personalised Learning Path generated",
  },
];

function UpdatedSkillTwin() {
  return (
    <div className="skill-twin-page">

      {/* NAVBAR */}
      <header className="st-navbar">

        <div className="st-brand">
          <div className="st-logo">✦</div>

          <div>
            <div className="st-brand-name">
              SkillSaarthi
            </div>

            <div className="st-brand-sub">
              Competency AI
            </div>
          </div>
        </div>

        <div className="st-nav-right">

          <span className="st-ai-badge">
            AI Skill Twin
          </span>

          <div className="st-avatar">
            C
          </div>

        </div>

      </header>


      <main className="st-container">

        {/* PAGE HEADER */}

        <section className="st-page-header">

          <div>

            <div className="st-eyebrow">
              AI SKILL TWIN UPDATED
            </div>

            <h1>
              Your Updated Skill Twin
            </h1>

            <p>
              Your Skill Twin has evolved based on your recent
              learning and assessment performance.
            </p>

          </div>

          <div className="st-updated">

            <span className="st-live-dot"></span>

            Updated just now

          </div>

        </section>


        {/* ROLE INFORMATION */}

        <section className="st-role-card">

          <div className="st-role-item">

            <span>ROLE</span>

            <strong>
              Statistical Investigator
            </strong>

          </div>


          <div className="st-role-item">

            <span>DEPARTMENT</span>

            <strong>
              Official Statistics
            </strong>

          </div>


          <div className="st-role-item">

            <span>LAST UPDATED</span>

            <strong>
              Just now
            </strong>

          </div>

        </section>


        {/* READINESS CARD */}

        <section className="st-readiness">

          <div className="st-readiness-content">

            <div>

              <div className="st-dark-label">
                ROLE READINESS
              </div>

              <h2>
                Updated role readiness
              </h2>

              <p>
                Based on your latest reassessment. This is an
                estimated readiness indicator, not an official
                employment evaluation.
              </p>

            </div>


            <div className="st-score">

              <span className="st-old-score">
                72%
              </span>

              <span className="st-arrow">
                →
              </span>

              <span className="st-new-score">
                84%
              </span>

            </div>

          </div>


          <div className="st-readiness-progress">

            <div className="st-progress-track">

              <div className="st-progress-before"></div>

              <div className="st-progress-improvement"></div>

            </div>


            <div className="st-progress-labels">

              <span>
                Previous 72%
              </span>

              <span>
                Updated 84%
              </span>

            </div>

          </div>


          <div className="st-readiness-gain">

            <strong>
              +12%
            </strong>

            <span>
              Role Readiness
            </span>

          </div>

        </section>


        {/* AI INSIGHT */}

        <section className="st-insight">

          <div className="st-insight-icon">
            ✦
          </div>


          <div className="st-insight-content">

            <div className="st-green-label">
              AI INSIGHT
            </div>

            <h2>
              Your Skill Twin has improved
            </h2>

            <p>
              Your recent learning in Survey Design and
              Statistical Computing has strengthened two of
              your priority competency areas. Your largest
              previous skill gap has reduced significantly.
            </p>


            <div className="st-insight-points">

              <span>
                ✓ Survey Design improved
              </span>

              <span>
                ✓ Statistical Computing improved
              </span>

              <span>
                ✓ Role readiness increased
              </span>

            </div>

          </div>


          <button className="st-outline-btn">
            View My Learning Impact →
          </button>

        </section>


        {/* SKILL CHANGES */}

        <section className="st-section">

          <div className="st-section-heading">

            <div className="st-section-label">
              PROGRESS
            </div>

            <h2>
              How Your Skills Changed
            </h2>

            <p>
              Your skill scores compared with your previous
              assessment.
            </p>

          </div>


          <div className="st-skill-grid">

            {skills.map((skill) => (

              <div
                className="st-skill-card"
                key={skill.name}
              >

                <div className="st-skill-title">

                  <strong>
                    {skill.name}
                  </strong>

                  {skill.highlight && (
                    <span className="st-gain-tag">
                      Biggest gain
                    </span>
                  )}

                </div>


                <div className="st-skill-values">

                  <span>
                    Before {skill.before}%
                  </span>

                  <span>
                    Current {skill.current}%
                  </span>

                  <span>
                    Target {skill.target}%
                  </span>

                </div>


                <div className="st-skill-bar">

                  <div
                    className="st-skill-current"
                    style={{
                      width: `${skill.current}%`,
                    }}
                  ></div>

                  <div
                    className="st-skill-target"
                    style={{
                      left: `${skill.target}%`,
                    }}
                  ></div>

                </div>


                <div className="st-skill-bottom">

                  <span>
                    Previous
                  </span>

                  <span>
                    Current
                  </span>

                  <strong>
                    +{skill.improvement}
                  </strong>

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* CURRENT PROFILE */}

        <section className="st-section">

          <div className="st-section-heading">

            <div className="st-section-label">
              SKILL PROFILE
            </div>

            <h2>
              Your Current Skill Profile
            </h2>

          </div>


          <div className="st-profile-card">

            <div className="st-profile-legend">

              <span>
                <i className="st-current-dot"></i>
                Current Skill
              </span>

              <span>
                <i className="st-required-dot"></i>
                Required Skill
              </span>

            </div>


            <div className="st-profile-main">

              <div className="st-profile-circle">
                72%
              </div>


              <div className="st-profile-content">

                <div className="st-green-label">
                  BIGGEST IMPROVEMENT
                </div>

                <h3>
                  Survey Design
                </h3>


                <div className="st-before-after">

                  <div>
                    <small>Before</small>
                    <strong>54%</strong>
                  </div>

                  <span className="st-profile-arrow">
                    →
                  </span>

                  <div>
                    <small>Now</small>
                    <strong>72%</strong>
                  </div>

                  <div>
                    <small>Improvement</small>
                    <strong className="st-green-number">
                      +18
                    </strong>
                  </div>

                </div>


                <p>
                  This was your highest-priority skill gap.
                  Completing the recommended learning path
                  and performing well in reassessment
                  significantly improved your demonstrated
                  proficiency.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* REMAINING GAPS */}

        <section className="st-section">

          <div className="st-section-heading">

            <div className="st-section-label">
              REMAINING GAPS
            </div>

            <h2>
              What's Still Left to Improve?
            </h2>

            <p>
              Sorted by the largest remaining gap to your
              role target.
            </p>

          </div>


          <div className="st-gap-list">

            {gaps.map((gap) => {

              const remaining =
                gap.target - gap.current;

              return (

                <div
                  className="st-gap-row"
                  key={gap.name}
                >

                  <div className="st-gap-name">

                    <strong>
                      {gap.name}
                    </strong>

                    <span
                      className={`st-priority ${gap.priority.toLowerCase()}`}
                    >
                      {gap.priority}
                    </span>

                  </div>


                  <div className="st-gap-progress">

                    <div className="st-gap-track">

                      <div
                        className="st-gap-current"
                        style={{
                          width: `${(gap.current / gap.target) * 100}%`,
                        }}
                      ></div>

                    </div>

                  </div>


                  <div className="st-gap-score">

                    <strong>
                      {gap.current}%
                    </strong>

                    <span>
                      Target {gap.target}%
                    </span>

                  </div>


                  <div className="st-gap-points">

                    Gap:
                    <strong>
                      {" "}
                      {remaining} points
                    </strong>

                  </div>

                </div>

              );

            })}

          </div>

        </section>


        {/* AI RECOMMENDATION */}

        <section className="st-recommendation">

          <div className="st-recommendation-left">

            <div className="st-section-label">
              AI RECOMMENDATION
            </div>

            <h2>
              What Should You Learn Next?
            </h2>

            <p>
              Generated from your updated Skill Twin.
            </p>


            <div className="st-recommendation-text">

              Your Survey Design gap has reduced
              significantly. Your next priority should now
              be{" "}
              <strong>
                Data Interpretation
              </strong>
              {" "}
              because it has the largest remaining
              role-relevant competency gap.

            </div>


            <button className="st-primary-btn">
              View Updated Learning Path →
            </button>

          </div>


          <div className="st-recommendation-card">

            <span>
              RECOMMENDED SKILL
            </span>

            <h3>
              Data Interpretation
            </h3>


            <div className="st-recommendation-stats">

              <div>
                <small>Current</small>
                <strong>70%</strong>
              </div>

              <div>
                <small>Target</small>
                <strong>85%</strong>
              </div>

              <div>
                <small>Remaining Gap</small>
                <strong>15 points</strong>
              </div>

              <div>
                <small>Expected Impact</small>
                <strong className="st-green-number">
                  +6% readiness
                </strong>
              </div>

            </div>

          </div>

        </section>


        {/* LEARNING IMPACT */}

        <section className="st-section">

          <div className="st-section-heading">

            <div className="st-section-label">
              CLOSED LOOP
            </div>

            <h2>
              Your Learning Impact
            </h2>

            <p>
              The closed loop behind your updated Skill Twin.
            </p>

          </div>


          <div className="st-impact-grid">

            <div>
              <span>SKILLS IMPROVED</span>
              <strong>4</strong>
            </div>

            <div>
              <span>COURSES COMPLETED</span>
              <strong>2</strong>
            </div>

            <div>
              <span>ASSESSMENT IMPROVEMENT</span>
              <strong>+14%</strong>
            </div>

            <div>
              <span>ROLE READINESS</span>
              <strong>72% → 84%</strong>
            </div>

          </div>


          <div className="st-timeline">

            {[
              "Initial Assessment",
              "Skill Gap Identified",
              "Personalised Learning",
              "Course Completion",
              "Reassessment",
              "Skill Twin Updated",
            ].map((item, index) => (

              <div
                className="st-timeline-item"
                key={item}
              >

                <div className="st-timeline-number">
                  {index + 1}
                </div>

                <span>
                  {item}
                </span>

              </div>

            ))}

          </div>

        </section>


        {/* ACTIVITY */}

        <section className="st-section">

          <div className="st-section-heading">

            <div className="st-section-label">
              RECENT ACTIVITY
            </div>

            <h2>
              Skill Twin Activity
            </h2>

          </div>


          <div className="st-activity-card">

            {activities.map((activity, index) => (

              <div
                className="st-activity-row"
                key={index}
              >

                <div className="st-activity-dot"></div>

                <div className="st-activity-date">
                  {activity.date}
                </div>

                <div className="st-activity-text">
                  {activity.text}
                </div>

              </div>

            ))}

          </div>

        </section>


        {/* EXPLAINABLE AI */}

        <section className="st-explainable">

          <div className="st-explain-header">

            <div className="st-explain-icon">
              ✦
            </div>

            <div>

              <div className="st-dark-label">
                TRANSPARENCY
              </div>

              <h2>
                How did SkillSaarthi update your Skill Twin?
              </h2>

              <p>
                Explainable AI
              </p>

            </div>

          </div>


          <div className="st-explain-grid">

            <div className="st-explain-card">

              <div className="st-explain-number">
                01
              </div>

              <h3>
                Learning Evidence
              </h3>

              <p>
                Your completed courses and learning activity
                were recorded as evidence of learning.
              </p>

            </div>


            <div className="st-explain-card">

              <div className="st-explain-number">
                02
              </div>

              <h3>
                Assessment Evidence
              </h3>

              <p>
                Your reassessment performance demonstrated
                your updated proficiency.
              </p>

            </div>


            <div className="st-explain-card">

              <div className="st-explain-number">
                03
              </div>

              <h3>
                Skill Twin Update
              </h3>

              <p>
                The system combined the evidence to update
                your competency profile.
              </p>

            </div>

          </div>


          <div className="st-disclaimer">

            These scores are evidence-based estimates of
            demonstrated proficiency. They cannot perfectly
            measure real-world ability on the job.

          </div>

        </section>


        {/* FINAL CTA */}

        <section className="st-footer-cta">

          <div>

            <div className="st-section-label">
              KEEP BUILDING
            </div>

            <h2>
              Keep Building Your Skills
            </h2>

            <p>
              Your Skill Twin is continuously evolving.
              Continue learning to move closer to your role
              competency target.
            </p>

          </div>


          <div className="st-cta-buttons">

            <button className="st-primary-btn">
              Continue Learning →
            </button>

            <button className="st-outline-btn">
              Explore AI Copilot
            </button>

          </div>

        </section>

      </main>


      {/* FOOTER */}

      <footer className="st-footer">

        <strong>
          SkillSaarthi
        </strong>

        <span>
          AI competency development for government
          employees.
        </span>

        <small>
          Skill Twin scores are estimated indicators derived
          from learning and assessment evidence.
        </small>

      </footer>

    </div>
  );
}

export default UpdatedSkillTwin;