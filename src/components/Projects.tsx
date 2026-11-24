
import { ArrowUpRight, Code2, Cpu, Leaf } from 'lucide-react'
import '../styles/Projects.css'

const projects = [
  {
    number: '01',
    title: 'Personal Portfolio Website',
    category: 'WEB DEVELOPMENT',
    description:
      'A personal portfolio website developed with React and TypeScript to present my background, technical interests, skills and projects.',
    technologies: ['React', 'TypeScript', 'CSS', 'Vite'],
    icon: Code2,
    status: 'In Progress',
  },
  {
    number: '02',
    title: 'Arduino & Robotics Exploration',
    category: 'EMBEDDED SYSTEMS',
    description:
      'Practical exploration of Arduino programming, electronics modules and robotics concepts to understand how software interacts with physical systems.',
    technologies: ['Arduino', 'C++', 'Electronics', 'Robotics'],
    icon: Cpu,
    status: 'Learning & Experimenting',
  },
  {
    number: '03',
    title: 'Vetmo',
    category: 'AI & AGRICULTURAL TECHNOLOGY',
    description:
      'An AI-powered livestock health partner concept designed to help small-scale farmers understand animal health concerns and access practical guidance.',
    technologies: ['AI', 'IoT', 'Flutter', 'Python'],
    icon: Leaf,
    status: 'Concept Development',
  },
]

function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="projects-container">

        <div className="projects-heading">
          <p className="section-eyebrow">MY WORK</p>
          <h2>Projects & Exploration</h2>
          <div className="heading-line"></div>
          <p>
            A selection of projects, practical experiments and ideas
            reflecting my growing interest in engineering and technology.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => {
            const Icon = project.icon

            return (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-status">{project.status}</span>
                </div>

                <div className="project-icon">
                  <Icon size={27} />
                </div>

                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-bottom">
                  <span>Technology & Innovation</span>
                  <ArrowUpRight size={20} />
                </div>
              </article>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Projects
