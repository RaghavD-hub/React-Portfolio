import React, { useState } from 'react'
import styles from './experience.module.css'
import ListEntry from './ListEntry'
import SectionIntroduction from './SectionIntroduction'

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(null)
  const [hoverIndex, setHoverIndex] = useState(null)

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  const handleMouseEnter = (index) => {
    setHoverIndex(index)
  }

  const handleMouseLeave = () => {
    setHoverIndex(null)
  }

  return (
    <section id="experience">
      <div className={styles.wrapper}>
        <SectionIntroduction dark={true}>EXPERIENCE</SectionIntroduction>
        <div className={styles.sectionContent}>
          <ListEntry
            title={"Full Stack Developer – SmartEF Innovations"}
            date={"July 2025 – Present"}
            active={activeIndex === 0 || hoverIndex === 0}
            onClick={() => handleClick(0)}
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
          >
            {"- Working on full stack development projects, contributing to both frontend and backend systems in a real-world team environment.\n- Tech Stack: React.js, Node.js, MongoDB, Express.js, Git, REST APIs"}
          </ListEntry>

          <ListEntry
            title={"Data Analyst Intern – Imarticus Learning"}
            date={"May 2025 – June 2025"}
            active={activeIndex === 1 || hoverIndex === 1}
            onClick={() => handleClick(1)}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            {"- Analyzed datasets to extract actionable insights using Python and Excel; applied statistical techniques and data visualization tools.\n- Completed final project (certificate pending) involving EDA and model building with real-world datasets."}
          </ListEntry>

          <ListEntry
            title={"Data Analyst – HP Life (Online Course)"}
            date={"March 2025 – April 2025"}
            active={activeIndex === 2 || hoverIndex === 2}
            onClick={() => handleClick(2)}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            {"- Completed certified course on data analysis fundamentals, covering Excel, data interpretation, and business decision-making based on data insights."}
          </ListEntry>

          <ListEntry
            title={"Bootcamp Participant – Node.js, React.js, & AI Projects"}
            date={"2024 – 2025"}
            active={activeIndex === 3 || hoverIndex === 3}
            onClick={() => handleClick(3)}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            {"- Attended multiple bootcamps focused on modern web technologies and AI tools (e.g., Loveable AI), building small apps and completing hands-on challenges."}
          </ListEntry>
        </div>
      </div>
    </section>
  )
}
