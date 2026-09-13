const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Allow frontend to communicate with backend
app.use(cors());

// Allow backend to receive JSON data
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "SkillSaarthi backend is running!"
  });
});

// Onboarding API
app.post("/api/onboarding", (req, res) => {
  const { employeeId, primaryArea, responsibilities, strengthAreas } = req.body;

  console.log("Onboarding data received:");
  console.log(req.body);

  res.json({
    success: true,
    message: "Onboarding data received successfully.",
    data: {
      employeeId,
      primaryArea,
      responsibilities,
      strengthAreas
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});