import React, { useMemo, useState } from "react";
import "./adaptiveQuiz.css";

/*
  Adaptive Quiz
  Converted from the Lovable prototype into plain React + CSS so it can be
  dropped into the team's existing Vite/React frontend.

  Current prototype profile:
  Rahul Sharma -> Data Analyst -> Data Analysis
  Skill gaps: Regression, Correlation, Data Visualization
*/


const employee = {
  name: "Rahul Sharma",
  role: "Data Analyst",
  skill: "Data Analysis",
  currentProficiency: 55,
  targetProficiency: 80,
  primarySkillGap: "Regression",
  weakTopics: [
    { topic: "Regression", level: "High", weight: 0.5 },
    { topic: "Correlation", level: "Medium", weight: 0.3 },
    { topic: "Data Visualization", level: "Low", weight: 0.2 },
  ],
  recommendedLearningArea: "Regression Analysis",
  totalQuestions: 8,
  startingDifficulty: "medium",
};

const questionHierarchy = {
  "Data Analyst": {
    "Data Analysis": {
      Regression: {
        easy: [
          {
            id: "da-reg-e1",
            prompt: "In the simple regression y = 3 + 2x, what is the intercept?",
            options: ["3", "2", "5", "0"],
            correctIndex: 0,
            explanation: "The intercept is the constant term: the expected y when x = 0, here 3.",
          },
          {
            id: "da-reg-e2",
            prompt: "In a regression predicting salary from years of experience, salary is the:",
            options: ["Predictor", "Dependent variable", "Residual", "Coefficient"],
            correctIndex: 1,
            explanation:
              "The variable being predicted is the dependent (outcome) variable; experience is the independent predictor.",
          },
          {
            id: "da-reg-e3",
            prompt: "A residual in regression is:",
            options: [
              "The slope of the line",
              "The observed value minus the predicted value",
              "The average of the predictors",
              "The correlation squared",
            ],
            correctIndex: 1,
            explanation: "Residual = actual − fitted. Least squares minimises the sum of squared residuals.",
          },
        ],
        medium: [
          {
            id: "da-reg-m1",
            prompt: "In the simple regression y = 3 + 2x, what does the coefficient 2 mean?",
            options: [
              "y equals 2 when x is 0",
              "y increases by 2 for each 1-unit increase in x",
              "The model explains 2% of variance",
              "The correlation is 2",
            ],
            correctIndex: 1,
            explanation: "The slope is the expected change in y per one-unit change in x; 3 is the intercept.",
          },
          {
            id: "da-reg-m2",
            prompt: "An R² of 0.64 in a simple linear regression means:",
            options: [
              "64% of the variance in y is explained by the model",
              "The slope is 0.64",
              "Predictions are accurate 64% of the time",
              "The correlation is 0.64",
            ],
            correctIndex: 0,
            explanation:
              "R² is the share of variance in the outcome explained by the model. Here the correlation would be √0.64 = 0.8.",
          },
          {
            id: "da-reg-m3",
            prompt: "Two predictors in a model are correlated at 0.95. This causes:",
            options: ["Heteroscedasticity", "Multicollinearity", "Autocorrelation", "Non-linearity"],
            correctIndex: 1,
            explanation:
              "Highly correlated predictors inflate coefficient standard errors, making individual effects unstable and hard to interpret.",
          },
        ],
        hard: [
          {
            id: "da-reg-h1",
            prompt: "Adding predictors to a regression always raises R². Which metric guards against this?",
            options: ["Adjusted R²", "p-value of the intercept", "Pearson's r", "Mean absolute error"],
            correctIndex: 0,
            explanation:
              "Adjusted R² penalises additional predictors that do not improve fit beyond chance, exposing overfitting.",
          },
          {
            id: "da-reg-h2",
            prompt: "Residuals fan out as fitted values increase. This violates which assumption?",
            options: ["Linearity", "Homoscedasticity", "Independence", "Normality of predictors"],
            correctIndex: 1,
            explanation:
              "Constant residual variance (homoscedasticity) is violated; standard errors become unreliable. A log transform often helps.",
          },
          {
            id: "da-reg-h3",
            prompt:
              "A model fits the training data almost perfectly but performs poorly on new data. The best first remedy is:",
            options: [
              "Add more predictors",
              "Regularise (e.g. ridge/lasso) and validate out-of-sample",
              "Increase the polynomial degree",
              "Report training R² only",
            ],
            correctIndex: 1,
            explanation:
              "That gap is overfitting. Regularisation plus cross-validation constrains complexity and gives an honest performance estimate.",
          },
        ],
      },
      Correlation: {
        easy: [
          {
            id: "da-cor-e1",
            prompt: "A correlation coefficient of 0 between two variables suggests:",
            options: [
              "A perfect positive linear relationship",
              "A perfect negative linear relationship",
              "No linear relationship",
              "That one variable causes the other",
            ],
            correctIndex: 2,
            explanation: "r = 0 means no *linear* association. A non-linear relationship can still exist.",
          },
          {
            id: "da-cor-e2",
            prompt: "Pearson's correlation coefficient always lies between:",
            options: ["0 and 1", "−1 and 1", "−100 and 100", "0 and 100"],
            correctIndex: 1,
            explanation: "r is bounded by −1 (perfect negative) and +1 (perfect positive).",
          },
        ],
        medium: [
          {
            id: "da-cor-m1",
            prompt: "Ice cream sales and drowning incidents both rise in summer. This is an example of:",
            options: [
              "Causation",
              "A confounding variable (temperature) driving both",
              "Sampling bias",
              "Simpson's paradox",
            ],
            correctIndex: 1,
            explanation:
              "A lurking third variable — hot weather — drives both series. Correlation alone never establishes causation.",
          },
          {
            id: "da-cor-m2",
            prompt: "Which correlation measure is appropriate for monotonic but non-linear ranked data?",
            options: ["Pearson's r", "Spearman's rho", "Cohen's d", "Chi-square"],
            correctIndex: 1,
            explanation:
              "Spearman correlates ranks, so it captures monotonic relationships that Pearson's linear measure understates.",
          },
        ],
        hard: [
          {
            id: "da-cor-h1",
            prompt: "A trend reverses when data is split by segment but holds in aggregate. This is:",
            options: ["Heteroscedasticity", "Simpson's paradox", "Multicollinearity", "Autocorrelation"],
            correctIndex: 1,
            explanation:
              "Simpson's paradox occurs when an aggregated relationship disappears or reverses within subgroups due to unequal group sizes or confounding.",
          },
          {
            id: "da-cor-h2",
            prompt: "Two variables show r = 0.02 but a clear U-shaped scatter. The correct conclusion is:",
            options: [
              "The variables are independent",
              "There is a strong non-linear relationship Pearson cannot capture",
              "The data must be erroneous",
              "One variable causes the other",
            ],
            correctIndex: 1,
            explanation:
              "Pearson measures linear association only; a symmetric U-shape cancels out to near zero despite a strong relationship.",
          },
        ],
      },
      "Data Visualization": {
        easy: [
          {
            id: "da-viz-e1",
            prompt: "Which chart is best for showing the composition of a whole at a single point in time?",
            options: ["Line chart", "Pie chart", "Scatter plot", "Histogram"],
            correctIndex: 1,
            explanation:
              "Pie charts express parts of a whole. Line charts show trends, scatter plots show relationships, histograms show distributions.",
          },
          {
            id: "da-viz-e2",
            prompt: "A histogram is primarily used to display:",
            options: [
              "The relationship between two variables",
              "The distribution of a single numeric variable",
              "Change of a category over time",
              "Part-to-whole comparisons",
            ],
            correctIndex: 1,
            explanation:
              "A histogram buckets one numeric variable into bins and shows how frequently values fall into each bin.",
          },
        ],
        medium: [
          {
            id: "da-viz-m1",
            prompt: "You need to compare monthly revenue across 5 product lines over 3 years. Best choice?",
            options: [
              "Five pie charts",
              "A stacked bar chart with 36 bars",
              "A multi-series line chart",
              "A single scatter plot",
            ],
            correctIndex: 2,
            explanation:
              "Time-series comparison across a handful of categories is exactly what a multi-series line chart is for.",
          },
          {
            id: "da-viz-m2",
            prompt: "A box plot most directly communicates:",
            options: [
              "Median, quartiles and potential outliers",
              "Correlation between two variables",
              "Cumulative totals over time",
              "Exact individual values",
            ],
            correctIndex: 0,
            explanation: "The box spans Q1–Q3 with the median line; whiskers and points expose spread and outliers.",
          },
        ],
        hard: [
          {
            id: "da-viz-h1",
            prompt: "Truncating a bar chart's y-axis so it starts at 90 instead of 0 is problematic because:",
            options: [
              "Bars must always be horizontal",
              "It visually exaggerates small differences in magnitude",
              "It hides the legend",
              "Bar charts cannot show percentages",
            ],
            correctIndex: 1,
            explanation:
              "Bar length encodes magnitude, so a non-zero baseline distorts proportional comparison. Line charts may truncate; bars generally should not.",
          },
          {
            id: "da-viz-h2",
            prompt: "A rainbow colour scale on a continuous metric map is discouraged mainly because:",
            options: [
              "It uses too many pixels",
              "It is not perceptually uniform and creates false boundaries",
              "It cannot be printed",
              "It only supports 7 values",
            ],
            correctIndex: 1,
            explanation:
              "Rainbow scales compress and stretch perceived differences unevenly; sequential, perceptually uniform scales are preferred.",
          },
        ],
      },
      Statistics: {
        easy: [
          {
            id: "da-sta-e1",
            prompt: "What is the median of the dataset: 3, 7, 9, 12, 15?",
            options: ["7", "9", "9.2", "12"],
            correctIndex: 1,
            explanation:
              "With an odd number of sorted values, the median is the middle value — here the 3rd of 5 values, which is 9.",
          },
          {
            id: "da-sta-e2",
            prompt: "Which measure of central tendency is most affected by extreme values?",
            options: ["Median", "Mode", "Mean", "Range"],
            correctIndex: 2,
            explanation:
              "The mean uses every value in its calculation, so a single very large or small value shifts it.",
          },
          {
            id: "da-sta-e3",
            prompt: "What does the range of a dataset measure?",
            options: [
              "The most frequent value",
              "The average deviation from the mean",
              "The difference between the maximum and minimum",
              "The middle value",
            ],
            correctIndex: 2,
            explanation: "Range = maximum value − minimum value. It is the simplest measure of spread.",
          },
        ],
        medium: [
          {
            id: "da-sta-m1",
            prompt: "A distribution has mean 50 and median 42. What shape is it most likely to have?",
            options: ["Left (negatively) skewed", "Right (positively) skewed", "Symmetric", "Uniform"],
            correctIndex: 1,
            explanation:
              "When the mean is pulled above the median, a long right tail is dragging it — that is a positively skewed distribution.",
          },
          {
            id: "da-sta-m2",
            prompt: "Standard deviation is preferred over variance mainly because it:",
            options: [
              "Is always smaller",
              "Is expressed in the same units as the data",
              "Ignores outliers",
              "Is easier to compute",
            ],
            correctIndex: 1,
            explanation:
              "Variance is in squared units; taking the square root returns the spread to the data's original units.",
          },
          {
            id: "da-sta-m3",
            prompt: "Salaries of 9 staff average ₹50,000. A 10th joins at ₹150,000. The new mean is:",
            options: ["₹55,000", "₹60,000", "₹65,000", "₹70,000"],
            correctIndex: 1,
            explanation: "Total was 9 × 50,000 = 450,000. Adding 150,000 gives 600,000 across 10 people → ₹60,000.",
          },
        ],
        hard: [
          {
            id: "da-sta-h1",
            prompt: "A test returns p = 0.03 at α = 0.05. The correct interpretation is:",
            options: [
              "There is a 3% chance the null hypothesis is true",
              "The effect is large and important",
              "Data this extreme would occur 3% of the time if the null were true",
              "The alternative hypothesis is proven",
            ],
            correctIndex: 2,
            explanation:
              "A p-value is the probability of data at least as extreme as observed, assuming the null is true — not the probability the null is true.",
          },
          {
            id: "da-sta-h2",
            prompt: "Widening a confidence interval from 95% to 99%, with sample size fixed, will:",
            options: [
              "Narrow the interval",
              "Widen the interval",
              "Leave the interval unchanged",
              "Shift the point estimate",
            ],
            correctIndex: 1,
            explanation: "More confidence requires more coverage, so the interval widens around the same estimate.",
          },
        ],
      },
      Outliers: {
        easy: [
          {
            id: "da-out-e1",
            prompt: "An outlier in a dataset is best described as:",
            options: [
              "A value that appears most often",
              "A value far away from the rest of the observations",
              "The average of all values",
              "Any negative value",
            ],
            correctIndex: 1,
            explanation:
              "Outliers sit far from the bulk of the data and can distort means, variances, and regression fits.",
          },
        ],
        medium: [
          {
            id: "da-out-m1",
            prompt: "Using the IQR rule, a value is flagged as an outlier when it falls outside:",
            options: [
              "Q1 − 1.5·IQR and Q3 + 1.5·IQR",
              "Mean ± 1 standard deviation",
              "Q1 and Q3",
              "Median ± IQR",
            ],
            correctIndex: 0,
            explanation:
              "The Tukey fence rule flags points below Q1 − 1.5·IQR or above Q3 + 1.5·IQR as potential outliers.",
          },
          {
            id: "da-out-m2",
            prompt: "Which statistic is most robust to outliers?",
            options: ["Mean", "Range", "Median", "Standard deviation"],
            correctIndex: 2,
            explanation: "The median depends on position, not magnitude, so extreme values barely move it.",
          },
        ],
        hard: [
          {
            id: "da-out-h1",
            prompt: "A genuine high-value B2B customer appears as an extreme outlier in revenue. Best practice is to:",
            options: [
              "Delete the record to clean the data",
              "Cap it at the 95th percentile silently",
              "Retain it, document it, and report robust statistics alongside the mean",
              "Replace it with the mean",
            ],
            correctIndex: 2,
            explanation:
              "Valid extreme observations should be kept and disclosed; use medians or trimmed means to show sensitivity rather than discarding real data.",
          },
        ],
      },
      Probability: {
        easy: [
          {
            id: "da-pro-e1",
            prompt: "What is the probability of rolling an even number on a fair six-sided die?",
            options: ["1/6", "1/3", "1/2", "2/3"],
            correctIndex: 2,
            explanation: "Three of the six equally likely outcomes (2, 4, 6) are even, so the probability is 3/6 = 1/2.",
          },
        ],
        medium: [
          {
            id: "da-pro-m1",
            prompt: "Two fair coins are tossed. What is the probability of getting exactly one head?",
            options: ["1/4", "1/3", "1/2", "3/4"],
            correctIndex: 2,
            explanation: "Outcomes HH, HT, TH, TT — two of four have exactly one head, so 2/4 = 1/2.",
          },
          {
            id: "da-pro-m2",
            prompt: "Events A and B are independent with P(A) = 0.4 and P(B) = 0.5. P(A and B) is:",
            options: ["0.9", "0.2", "0.1", "0.45"],
            correctIndex: 1,
            explanation: "For independent events the joint probability multiplies: 0.4 × 0.5 = 0.2.",
          },
        ],
        hard: [
          {
            id: "da-pro-h1",
            prompt:
              "A disease affects 1% of a population. A test is 99% sensitive and 95% specific. Roughly what share of positives are true positives?",
            options: ["~99%", "~50%", "~17%", "~5%"],
            correctIndex: 2,
            explanation:
              "Per 10,000 people: 99 true positives vs ~495 false positives → 99 / 594 ≈ 17%. Low prevalence dominates test accuracy (base-rate fallacy).",
          },
        ],
      },
      "Data Interpretation": {
        easy: [
          {
            id: "da-int-e1",
            prompt: "Sales grew from 200 units to 250 units. What is the percentage growth?",
            options: ["20%", "25%", "50%", "12.5%"],
            correctIndex: 1,
            explanation: "Growth = (250 − 200) / 200 = 50/200 = 25%.",
          },
        ],
        medium: [
          {
            id: "da-int-m1",
            prompt: "Conversion fell from 8% to 6%. What is the relative (percentage) decrease?",
            options: ["2%", "20%", "25%", "33%"],
            correctIndex: 2,
            explanation:
              "Absolute drop is 2 percentage points; relative drop is 2/8 = 25%. Distinguish points from percent.",
          },
          {
            id: "da-int-m2",
            prompt: "A dashboard shows rising total revenue but falling revenue per customer. The most likely driver is:",
            options: [
              "Prices increased sharply",
              "Customer count grew faster than revenue",
              "Churn dropped to zero",
              "Data is certainly wrong",
            ],
            correctIndex: 1,
            explanation:
              "Total revenue = customers × revenue per customer. Total up with per-customer down implies volume growth in lower-value customers.",
          },
        ],
        hard: [
          {
            id: "da-int-h1",
            prompt: "An A/B test peeked at daily results and stopped once p < 0.05. The main risk is:",
            options: [
              "Reduced sample size cost",
              "Inflated false-positive rate from optional stopping",
              "Loss of randomisation",
              "Selection bias in the control group",
            ],
            correctIndex: 1,
            explanation:
              "Repeatedly testing until significance inflates Type I error well beyond 5%. Fix the sample size in advance or use sequential-testing corrections.",
          },
        ],
      },
    },
  }
};

