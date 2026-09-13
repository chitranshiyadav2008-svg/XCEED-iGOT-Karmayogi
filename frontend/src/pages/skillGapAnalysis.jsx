import React from 'react';
import './skillGapAnalysis.css';

const data = {
  role: 'Statistical Investigator',
  readiness: 72,
  competencies: [
    { name: 'Data Analysis', current: 82, required: 80 },
    { name: 'Statistical Methods', current: 68, required: 75 },
    { name: 'Survey Design', current: 54, required: 75, largest: true },
    { name: 'Data Visualization', current: 61, required: 70 },
    { name: 'Communication', current: 74, required: 75 },
  ],
  priority: {
    skill: 'Survey Design', current: 54, required: 75, gap: 21,
    explanation: 'Survey Design is currently the largest competency gap for your role and is the highest-priority area for development.'
  },
  why: [
    'Survey planning and methodology selection',
    'Questionnaire design and validation',
    'Sampling strategy and sample size estimation',
    'Field data collection and quality control'
  ],
  course: { title: 'Fundamentals of Survey Design', provider: 'iGOT Karmayogi', level: 'Intermediate', hours: 6 },
};

function SkillGapAnalysis() {
  return (
    <div className="skill-gap-page">
      <div className="skill-gap-strip">Capacity Building Commission · Karmayogi Bharat</div>
      <header className="skill-gap-nav">
        <div className="skill-gap-brand">
          <div className="skill-gap-brand-icon">🎓</div>
          <div><strong>SkillSaarthi</strong><span>Karmayogi Competency Platform</span></div>
        </div>
        <nav><a href="#">Dashboard</a><a href="#">My Roles</a><a className="active" href="/skill-gap">Skill Gap</a><a href="/learning-path">Learning</a></nav>
        <div className="skill-gap-profile">◯ Officer Profile</div>
      </header>

      <section className="skill-gap-header">
        <div className="skill-gap-container">
          <div className="skill-gap-breadcrumb">Home <span>›</span> My Roles <span>›</span> <b>Skill Gap Analysis</b></div>
          <h1>Skill Gap Analysis</h1>
          <p>Understand the competencies that need improvement for your current role.</p>
        </div>
      </section>

      <main className="skill-gap-container skill-gap-main">
        <section className="skill-gap-card role-card">
          <div>
            <div className="eyebrow">Current Role</div>
            <h2>{data.role}</h2>
            <p>Your Skill Twin is compared with the competency requirements of your selected role to identify priority gaps.</p>
          </div>
          <div className="readiness">
            <div className="readiness-label">Overall Role Readiness <strong>{data.readiness}%</strong></div>
            <div className="progress"><div style={{width: `${data.readiness}%`}} /></div>
          </div>
        </section>

        <section className="skill-gap-card">
          <div className="section-head"><h2>Your Competency Gaps</h2><div className="legend"><span><i className="dot current"/>Current level</span><span><i className="dot required"/>Required level</span></div></div>
          <div className="gap-table-head"><span>Competency</span><span>Current</span><span>Required</span><span>Comparison</span><span>Gap</span></div>
          <div>
            {data.competencies.map((c) => {
              const gap = Math.max(c.required - c.current, 0);
              const meets = gap === 0;
              return <div className={`gap-row ${c.largest ? 'largest' : ''}`} key={c.name}>
                <div className="competency-name">{c.name}{c.largest && <span className="largest-tag">Largest gap</span>}</div>
                <div>{c.current}%</div><div>{c.required}%</div>
                <div className="bar-wrap"><div className="bar-required" style={{width: `${c.required}%`}}/><div className={`bar-current ${c.largest ? 'danger' : meets ? 'meet' : ''}`} style={{width: `${c.current}%`}}/></div>
                <div>{meets ? <span className="meets">✓ Meets requirement</span> : <span className={`gap-tag ${c.largest ? 'danger-text' : ''}`}>Gap: {gap} {gap === 1 ? 'point' : 'points'}</span>}</div>
              </div>
            })}
          </div>
        </section>

        <div className="priority-grid">
          <section className="skill-gap-card priority-card">
            <div><span className="priority-pill">HIGH PRIORITY</span><span className="priority-label"> Priority Skill Gap</span></div>
            <h2>{data.priority.skill}</h2>
            <div className="priority-stats"><span>Current: <b>{data.priority.current}%</b></span><span>Required: <b>{data.priority.required}%</b></span><span>Gap: <b>{data.priority.gap} points</b></span></div>
            <div className="bar-wrap priority-bar"><div className="bar-required" style={{width: `${data.priority.required}%`}}/><div className="bar-current danger" style={{width: `${data.priority.current}%`}}/></div>
            <p>{data.priority.explanation}</p>
          </section>
          <section className="skill-gap-card">
            <h2>Why this gap matters</h2>
            <p className="muted">Strengthening Survey Design directly increases your readiness across core responsibilities of the Statistical Investigator role.</p>
            <ul>{data.why.map((x) => <li key={x}>✓ {x}</li>)}</ul>
          </section>
        </div>

        <section className="skill-gap-card recommended">
          <div className="eyebrow teal">Recommended Next Step</div>
          <div className="recommended-inner"><div><h2>{data.course.title}</h2><div className="course-meta">{data.course.provider} · {data.course.level} · {data.course.hours} hrs</div></div><div className="actions"><button onClick={() => window.location.href='/learning-path'}>Start Learning</button><a href="/learning-path">View Learning Path</a></div></div>
        </section>

        <section className="skill-gap-card simulator">
          <div><h2>Want to see how learning could improve your readiness?</h2><p>Use the What-If Simulator to model how completing recommended courses could raise your competency levels and overall role readiness.</p><small>Estimates are indicative and based on current assessment data.</small></div>
          <button onClick={() => alert('What-If Simulator is coming next.')}>Try What-If Simulator</button>
        </section>

        <div className="process"><span>Skill Assessment</span><b>→</b><span>Skill Twin</span><b>→</b><strong>Skill Gap</strong><b>→</b><span>Personalized Learning</span><b>→</b><span>Adaptive Quiz</span><b>→</b><span>Updated Skill Twin</span></div>
      </main>
    </div>
  );
}

export default SkillGapAnalysis;
