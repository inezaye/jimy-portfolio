
import { GraduationCap, BookOpen } from 'lucide-react'
import '../styles/Education.css'

const education = [
  {
    number: '01',
    period: 'CURRENT',
    institution: 'University of Rwanda',
    qualification: 'Bachelor of Science in Computer Engineering',
    focus: 'Computer Engineering',
    description:
      'Pursuing engineering knowledge with a particular interest in Embedded Systems, Internet of Things (IoT), robotics and hardware-software integration.',
    subjects: [
      'Computer Engineering',
      'Embedded Systems',
      'Internet of Things',
      'Electronics',
    ],
    icon: GraduationCap,
    status: 'Ongoing',
  },
  {
    number: '02',
    period: 'COMPLETED',
    institution: 'Ecole des Sciences Byimana',
    qualification: 'Advanced Level Secondary Education',
    focus: 'Mathematics, Physics and Computer Science (MPC)',
    description:
      'Completed upper secondary education with a focus on mathematics, physics and computer science, building a foundation for further engineering studies.',
    subjects: [
      'Mathematics',
      'Physics',
      'Computer Science',
      'Programming',
    ],
    icon: BookOpen,
    status: 'Completed',
  },
]

function Education() {
  return (
    <section className="education section" id="education">
      <div className="education-container">

        <div className="education-heading">
          <p className="section-eyebrow">MY ACADEMIC BACKGROUND</p>
          <h2>Education</h2>
          <div className="heading-line"></div>
          <p>
            My academic journey and the foundation behind
            my interest in computer engineering.
          </p>
        </div>

        <div className="education-list">
          {education.map((item) => {
            const Icon = item.icon

            return (
              <article className="education-card" key={item.number}>

                <div className="education-icon">
                  <Icon size={28} />
                </div>

                <div className="education-content">
                  <div className="education-top">
                    <span className="education-period">
                      {item.period}
                    </span>
                    <span className="education-status">
                      {item.status}
                    </span>
                  </div>

                  <h3>{item.institution}</h3>
                  <h4>{item.qualification}</h4>

                  <p className="education-focus">
                    {item.focus}
                  </p>

                  <p className="education-description">
                    {item.description}
                  </p>

                  <div className="education-subjects">
                    {item.subjects.map((subject) => (
                      <span key={subject}>{subject}</span>
                    ))}
                  </div>
                </div>

                <span className="education-number">
                  {item.number}
                </span>

              </article>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Education