function getQuestionPool() {
  const skillNode = questionHierarchy["Data Analyst"]?.["Data Analysis"];
  if (!skillNode) return [];

  const questions = [];

  for (const [topic, byDifficulty] of Object.entries(skillNode)) {
    for (const difficulty of DIFFICULTY_ORDER) {
      for (const q of byDifficulty[difficulty] ?? []) {
        questions.push({
          ...q,
          role: "Data Analyst",
          skill: "Data Analysis",
          topic,
          difficulty,
        });
      }
    }
  }

  return questions;
}


const DIFFICULTY_ORDER = ["easy", "medium", "hard"];

function nextDifficulty(current, correct, consecutiveCorrect) {
  const idx = DIFFICULTY_ORDER.indexOf(current);

  if (!correct) {
    return {
      difficulty: DIFFICULTY_ORDER[Math.max(0, idx - 1)],
      consecutiveCorrect: 0,
    };
  }

  const streak = consecutiveCorrect + 1;
  if (streak >= 2) {
    return {
      difficulty:
        DIFFICULTY_ORDER[Math.min(DIFFICULTY_ORDER.length - 1, idx + 1)],
      consecutiveCorrect: 0,
    };
  }

  return { difficulty: current, consecutiveCorrect: streak };
}

function gapWeightOf(topic, weakTopics) {
  return weakTopics.find((w) => w.topic === topic)?.weight ?? 0;
}

