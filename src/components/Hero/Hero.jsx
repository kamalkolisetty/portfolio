import React from 'react';
import heroImage from '../../assets/hero/heroImage.png';
import styles from './Hero.module.css';
import { useResume } from './ResumeContext'; // Fixed import path

export const Hero = () => {
  const { resumeLink } = useResume(); // Get resume link from context

  return (
    <>
      <div className="hero-section">
        <section className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>Hi, <br /> I'm Kamal Kumar Kolisetty</h1>
            <p className={styles.desc}>
              A tech enthusiast with a passion for building innovative solutions and enhancing user experiences.
              <br /> Reach out if you’d like to know more!
            </p>
            <div className="buttons-container">
              <a className={`${styles.contactbtn} ${styles.btn}`} href="#contact">
                Let's Connect
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a
                className={`${styles.contactbtn} ${styles.btn}`}
                href={resumeLink || 'https://kamalkumar-kolisetty-resume.tiiny.site/'} // Fallback
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
          <img className={styles.heroimg} src={heroImage} alt="" />
          <div className={styles.topblur} />
          <div className={styles.bottomblur} />
        </section>
      </div>
    </>
  );
};