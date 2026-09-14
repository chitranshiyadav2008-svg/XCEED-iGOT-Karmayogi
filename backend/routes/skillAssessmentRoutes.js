const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  saveAssessment,
  getAssessment,
} = require("../controllers/skillAssessmentController");

router.post(
  "/",
  authMiddleware,
  saveAssessment
);

router.get(
  "/",
  authMiddleware,
  getAssessment
);

module.exports = router;