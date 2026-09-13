import Onboarding from './pages/onboarding.jsx'
import UpdatedSkillTwin from './pages/updatedSkillTwin.jsx'
import PersonalisedLearningPath from './pages/personalisedLearningPath.jsx'
import SkillAssessment from './pages/skillAssessment.jsx'
import SkillGapAnalysis from './pages/skillGapAnalysis.jsx'
import SkillTwinNavigator from './pages/skillTwinNavigator.jsx'

function App() {
  const path = window.location.pathname

  if (path === '/updated-skill-twin') {
    return <UpdatedSkillTwin />
  }

  if (path === '/learning-path') {
    return <PersonalisedLearningPath />
  }

  if (path === '/skill-assessment') {
    return <SkillAssessment />
  }

  if (path === '/skill-gap') {
    return <SkillGapAnalysis />
  }

  if (path === '/skill-twin-navigator') {
    return <SkillTwinNavigator />
  }

  return <Onboarding />
}

export default App