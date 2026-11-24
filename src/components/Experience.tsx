
import { Cpu, Users, Trophy, ArrowUpRight } from 'lucide-react'
import '../styles/Experience.css'

const experiences = [
  {
    number: '01',
    icon: Users,
    role: 'ICT Club Advisor',
    organization: 'Ecole des Sciences Byimana',
    category: 'STUDENT LEADERSHIP',
    description:
      'Contributed to technology learning activities within the ICT Club, engaging with fellow students in emerging technologies and practical computing.',
    highlights: [
      'Supported technology learning among club members',
      'Introduced peers to robotics and automation',
      'Encouraged practical exploration of technology',
    ],
  },
  {
    number: '02',
    icon: Trophy,
    role: 'Robotics Competition',
    organization: 'Girls’ STEM Club',
    category: 'TEAM COLLABORATION',
    description:
      'Collaborated with a team on a robot vacuum cleaner project, helping turn the team’s idea into a practical implementation.',
    highlights: [
      'Contributed to the implementation of the robot idea',
      'Worked collaboratively toward a shared technical goal',
      'Part of the team that won the competition',
    ],
  },
  {
    number: '03',
    icon: Cpu,
    role: 'Arduino & Robotics Exploration',
    organization: 'Independent Learning',
    category: 'TECHNICAL DEVELOPMENT',
    description:
      'Explored Arduino programming, electronics modules and robotics concepts to develop a practical understanding of embedded technology.',
    highlights: [
      'Practiced basic Arduino programming',
      'Explored electronic components and modules',
      'Continued learning about hardware and software integration',
    ],
  },
]

function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="experience-container">

        <div className="experience-heading">
          <p className="section-eyebrow">MY JOURNEY</p>
          <h2>Experience & Involvement</h2>
          <div className="heading-line"></div>
          <p>
            Learning through collaboration, practical activities
            and hands-on exploration of technology.
          </p>
        </div>

        <div className="experience-list">
          {experiences.map((item) => {
            const Icon = item.icon

            return (
              <article className="experience-card" key={item.number}>
                <div className="experience-number">
                  {item.number}
                </div>

                <div className="experience-main">
                  <div className="experience-icon">
                    <Icon size={25} />
                  </div>

                  <div className="experience-content">
                    <p className="experience-category">
                      {item.category}
                    </p>

                    <h3>{item.role}</h3>
                    <h4>{item.organization}</h4>

                    <p className="experience-description">
                      {item.description}
                    </p>

                    <ul className="experience-highlights">
                      {item.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="experience-arrow">
                  <ArrowUpRight size={22} />
                </div>
              </article>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Experience