function buildTopicStats(answers) {
  const stats = {};
  for (const answer of answers) {
    const entry = stats[answer.topic] ?? { asked: 0, correct: 0 };
    entry.asked += 1;
    if (answer.correct) entry.correct += 1;
    stats[answer.topic] = entry;
  }
  return stats;
}

function pickQuestion(pool, difficulty, usedIds, weakTopics, topicStats) {
  const available = pool.filter((q) => !usedIds.includes(q.id));
  if (!available.length) return null;

  const target = DIFFICULTY_ORDER.indexOf(difficulty);

  const scoreOf = (q) => {
    const gap = gapWeightOf(q.topic, weakTopics);
    const stat = topicStats[q.topic];

    const struggle =
      stat && stat.asked > 0 ? 1 - stat.correct / stat.asked : 0;
    const reinforcement = stat ? struggle * 0.4 : 0;
    const saturation = (stat?.asked ?? 0) * 0.12;
    const distance =
      Math.abs(DIFFICULTY_ORDER.indexOf(q.difficulty) - target) * 0.6;
    const base = gap > 0 ? gap * 1.2 : 0.05;

    return base + reinforcement - saturation - distance + Math.random() * 0.05;
  };

  return [...available].sort((a, b) => scoreOf(b) - scoreOf(a))[0] ?? null;
}

