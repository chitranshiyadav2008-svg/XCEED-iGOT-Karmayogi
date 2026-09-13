import Onboarding from "./pages/onboarding";
import UpdatedSkillTwin from "./pages/updatedSkillTwin";
import PersonalisedLearningPath from "./pages/personalisedLearningPath";

function App() {
  const path = window.location.pathname;

  if (path === "/updated-skill-twin") {
    return <UpdatedSkillTwin />;
  }

  if (path === "/learning-path") {
    return <PersonalisedLearningPath />;
  }

  return <Onboarding />;
}

export default App;