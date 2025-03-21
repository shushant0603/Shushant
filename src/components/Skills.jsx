import React from 'react'

import '../stylesheets/skills.css'
const skills = [
    "HTML","CSS","TailwindCSS", "JavaScript", "TypeScript", "React", "Next.js",
    "Node.js", "Express.js", "MongoDB",
    "C++", "Python","DSA","ReactNative", "Postman", "Git",
    "VS Code",
  ];
  

const Skills = () => {
    
  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills & Tools</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
