import React from 'react'
import styles from './aboutme.module.css'
import SectionIntroduction from './SectionIntroduction'

export default function Aboutme() {
    return (
        <section id="about-me" className={styles.aboutMe}>
            <div className={styles.wrapper}>
                <SectionIntroduction>ABOUT ME</SectionIntroduction>
               <div className={styles.sectionContent}>
                    <p className={styles.paragraph}>
                        I'm an enthusiastic <strong>Full Stack Developer</strong> and a <strong>B.Tech student</strong> at Amity University, passionate about creating modern, user-centric web applications. I enjoy bringing ideas to life through clean, scalable code and intuitive interfaces.
                    </p>
                    <p className={styles.paragraph}>
                        My journey into software development began with a genuine curiosity for how technology works. Over time, I’ve become skilled in both front-end and back-end development, and I’m always exploring new tools and frameworks to stay ahead in the ever-evolving tech landscape.
                    </p>
                    <p className={styles.paragraph}>
                        I take pride in writing efficient, maintainable code and enjoy working on projects that challenge me to think critically and creatively. Whether it's building APIs, designing responsive layouts, or optimizing performance, I aim to deliver high-quality solutions.
                    </p>
                    <p className={styles.paragraph}>
                        I’m committed to becoming a proficient <strong>Software Engineer</strong>, constantly sharpening my skills through hands-on experience, collaboration, and continuous learning. I believe in growth through consistency and persistence.
                    </p>
                    <p className={styles.paragraph}>
                        Outside of coding, I’m an <strong>athletic and active person</strong> who enjoys <strong>trekking, going to the gym, walking, watching anime,</strong> and <strong>listening to music</strong>. These activities help me stay balanced, creative, and energized in both life and work.
                    </p>
                </div>

                <div className={styles.icons}>
                    <i className="fa-solid fa-dragon"></i>
                    <i className="fa-solid fa-jedi"></i>
                    <i className="fa-solid fa-chess"></i>
                    <i className="fa-solid fa-atom"></i>
                </div>
            </div>
        </section>
    )
}