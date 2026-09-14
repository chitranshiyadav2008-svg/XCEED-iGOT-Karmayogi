const mongoose = require("mongoose");

const skillAssessmentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    skills: [
      {
        skillName: {
          type: String,
          required: true,
        },

        score: {
          type: Number,
          required: true,
          min: 0,
          max: 100,
        },

        level: {
          type: String,
          enum: [
            "Beginner",
            "Intermediate",
            "Advanced",
            "Expert",
          ],
          default: "Beginner",
        },
      },
    ],

    overallScore: {
      type: Number,
      default: 0,
    },

    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "SkillAssessment",
  skillAssessmentSchema
);