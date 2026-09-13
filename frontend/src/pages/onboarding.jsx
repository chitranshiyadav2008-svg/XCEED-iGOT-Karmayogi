import React, { useState } from "react";
import "./onboarding.css";

// Mocked employee data — in the real app this will come from the
// authenticated session / API instead of being hardcoded here.
const EMPLOYEE = {
  fullName: "Arzoo Sharma",
  employeeId: "EMP-4821",
  department: "Ministry of Statistics & Programme Implementation",
  designation: "Data Analyst",
};

const WORK_AREAS = [
  "Data Analysis & Statistics",
  "Policy & Governance",
  "IT & Software Development",
  "Finance & Accounts",
  "Human Resources",
  "Administration",
  "Other",
];

export default function Onboarding() {
  const [formData, setFormData] = useState({
    primaryArea: "",
    responsibilities: "",
    strengthAreas: [],
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    // Clear the field's error as soon as the user starts fixing it
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.primaryArea) {
      newErrors.primaryArea = "Please select your primary area of work.";
    }
    if (!formData.responsibilities.trim()) {
      newErrors.responsibilities = "Please describe your current responsibilities.";
    } else if (formData.responsibilities.trim().length < 10) {
      newErrors.responsibilities = "Please provide a little more detail (at least 10 characters).";
    }
    if (formData.strengthAreas.length === 0) {
  newErrors.strengthAreas =
    "Please select at least one area you'd like to strengthen.";
    }
    

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const isValid = validate();

  if (!isValid) {
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/api/onboarding", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        employeeId: EMPLOYEE.employeeId,
        primaryArea: formData.primaryArea,
        responsibilities: formData.responsibilities,
        strengthAreas: formData.strengthAreas,
      }),
    });

    const data = await response.json();

    if (data.success) {
      setSubmitted(true);
    } else {
      console.error("Backend error:", data);
    }
  } catch (error) {
    console.error("Could not connect to backend:", error);
  }
};
  return (
    <div className="onboarding-page">
      {/* Top navigation */}
      <header className="onboarding-header">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true">
            <CompassIcon />
          </span>
          <div className="brand-text">
            <span className="brand-name">SkillSaarthi</span>
            <span className="brand-subtext">POWERED BY XCEED</span>
          </div>
        </div>

        <nav className="top-nav">
          <span className="nav-item">Dashboard</span>
          <span className="nav-item">My Skills</span>
          <span className="nav-item">Learning Path</span>
          <span className="nav-item nav-item--active">Onboarding</span>
        </nav>
      </header>

      <main className="onboarding-main">
        {/* Stepper */}
        <ol className="stepper">
          <li className="step step--active">
            <span className="step-circle">01</span>
            <span className="step-label">Profile</span>
          </li>
          <span className="step-connector" />
          <li className="step">
            <span className="step-circle">02</span>
            <span className="step-label">Assessment</span>
          </li>
          <span className="step-connector" />
          <li className="step">
            <span className="step-circle">03</span>
            <span className="step-label">Skill Twin</span>
          </li>
        </ol>

        <div className="page-intro">
          <span className="eyebrow-pill">Step 01 · Employee Onboarding</span>
          <h1>Build Your Skill Profile</h1>
          <p>
            We&apos;ve prepared your employee profile. Review your information and
            tell us about your current work so we can personalize your
            competency journey.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          {/* Employee Profile (read-only) */}
          <section className="card">
            <div className="card-header">
              <div>
                <h2>Employee Profile</h2>
                <p className="card-subtext">Retrieved from your SkillSaarthi account</p>
              </div>
              <span className="verified-badge">
                <CheckIcon /> Employee information verified
              </span>
            </div>

            <div className="profile-grid">
              <ReadOnlyField
                icon={<UserIcon />}
                label="Full Name"
                value={EMPLOYEE.fullName}
              />
              <ReadOnlyField
                icon={<IdIcon />}
                label="Employee ID"
                value={EMPLOYEE.employeeId}
              />
              <ReadOnlyField
                icon={<BuildingIcon />}
                label="Department / Ministry"
                value={EMPLOYEE.department}
              />
              <ReadOnlyField
                icon={<BriefcaseIcon />}
                label="Designation"
                value={EMPLOYEE.designation}
              />
            </div>
          </section>

          {/* Professional Context (editable) */}
          <section className="card">
            <div className="card-header">
              <div>
                <h2>Professional Context</h2>
                <p className="card-subtext">Help SkillSaarthi understand the work you currently do.</p>
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="primaryArea">
                Primary Area of Work <span className="required">*</span>
              </label>
              <select
                id="primaryArea"
                value={formData.primaryArea}
                onChange={handleChange("primaryArea")}
                className={errors.primaryArea ? "input-error" : ""}
              >
                <option value="">Select an area</option>
                {WORK_AREAS.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>
              {errors.primaryArea && <span className="error-text">{errors.primaryArea}</span>}
            </div>

            <div className="form-field">
              <label htmlFor="responsibilities">
                Current Responsibilities <span className="required">*</span>
              </label>
              <textarea
                id="responsibilities"
                rows={4}
                placeholder="Briefly describe what your day-to-day work involves..."
                value={formData.responsibilities}
                onChange={handleChange("responsibilities")}
                className={errors.responsibilities ? "input-error" : ""}
              />
              {errors.responsibilities && (
                <span className="error-text">{errors.responsibilities}</span>
              )}
            </div>

            <div className="form-field">
  <label>
    Areas You&apos;d Like to Strengthen{" "}
    <span className="required">*</span>
  </label>

  <p className="field-hint">
    Select the areas you would like to develop further.
  </p>

  <div className="strength-options">
    {[
      "Data Analysis",
      "Leadership",
      "Communication",
      "Digital Skills",
      "Policy & Governance",
      "Project Management",
      "Problem Solving",
      "Other",
    ].map((area) => {
      const selected = formData.strengthAreas.includes(area);

      return (
        <button
          type="button"
          key={area}
          className={`strength-option ${
            selected ? "selected" : ""
          }`}
          onClick={() => {
            setFormData((prev) => ({
              ...prev,
              strengthAreas: selected
                ? prev.strengthAreas.filter((item) => item !== area)
                : [...prev.strengthAreas, area],
            }));
          }}
        >
          <span className="strength-check">
            {selected ? "✓" : "+"}
          </span>
          {area}
        </button>
      );
    })}
  </div>

  {errors.strengthAreas && (
    <span className="error-text">{errors.strengthAreas}</span>
  )}
</div>
          </section>

          {submitted && (
            <div className="success-banner">
              Profile saved. You're ready to move on to the Skill Assessment.
            </div>
          )}

          <div className="form-actions">
            <button type="submit" className="continue-btn">
              Continue to Skill Assessment
            </button>
          </div>
        </form>
      </main>
    </div>
  );


function ReadOnlyField({ icon, label, value }) {
  return (
    <div className="readonly-field">
      <span className="readonly-icon">{icon}</span>
      <div>
        <span className="readonly-label">{label}</span>
        <span className="readonly-value">{value}</span>
      </div>
    </div>
  );
}

/* --- Small inline icon components (no external icon library needed) --- */

function CompassIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
    </svg>
  );
}

function IdIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="9" cy="12" r="2" />
      <path d="M14 10h5M14 14h5" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="7" width="18" height="12" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  );
}
}