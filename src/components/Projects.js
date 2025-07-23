import React from 'react'
import SectionIntroduction from './SectionIntroduction'
import styles from './projects.module.css'


function Projects() {
  return (
    <section id='projects'>
      <div className={styles.wrapper}>
        <SectionIntroduction>PROJECTS</SectionIntroduction>
        <div className={styles.sectionContent}>
          
        </div>

      </div>
    </section>
  )
}

export default Projects