function computeProficiency(base, answers, difficultyReached = "medium") {
  if (!answers.length) return base;

  const weight = { easy: 1, medium: 1.5, hard: 2.25 };
  let earned = 0;
  let possible = 0;

  for (const answer of answers) {
    possible += weight[answer.difficulty];
    if (answer.correct) earned += weight[answer.difficulty];
  }

  const performance = (earned / possible) * 100;
  const reachBonus = { easy: -3, medium: 0, hard: 4 }[difficultyReached];
  const blended = base * 0.45 + performance * 0.55 + reachBonus;

  return Math.max(0, Math.min(100, Math.round(blended)));
}


const DIFFICULTY_LABEL = {
  easy: "EASY",
  medium: "MEDIUM",
  hard: "HARD",
};

const DIFFICULTY_CLASS = {
  easy: "difficulty-easy",
  medium: "difficulty-medium",
  hard: "difficulty-hard",
};

function Bar({ value, variant = "" }) {
  return (
    <div className="aq-bar">
      <div
        className={`aq-bar-fill ${variant}`}
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  );
}

function Metric({ label, value }) {
  return (
    <div className="aq-metric">
      <p>{label}</p>
      <strong>{value}</strong>
    </div>
  );
}

function Card({ children, className = "" }) {
  return <section className={`aq-card ${className}`}>{children}</section>;
}

