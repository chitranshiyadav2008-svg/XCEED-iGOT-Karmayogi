import SkillTwinNavigator from "./pages/skillTwinNavigator.jsx";
import Auth from "./pages/auth.jsx";
import Onboarding from "./pages/onboarding.jsx";
import SkillAssessment from "./pages/skillAssessment.jsx";
import SkillGapAnalysis from "./pages/skillGapAnalysis.jsx";
import PersonalisedLearningPath from "./pages/personalisedLearningPath.jsx";
import AdaptiveQuiz from "./pages/adaptiveQuiz.jsx";
import UpdatedSkillTwin from "./pages/updatedSkillTwin.jsx";

function App() {
  const path = window.location.pathname;

  switch (path) {
    case "/":
    case "/skill-twin-navigator":
      return <SkillTwinNavigator />;

    case "/auth":
      return <Auth />;

    case "/onboarding":
      return <Onboarding />;

    case "/skill-assessment":
      return <SkillAssessment />;

    case "/skill-gap":
      return <SkillGapAnalysis />;

    case "/learning-path":
      return <PersonalisedLearningPath />;

    case "/adaptive-quiz":
      return <AdaptiveQuiz />;

    case "/updated-skill-twin":
      return <UpdatedSkillTwin />;

    default:
      return <SkillTwinNavigator />;
  }
}

export default App;