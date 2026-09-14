import React, { useState } from "react";
import "./auth.css";

function Auth() {
  const [mode, setMode] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loginData, setLoginData] = useState({
    employeeId: "",
    password: "",
    remember: true,
  });

  const [signupData, setSignupData] = useState({
    fullName: "",
    employeeId: "",
    experience: "",
    email: "",
    department: "",
    role: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const goToOnboarding = () => {
    window.location.href = "/onboarding";
  };

  const handleLogin = (e) => {
  e.preventDefault();

  if (!loginData.employeeId || !loginData.password) {
    alert("Please enter your Employee ID/Email and Password.");
    return;
  }

  const savedEmployeeId = localStorage.getItem("xceedEmployeeId");
  const savedEmployeeName = localStorage.getItem("xceedEmployeeName");

  if (!savedEmployeeId) {
    alert("Account not found. Please create an account first.");
    return;
  }

  if (loginData.employeeId !== savedEmployeeId) {
    alert("Account not found. Please create an account first.");
    return;
  }

  localStorage.setItem("xceedLoggedIn", "true");

  if (savedEmployeeName) {
    localStorage.setItem("xceedEmployeeName", savedEmployeeName);
  }

  goToOnboarding();
};

    const handleSignup = (e) => {
    e.preventDefault();

    if (
      !signupData.fullName ||
      !signupData.employeeId ||
      !signupData.experience ||
      !signupData.email ||
      !signupData.department ||
      !signupData.role ||
      !signupData.password ||
      !signupData.confirmPassword
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    if (signupData.password !== signupData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!signupData.terms) {
      alert("Please agree to the terms of use.");
      return;
    }

    // Save account details for this prototype
    localStorage.setItem("xceedLoggedIn", "true");
    localStorage.setItem("xceedEmployeeName", signupData.fullName);
    localStorage.setItem("xceedEmployeeId", signupData.employeeId);
    localStorage.setItem("xceedEmployeeDepartment", signupData.department);
    localStorage.setItem("xceedEmployeeRole", signupData.role);

    goToOnboarding();
  };

  const handleDemo = () => {
    localStorage.setItem("xceedDemoMode", "true");
    localStorage.setItem("xceedLoggedIn", "true");

    goToOnboarding();
  };

  return (
    <div className="auth-page">

      {/* Top Brand */}
      <header className="auth-header">
        <button
          className="auth-brand"
          onClick={() => (window.location.href = "/")}
        >
          <div className="auth-logo">
            <span>◉</span>
          </div>

          <div className="auth-brand-text">
            <div className="auth-brand-name">SkillSaarthi</div>
            <div className="auth-powered">POWERED BY XCEED</div>
          </div>
        </button>
      </header>

      {/* LOGIN */}
      {mode === "login" && (
        <main className="auth-container">
          <section className="auth-card login-card">

            <div className="auth-heading">
              <h1>Welcome back</h1>
              <p>Sign in to continue your learning journey.</p>
            </div>

            <form onSubmit={handleLogin}>

              <div className="auth-field">
                <label>Employee ID or Email</label>

                <input
                  type="text"
                  placeholder="MOSPI-2481 or name@gov.in"
                  value={loginData.employeeId}
                  onChange={(e) =>
                    setLoginData({
                      ...loginData,
                      employeeId: e.target.value,
                    })
                  }
                />
              </div>

              <div className="auth-field">
                <label>Password</label>

                <div className="password-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={loginData.password}
                    onChange={(e) =>
                      setLoginData({
                        ...loginData,
                        password: e.target.value,
                      })
                    }
                  />

                  <button
                    type="button"
                    className="password-eye"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "◉" : "◉"}
                  </button>
                </div>
              </div>

              <div className="login-options">

                <label className="remember-option">
                  <input
                    type="checkbox"
                    checked={loginData.remember}
                    onChange={(e) =>
                      setLoginData({
                        ...loginData,
                        remember: e.target.checked,
                      })
                    }
                  />
                  <span>Remember me</span>
                </label>

                <button
                  type="button"
                  className="forgot-button"
                  onClick={() =>
                    alert("Password recovery will be connected to the backend.")
                  }
                >
                  Forgot password?
                </button>

              </div>

              <button className="primary-auth-button" type="submit">
                Sign In
              </button>

            </form>
            <div className="switch-auth">
              <span>New to SkillSaarthi?</span>

              <button
                onClick={() => setMode("signup")}
              >
                Create an account
              </button>
            </div>

          </section>
        </main>
      )}

      {/* SIGNUP */}
      {mode === "signup" && (
        <main className="auth-container signup-container">
          <section className="auth-card signup-card">

            <div className="auth-heading signup-heading">
              <h1>Create your SkillSaarthi profile</h1>
              <p>
                A few details so we can benchmark you against the right role.
              </p>
            </div>

            <form onSubmit={handleSignup}>

              {/* Full Name */}
              <div className="auth-field">
                <label>Full Name</label>

                <input
                  type="text"
                  placeholder="Anjali Sharma"
                  value={signupData.fullName}
                  onChange={(e) =>
                    setSignupData({
                      ...signupData,
                      fullName: e.target.value,
                    })
                  }
                />
              </div>

              {/* Employee ID + Experience */}
              <div className="two-column">

                <div className="auth-field">
                  <label>Employee ID</label>

                  <input
                    type="text"
                    placeholder="MOSPI-2481"
                    value={signupData.employeeId}
                    onChange={(e) =>
                      setSignupData({
                        ...signupData,
                        employeeId: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="auth-field">
                  <label>Years of Experience</label>

                  <select
                    value={signupData.experience}
                    onChange={(e) =>
                      setSignupData({
                        ...signupData,
                        experience: e.target.value,
                      })
                    }
                  >
                    <option value="">Select</option>
                    <option value="0-1">0–1 years</option>
                    <option value="1-3">1–3 years</option>
                    <option value="3-5">3–5 years</option>
                    <option value="5-10">5–10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>

              </div>

              {/* Email */}
              <div className="auth-field">
                <label>Official Email</label>

                <input
                  type="email"
                  placeholder="name@gov.in"
                  value={signupData.email}
                  onChange={(e) =>
                    setSignupData({
                      ...signupData,
                      email: e.target.value,
                    })
                  }
                />
              </div>

              {/* Department */}
              <div className="auth-field">
                <label>Department</label>

                <select
                  value={signupData.department}
                  onChange={(e) =>
                    setSignupData({
                      ...signupData,
                      department: e.target.value,
                    })
                  }
                >
                  <option value="">Select department</option>
                  <option value="MoSPI">
                    Ministry of Statistics & Programme Implementation
                  </option>
                  <option value="MoE">Ministry of Education</option>
                  <option value="MoHFW">
                    Ministry of Health & Family Welfare
                  </option>
                  <option value="MeitY">
                    Ministry of Electronics & Information Technology
                  </option>
                  <option value="Other Government Department">
                    Other Government Department
                  </option>
                </select>
              </div>

              {/* Role */}
              <div className="auth-field">
                <label>Role / Designation</label>

                <select
                  value={signupData.role}
                  onChange={(e) =>
                    setSignupData({
                      ...signupData,
                      role: e.target.value,
                    })
                  }
                >
                  <option value="">Select role</option>
                  <option value="Statistical Investigator">
                    Statistical Investigator
                  </option>
                  <option value="Data Analyst">
                    Data Analyst
                  </option>
                  <option value="Policy Analyst">
                    Policy Analyst
                  </option>
                  <option value="Program Officer">
                    Program Officer
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Password + Confirm Password */}
              <div className="two-column">

                <div className="auth-field">
                  <label>Password</label>

                  <div className="password-wrapper">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={signupData.password}
                      onChange={(e) =>
                        setSignupData({
                          ...signupData,
                          password: e.target.value,
                        })
                      }
                    />

                    <button
                      type="button"
                      className="password-eye"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                    >
                      ◉
                    </button>
                  </div>
                </div>

                <div className="auth-field">
                  <label>Confirm Password</label>

                  <div className="password-wrapper">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={signupData.confirmPassword}
                      onChange={(e) =>
                        setSignupData({
                          ...signupData,
                          confirmPassword: e.target.value,
                        })
                      }
                    />

                    <button
                      type="button"
                      className="password-eye"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      ◉
                    </button>
                  </div>
                </div>

              </div>

              {/* Terms */}
              <label className="terms-option">

                <input
                  type="checkbox"
                  checked={signupData.terms}
                  onChange={(e) =>
                    setSignupData({
                      ...signupData,
                      terms: e.target.checked,
                    })
                  }
                />

                <span>
                  I agree to the terms of use and consent to my
                  competency data being used for training
                  recommendations.
                </span>

              </label>

              {/* Create Profile */}
              <button
                className="primary-auth-button"
                type="submit"
              >
                Create Profile
              </button>

            </form>

            <div className="switch-auth signup-switch">
              <span>Already have a SkillSaarthi account?</span>

              <button
                onClick={() => setMode("login")}
              >
                Sign in
              </button>
            </div>

          </section>
        </main>
      )}

      <footer className="auth-footer">
        <span>SkillSaarthi</span>
        <span>·</span>
        <span>SIH Prototype</span>
      </footer>

    </div>
  );
}

export default Auth;
