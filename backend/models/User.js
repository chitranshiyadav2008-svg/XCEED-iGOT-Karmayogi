const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },

    password: {
      type: String,
      required: true
    },

    employeeId: {
      type: String,
      default: ""
    },

    role: {
      type: String,
      default: "employee"
    },

    onboarding: {
      primaryArea: {
        type: String,
        default: ""
      },

      responsibilities: {
        type: String,
        default: ""
      },

      strengthAreas: {
        type: [String],
        default: []
      },

      completed: {
        type: Boolean,
        default: false
      }
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", userSchema);