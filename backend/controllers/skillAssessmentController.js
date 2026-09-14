const SkillAssessment = require("../models/SkillAssessment");

const saveAssessment = async (req, res) => {
  try {
    const {
      skills,
      overallScore,
    } = req.body;

    if (!Array.isArray(skills)) {
      return res.status(400).json({
        success: false,
        message: "Skills data is required.",
      });
    }

    const assessment =
      await SkillAssessment.findOneAndUpdate(
        {
          userId: req.user.userId,
        },
        {
          userId: req.user.userId,
          skills,
          overallScore: overallScore || 0,
          completed: true,
        },
        {
          new: true,
          upsert: true,
        }
      );

    res.json({
      success: true,
      message: "Skill assessment saved successfully.",
      assessment,
    });
  } catch (error) {
    console.error(
      "Skill assessment error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message: "Failed to save skill assessment.",
    });
  }
};

const getAssessment = async (req, res) => {
  try {
    const assessment =
      await SkillAssessment.findOne({
        userId: req.user.userId,
      });

    res.json({
      success: true,
      assessment,
    });
  } catch (error) {
    console.error(
      "Get assessment error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message: "Failed to get assessment.",
    });
  }
};

module.exports = {
  saveAssessment,
  getAssessment,
};