function Header() {
  return (
    <header className="aq-header">
      <span className="aq-badge">
        <span className="aq-dot" />
        AI-Powered Adaptive Assessment
      </span>

      <h1>Adaptive Skill Assessment</h1>
      <p>
        Questions adapt to your performance to accurately measure your evolving
        skill level.
      </p>
    </header>
  );
}

function ContextStrip() {
  return (
    <div className="aq-context">
      <strong>{employee.name}</strong>
      <span>{employee.role}</span>
      <span>Skill: {employee.skill}</span>
      <span className="aq-gap-pill">
        Primary gap: {employee.primarySkillGap}
      </span>
      <span>
        {employee.currentProficiency}% → target {employee.targetProficiency}%
      </span>
    </div>
  );
}

function StartScreen({ onStart }) {
  const stats = [
    { label: "Skill", value: employee.skill },
    { label: "Primary skill gap", value: employee.primarySkillGap },
    { label: "Questions", value: `${employee.totalQuestions}` },
    { label: "Starting difficulty", value: "Medium" },
  ];

  return (
    <Card>
      <div className="aq-start-top">
        <div className="aq-profile">
          <div className="aq-avatar">RS</div>
          <div>
            <h2>{employee.name}</h2>
            <p>{employee.role}</p>
          </div>
        </div>

        <div className="aq-levels">
          <div>
            <span>Current level</span>
            <strong>{employee.currentProficiency}%</strong>
            <Bar value={employee.currentProficiency} />
          </div>

          <div>
            <span>Target level</span>
            <strong>{employee.targetProficiency}%</strong>
            <Bar value={employee.targetProficiency} variant="green" />
          </div>
        </div>
      </div>

      <div className="aq-stats-grid">
        {stats.map((item) => (
          <div className="aq-stat-box" key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>

      <div className="aq-focus">
        <h3>Focus areas from your skill gap</h3>

        {employee.weakTopics.map((topic) => (
          <div className="aq-focus-row" key={topic.topic}>
            <div className="aq-focus-heading">
              <strong>{topic.topic}</strong>
              <span className={`gap-level ${topic.level.toLowerCase()}`}>
                {topic.level} · {Math.round(topic.weight * 100)}%
              </span>
            </div>
            <Bar value={topic.weight * 100} variant="amber" />
          </div>
        ))}

        <p>
          Recommended learning area:{" "}
          <strong>{employee.recommendedLearningArea}</strong>
        </p>
      </div>

      <p className="aq-info">
        This is an adaptive test. Questions are drawn only from your field and
        skill, weighted towards your identified gaps. Difficulty rises after
        consecutive correct answers and eases after an incorrect one.
      </p>

      <button className="aq-primary-btn" onClick={onStart}>
        Start Assessment
      </button>
    </Card>
  );
}

function QuizScreen({
  question,
  questionNumber,
  difficulty,
  score,
  accuracy,
  remaining,
  selected,
  submitted,
  nextLevel,
  isLast,
  onSelect,
  onSubmit,
  onNext,
}) {
  const correct = submitted && selected === question.correctIndex;
  const progress = ((questionNumber - 1) / employee.totalQuestions) * 100;
  const isGapTopic = gapWeightOf(question.topic, employee.weakTopics) > 0;

  return (
    <div className="aq-stack">
      <Card>
        <ContextStrip />

        <div className="aq-question-header">
          <div>
            <h2>
              Question {questionNumber} of {employee.totalQuestions}
            </h2>
            <p>
              Topic: <strong>{question.topic}</strong>
              {isGapTopic && <span className="aq-gap-focus">Gap focus</span>}
            </p>
          </div>

          <span className={`difficulty ${DIFFICULTY_CLASS[question.difficulty]}`}>
            {DIFFICULTY_LABEL[question.difficulty]}
          </span>
        </div>

        <Bar value={progress} />

        <div className="aq-metrics-grid">
          <Metric label="Score" value={score} />
          <Metric label="Accuracy" value={`${accuracy}%`} />
          <Metric label="Remaining" value={remaining} />
        </div>

        <div className="aq-difficulty-track">
          {["easy", "medium", "hard"].map((level, index) => (
            <React.Fragment key={level}>
              <div
                className={`aq-level ${
                  level === difficulty ? "active" : ""
                }`}
              >
                {level}
              </div>
              {index < 2 && <span>→</span>}
            </React.Fragment>
          ))}
        </div>
      </Card>

      <Card>
        <h2 className="aq-question">{question.prompt}</h2>

        <div className="aq-options">
          {question.options.map((option, index) => {
            const isSelected = selected === index;
            const isRight = index === question.correctIndex;

            return (
              <button
                key={option}
                disabled={submitted}
                onClick={() => onSelect(index)}
                className={[
                  "aq-option",
                  isSelected && !submitted ? "selected" : "",
                  submitted && isRight ? "correct" : "",
                  submitted && isSelected && !isRight ? "wrong" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <span className="aq-option-letter">
                  {String.fromCharCode(65 + index)}
                </span>
                <span>{option}</span>
              </button>
            );
          })}
        </div>

        {!submitted ? (
          <button
            className="aq-primary-btn"
            onClick={onSubmit}
            disabled={selected === null}
          >
            Submit Answer
          </button>
        ) : (
          <div className="aq-feedback-area">
            <div className={`aq-feedback ${correct ? "correct" : "wrong"}`}>
              <strong>{correct ? "Correct" : "Incorrect"}</strong>
              <p>
                Correct answer: {question.options[question.correctIndex]}
              </p>
              <span>{question.explanation}</span>

              <div className="aq-feedback-tags">
                <span>Topic: {question.topic}</span>
                <span className={`difficulty ${DIFFICULTY_CLASS[question.difficulty]}`}>
                  Difficulty: {DIFFICULTY_LABEL[question.difficulty]}
                </span>
              </div>
            </div>

            <div className="aq-next-row">
              <span className={`difficulty ${DIFFICULTY_CLASS[nextLevel]}`}>
                Next Difficulty: {DIFFICULTY_LABEL[nextLevel]}
              </span>

              <button className="aq-primary-btn" onClick={onNext}>
                {isLast ? "View Results" : "Next Question"}
              </button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}

function Results({ summary, answers, onRetake }) {
  const [copied, setCopied] = useState(false);
  const json = JSON.stringify(summary.resultJson, null, 2);

  async function copyJson() {
    try {
      await navigator.clipboard.writeText(json);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="aq-stack">
      <Card>
        <ContextStrip />

        <div className="aq-result-grid">
          <Metric label="Accuracy" value={`${summary.accuracy}%`} />
          <Metric
            label="Score"
            value={`${summary.score}/${summary.totalQuestions}`}
          />
          <Metric
            label="Starting"
            value={`${summary.previousProficiency}%`}
          />
          <Metric
            label="Updated level"
            value={`${summary.updatedProficiency}%`}
          />
        </div>

        <div className="aq-proficiency">
          <h3>Proficiency jump</h3>

          <div className="aq-proficiency-bar">
            <div
              className="previous"
              style={{ width: `${summary.previousProficiency}%` }}
            />
            <div
              className="current"
              style={{ width: `${summary.updatedProficiency}%` }}
            />
            <div
              className="target"
              style={{ left: `${summary.targetProficiency}%` }}
            />
          </div>

          <div className="aq-proficiency-labels">
            <span>Previous {summary.previousProficiency}%</span>
            <strong>Current {summary.updatedProficiency}%</strong>
            <span>Target {summary.targetProficiency}%</span>
          </div>
        </div>
      </Card>

      <Card>
        <h3>Topic performance</h3>

        {summary.topicPerformance.map((topic) => (
          <div className="aq-topic-performance" key={topic.topic}>
            <div>
              <strong>{topic.topic}</strong>
              <span>
                {topic.correct}/{topic.asked} · {topic.accuracy}%
              </span>
            </div>
            <Bar
              value={topic.accuracy}
              variant={topic.accuracy >= 60 ? "green" : "amber"}
            />
          </div>
        ))}
      </Card>

      <div className="aq-two-column">
        <Card>
          <h3 className="green-heading">Strong topics</h3>
          {summary.strongTopics.length ? (
            <ul className="aq-topic-list">
              {summary.strongTopics.map((topic) => (
                <li className="strong-item" key={topic}>
                  {topic}
                </li>
              ))}
            </ul>
          ) : (
            <p className="aq-muted">None identified this session.</p>
          )}
        </Card>

        <Card>
          <h3 className="amber-heading">Remaining skill gaps</h3>
          {summary.weakTopics.length ? (
            <ul className="aq-topic-list">
              {summary.weakTopics.map((topic) => (
                <li className="weak-item" key={topic}>
                  {topic}
                </li>
              ))}
            </ul>
          ) : (
            <p className="aq-muted">No weak topics detected. Great work.</p>
          )}
        </Card>
      </div>

      <Card>
        <h3>Adaptive journey</h3>

        <div className="aq-journey">
          {answers.map((answer) => (
            <div className="aq-journey-item" key={answer.questionId}>
              <div
                className={`difficulty ${DIFFICULTY_CLASS[answer.difficulty]}`}
              >
                {DIFFICULTY_LABEL[answer.difficulty]}
              </div>
              <small>Q{answer.index}</small>
              <small>{answer.topic}</small>
              <strong className={answer.correct ? "text-green" : "text-red"}>
                {answer.correct ? "Correct" : "Missed"}
              </strong>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h3>Recommended next steps</h3>

        <ul className="aq-next-steps">
          {(summary.weakTopics.length
            ? summary.weakTopics
            : [employee.recommendedLearningArea]
          )
            .slice(0, 3)
            .map((topic) => (
              <li key={topic}>
                Focused practice module on <strong>{topic}</strong>
              </li>
            ))}

          <li>
            Re-assess in 2 weeks to track movement toward the{" "}
            <strong>{summary.targetProficiency}% target.</strong>
          </li>
        </ul>

        <div className="aq-action-row">
          <button className="aq-secondary-btn">View Skill Insights</button>
          <button className="aq-primary-btn" onClick={onRetake}>
            Retake Assessment
          </button>
        </div>
      </Card>

      <Card>
        <div className="aq-json-header">
          <h3>Result object (JSON)</h3>
          <button className="aq-secondary-btn" onClick={copyJson}>
            {copied ? "Copied" : "Copy Result JSON"}
          </button>
        </div>

        <pre className="aq-json">{json}</pre>
      </Card>
    </div>
  );
}

export default function AdaptiveQuiz() {
  const pool = useMemo(() => getQuestionPool(), []);

  const [phase, setPhase] = useState("start");
  const [difficulty, setDifficulty] = useState(employee.startingDifficulty);
  const [streak, setStreak] = useState(0);
  const [current, setCurrent] = useState(null);
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [pendingDifficulty, setPendingDifficulty] = useState(
    employee.startingDifficulty
  );

  const usedIds = answers.map((answer) => answer.questionId);
  const answered = answers.length;
  const score = answers.filter((answer) => answer.correct).length;
  const accuracy = answered ? Math.round((score / answered) * 100) : 0;
  const remaining = employee.totalQuestions - answered - (current ? 1 : 0);
  const questionNumber = answered + 1;

  function start() {
    const first = pickQuestion(
      pool,
      employee.startingDifficulty,
      [],
      employee.weakTopics,
      {}
    );

    setPhase("quiz");
    setDifficulty(employee.startingDifficulty);
    setPendingDifficulty(employee.startingDifficulty);
    setStreak(0);
    setAnswers([]);
    setCurrent(first);
    setSelected(null);
    setSubmitted(false);
  }

  function submit() {
    if (selected === null || !current) return;

    const correct = selected === current.correctIndex;
    const next = nextDifficulty(difficulty, correct, streak);

    setAnswers((previous) => [
      ...previous,
      {
        index: previous.length + 1,
        questionId: current.id,
        topic: current.topic,
        difficulty: current.difficulty,
        correct,
        selected,
      },
    ]);

    setStreak(next.consecutiveCorrect);
    setPendingDifficulty(next.difficulty);
    setSubmitted(true);
  }

  function advance() {
    if (answered >= employee.totalQuestions) {
      setPhase("results");
      setCurrent(null);
      return;
    }

    const question = pickQuestion(
      pool,
      pendingDifficulty,
      usedIds,
      employee.weakTopics,
      buildTopicStats(answers)
    );

    if (!question) {
      setPhase("results");
      setCurrent(null);
      return;
    }

    setDifficulty(pendingDifficulty);
    setCurrent(question);
    setSelected(null);
    setSubmitted(false);
  }

  const summary = useMemo(() => {
    const stats = buildTopicStats(answers);

    const topicPerformance = Object.entries(stats).map(([topic, value]) => ({
      topic,
      asked: value.asked,
      correct: value.correct,
      accuracy: Math.round((value.correct / value.asked) * 100),
    }));

    const difficultyProgression = answers.map(
      (answer) => answer.difficulty
    );

    const reached = difficultyProgression.reduce(
      (max, currentDifficulty) =>
        DIFFICULTY_ORDER.indexOf(currentDifficulty) >
        DIFFICULTY_ORDER.indexOf(max)
          ? currentDifficulty
          : max,
      "easy"
    );

    const updatedProficiency = computeProficiency(
      employee.currentProficiency,
      answers.map((answer) => ({
        difficulty: answer.difficulty,
        correct: answer.correct,
      })),
      answers.length ? reached : "medium"
    );

    const strongTopics = topicPerformance
      .filter((topic) => topic.accuracy >= 60)
      .map((topic) => topic.topic);

    const weakTopics = topicPerformance
      .filter((topic) => topic.accuracy < 60)
      .map((topic) => topic.topic);

    return {
      accuracy,
      score,
      totalQuestions: answers.length,
      previousProficiency: employee.currentProficiency,
      updatedProficiency,
      targetProficiency: employee.targetProficiency,
      topicPerformance,
      strongTopics,
      weakTopics,
      resultJson: {
        employee: employee.name,
        role: employee.role,
        skill: employee.skill,
        primarySkillGap: employee.primarySkillGap,
        startingProficiency: employee.currentProficiency,
        targetProficiency: employee.targetProficiency,
        questionsAttempted: answers.length,
        correctAnswers: score,
        accuracy,
        finalEstimatedProficiency: updatedProficiency,
        strongTopics,
        weakTopics,
        difficultyProgression,
        generatedAt: new Date().toISOString(),
      },
    };
  }, [answers, score, accuracy]);

  return (
    <main className="adaptive-quiz-page">
      <div className="aq-container">
        <Header />

        {phase === "start" && <StartScreen onStart={start} />}

        {phase === "quiz" && current && (
          <QuizScreen
            question={current}
            questionNumber={questionNumber}
            difficulty={difficulty}
            score={score}
            accuracy={accuracy}
            remaining={Math.max(0, remaining)}
            selected={selected}
            submitted={submitted}
            nextLevel={pendingDifficulty}
            isLast={answered >= employee.totalQuestions}
            onSelect={setSelected}
            onSubmit={submit}
            onNext={advance}
          />
        )}

        {phase === "results" && (
          <Results summary={summary} answers={answers} onRetake={start} />
        )}
      </div>
    </main>
  );
}
