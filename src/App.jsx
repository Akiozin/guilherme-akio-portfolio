import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import ExperienceSection from './components/ExperienceSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen bg-base-deep text-ink-50 selection:bg-accent-cyan/30 overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
      </main>
      <Footer />
    </div>
  )
}
