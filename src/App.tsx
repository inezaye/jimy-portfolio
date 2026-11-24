import About from './components/About'
import Contacts from './components/Contacts'
import Education from './components/Education'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
     <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contacts />
      </main>
    </div>
   
  )
}

export default App 