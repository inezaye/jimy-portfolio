
import {
  Code2,
  Cpu,
  Globe,
  Palette,
  BrainCircuit,
} from 'lucide-react'

import '../styles/Skills.css'

const skillGroups = [
  {
    title: 'Programming',
    description: 'Writing code and developing logical solutions.',
    icon: Code2,
    skills: ['C++', 'Java', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Embedded Systems & IoT',
    description: 'Exploring the connection between software and hardware.',
    icon: Cpu,
    skills: ['Arduino', 'Microcontrollers', 'Electronics', 'IoT'],
  },
  {
    title: 'Web Development',
    description: 'Building responsive and interactive web interfaces.',
    icon: Globe,
    skills: ['HTML', 'CSS', 'React', 'Vite'],
  },
  {
    title: 'Design & Multimedia',
    description: 'Creating visual content and digital media.',
    icon: Palette,
    skills: ['Canva', 'CapCut', 'Graphic Design', 'Video Editing'],
  },
  {
    title: 'Engineering Foundations',
    description: 'Developing technical thinking through practical exploration.',
    icon: BrainCircuit,
    skills: ['Algorithms', 'Problem-Solving', 'Robotics', 'Automation'],
  },
]

function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="skills-container">

        <div className="skills-heading">
          <p className="section-eyebrow">WHAT I WORK WITH</p>
          <h2>Skills & Expertise</h2>
          <div className="heading-line"></div>
          <p>
            Technologies and technical foundations I have studied,
            practiced, and continue to develop.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => {
            const Icon = group.icon

            return (
              <article className="skill-card" key={group.title}>
                <div className="skill-icon">
                  <Icon size={25} />
                </div>

                <h3>{group.title}</h3>
                <p>{group.description}</p>

                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Skills
