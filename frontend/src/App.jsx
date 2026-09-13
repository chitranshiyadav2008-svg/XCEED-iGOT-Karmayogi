import Onboarding from './pages/onboarding.jsx'
import UpdatedSkillTwin from './pages/updatedSkillTwin.jsx'
import PersonalisedLearningPath from './pages/personalisedLearningPath.jsx'
import SkillGapAnalysis from './pages/skillGapAnalysis.jsx'

function App() {
  const path = window.location.pathname

  if (path === '/updated-skill-twin') {
    return <UpdatedSkillTwin />
  }

  if (path === '/learning-path') {
    return <PersonalisedLearningPath />
  }

  if (path === '/skill-gap') {
    return <SkillGapAnalysis />
  }

  return <Onboarding />
}

export default App
