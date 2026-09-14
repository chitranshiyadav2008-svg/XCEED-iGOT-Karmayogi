import React, { useState } from "react";
import "./onboarding.css";

const WORK_AREAS = [
  "Data Analysis & Statistics",
  "Policy & Governance",
  "IT & Software Development",
  "Finance & Accounts",
  "Human Resources",
  "Administration",
  "Other",
];

const STRENGTH_OPTIONS = [
  "Analytical Thinking",
  "Communication",
  "Problem Solving",
  "Leadership",
  "Teamwork",
  "Data Interpretation",
  "Decision Making",
  "Technical Skills",
];

function UserIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.5-7 8-7s8 3 8 7" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function Onboarding() {
  const [user] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("user")) || {};
    } catch {
      return {};
    }
  });

  const employee = {
    fullName: user.name || "Arzoo Sharma",
    employeeId: user.employeeId || "EMP-4821",
    department:
      user.department ||
      "Ministry of Statistics & Programme Implementation",
    designation: user.designation || "Data Analyst",
  };

  const [formData, setFormData] = useState({
    primaryArea: "",
    responsibilities: "",
    strengthAreas: [],
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
      submit: "",
    }));
  };

  const toggleStrength = (strength) => {
    setFormData((prev) => {
      const selected = prev.strengthAreas.includes(strength);

      return {
        ...prev,
        strengthAreas: selected
          ? prev.strengthAreas.filter(
              (item) => item !== strength
            )
          : [...prev.strengthAreas, strength],
      };
    });

    setErrors((prev) => ({
      ...prev,
      strengthAreas: "",
      submit: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.primaryArea) {
      newErrors.primaryArea =
        "Please select your primary work area.";
    }

    if (!formData.responsibilities.trim()) {
      newErrors.responsibilities =
        "Please describe your responsibilities.";
    } else if (
      formData.responsibilities.trim().length < 10
    ) {
      newErrors.responsibilities =
        "Please enter at least 10 characters.";
    }

    if (formData.strengthAreas.length === 0) {
      newErrors.strengthAreas =
        "Please select at least one strength area.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting || submitted) {
      return;
    }

    if (!validate()) {
      return;
    }

    try {
      setIsSubmitting(true);

      const token = localStorage.getItem("token");

      if (!token) {
        setErrors({
          submit:
            "Your session has expired. Please sign in again.",
        });

        setIsSubmitting(false);
        return;
      }

      const response = await fetch(
        "http://localhost:5000/api/onboarding",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            primaryArea: formData.primaryArea,
            responsibilities: formData.responsibilities,
            strengthAreas: formData.strengthAreas,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ||
            "Failed to save onboarding information."
        );
      }

      console.log(
        "Onboarding saved successfully:",
        data
      );

      setSubmitted(true);

      setTimeout(() => {
        window.location.href = "/skill-assessment";
      }, 800);
    } catch (error) {
      console.error("Onboarding error:", error);

      setErrors({
        submit:
          error.message ||
          "Unable to save onboarding information. Please try again.",
      });

      setIsSubmitting(false);
    }
  };

  return (
    <div className="onboarding-page">

      {/* ================= HEADER ================= */}

      <header className="onboarding-header">

        <div className="brand">

          <div className="brand-mark">
            <span>S</span>
          </div>

          <div className="brand-text">
            <div className="brand-name">
              SkillSaarthi
            </div>

            <div className="brand-subtext">
              AI SKILL INTELLIGENCE PLATFORM
            </div>
          </div>

        </div>

        <nav className="top-nav">
          <span className="nav-item nav-item--active">
            Onboarding
          </span>

          <span className="nav-item">
            Skill Assessment
          </span>

          <span className="nav-item">
            Skill Twin
          </span>
        </nav>

      </header>

      {/* ================= MAIN ================= */}

      <main className="onboarding-main">

        {/* STEPPER */}

        <ul className="stepper">

          <li className="step step--active">

            <div className="step-circle">
              1
            </div>

            <span className="step-label">
              Profile
            </span>

          </li>

          <li className="step-connector"></li>

          <li className="step">

            <div className="step-circle">
              2
            </div>

            <span className="step-label">
              Assessment
            </span>

          </li>

          <li className="step-connector"></li>

          <li className="step">

            <div className="step-circle">
              3
            </div>

            <span className="step-label">
              Skill Twin
            </span>

          </li>

        </ul>

        {/* INTRO */}

        <section className="page-intro">

          <div className="eyebrow-pill">
            WELCOME TO SKILLSAARTHI
          </div>

          <h1>
            Let's build your Skill Twin
          </h1>

          <p>
            Tell us a little about your professional
            role and strengths. This information helps
            us create your personalised AI Skill Twin.
          </p>

        </section>

        {/* ================= PROFILE CARD ================= */}

        <section className="card">

          <div className="card-header">

            <div>
              <h2>Your Profile</h2>

              <p className="card-subtext">
                Your official information from the
                government employee profile.
              </p>
            </div>

            <div className="verified-badge">
              <CheckIcon />
              Verified
            </div>

          </div>

          <div className="profile-grid">

            {/* NAME */}

            <div className="readonly-field">

              <div className="readonly-icon">
                <UserIcon />
              </div>

              <div>
                <span className="readonly-label">
                  Full Name
                </span>

                <span className="readonly-value">
                  {employee.fullName}
                </span>
              </div>

            </div>

            {/* EMPLOYEE ID */}

            <div className="readonly-field">

              <div className="readonly-icon">
                <UserIcon />
              </div>

              <div>
                <span className="readonly-label">
                  Employee ID
                </span>

                <span className="readonly-value">
                  {employee.employeeId}
                </span>
              </div>

            </div>

            {/* DEPARTMENT */}

            <div className="readonly-field">

              <div className="readonly-icon">
                <BriefcaseIcon />
              </div>

              <div>
                <span className="readonly-label">
                  Department
                </span>

                <span className="readonly-value">
                  {employee.department}
                </span>
              </div>

            </div>

            {/* DESIGNATION */}

            <div className="readonly-field">

              <div className="readonly-icon">
                <BriefcaseIcon />
              </div>

              <div>
                <span className="readonly-label">
                  Designation
                </span>

                <span className="readonly-value">
                  {employee.designation}
                </span>
              </div>

            </div>

          </div>

        </section>

        {/* ================= PROFESSIONAL CONTEXT ================= */}

        <form onSubmit={handleSubmit}>

          <section className="card">

            <div className="card-header">

              <div>

                <h2>
                  Professional Context
                </h2>

                <p className="card-subtext">
                  Help us understand your current
                  role and responsibilities.
                </p>

              </div>

            </div>

            {/* PRIMARY WORK AREA */}

            <div className="form-field">

              <label htmlFor="primaryArea">

                Primary Work Area{" "}

                <span className="required">
                  *
                </span>

              </label>

              <select
                id="primaryArea"
                name="primaryArea"
                value={formData.primaryArea}
                onChange={handleInputChange}
                className={
                  errors.primaryArea
                    ? "input-error"
                    : ""
                }
              >

                <option value="">
                  Select your primary work area
                </option>

                {WORK_AREAS.map((area) => (
                  <option
                    key={area}
                    value={area}
                  >
                    {area}
                  </option>
                ))}

              </select>

              {errors.primaryArea && (
                <span className="error-text">
                  {errors.primaryArea}
                </span>
              )}

            </div>

            {/* RESPONSIBILITIES */}

            <div className="form-field">

              <label htmlFor="responsibilities">

                Key Responsibilities{" "}

                <span className="required">
                  *
                </span>

              </label>

              <p className="field-hint">
                Describe your main responsibilities,
                tasks and the type of work you handle.
              </p>

              <textarea
                id="responsibilities"
                name="responsibilities"
                rows="5"
                value={formData.responsibilities}
                onChange={handleInputChange}
                placeholder="Describe your main responsibilities..."
                className={
                  errors.responsibilities
                    ? "input-error"
                    : ""
                }
              />

              <p className="field-hint">
                {formData.responsibilities.length}
                {" "}characters · Minimum 10 characters
              </p>

              {errors.responsibilities && (
                <span className="error-text">
                  {errors.responsibilities}
                </span>
              )}

            </div>

            {/* STRENGTH AREAS */}

            <div className="form-field">

              <label>

                Your Strength Areas{" "}

                <span className="required">
                  *
                </span>

              </label>

              <p className="field-hint">
                Select all areas where you feel
                confident.
              </p>

              <div className="strength-options">

                {STRENGTH_OPTIONS.map((strength) => {

                  const selected =
                    formData.strengthAreas.includes(
                      strength
                    );

                  return (
                    <button
                      type="button"
                      key={strength}
                      className={`strength-option ${
                        selected
                          ? "selected"
                          : ""
                      }`}
                      onClick={() =>
                        toggleStrength(strength)
                      }
                    >

                      <span className="strength-check">
                        {selected && <CheckIcon />}
                      </span>

                      {strength}

                    </button>
                  );
                })}

              </div>

              {errors.strengthAreas && (
                <span className="error-text">
                  {errors.strengthAreas}
                </span>
              )}

            </div>

            {/* SUBMIT ERROR */}

            {errors.submit && (
              <div className="error-text">
                {errors.submit}
              </div>
            )}

            {/* SUCCESS */}

            {submitted && (
              <div className="success-banner">
                ✓ Profile information saved!
                Taking you to Skill Assessment...
              </div>
            )}

            {/* ACTION */}

            <div className="form-actions">

              <button
                type="submit"
                className="continue-btn"
                disabled={
                  isSubmitting || submitted
                }
              >

                {isSubmitting
                  ? "Saving..."
                  : submitted
                  ? "Saved ✓"
                  : "Continue to Skill Assessment"}

                {!isSubmitting &&
                  !submitted && (
                    <>
                      {" "}
                      <ArrowIcon />
                    </>
                  )}

              </button>

            </div>

          </section>

        </form>

      </main>

    </div>
  );
}

export default Onboarding;