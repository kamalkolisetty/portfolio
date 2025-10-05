import React from 'react'
import styles from './About.module.css'
import cursorIcon from '../../assets/about/cursorIcon.png'
import uiIcon from '../../assets/about/uiIcon.png'
import serverIcon from '../../assets/about/serverIcon.png'
import aboutImage from '../../assets/about/aboutImage.png'
export const About = () => {
  return (
   <section className={styles.container} id="about" >
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
      <img className={styles.aboutimage}
      src={aboutImage} alt="" />

      <ul className={styles.aboutitems}>
        <li className={styles.aboutitem}>
          <img 
          src={cursorIcon} alt="" />
        <div  className={styles.aboutitemtext}> 
          <h3>Frontend Developer</h3>
          <p>Skilled in building responsive and optimized websites that provide seamless user experiences across all devices.
          </p>
        </div>
        </li>

        <li className={styles.aboutitem}>
          <img src={serverIcon} alt="" />
        <div className={styles.aboutitemtext}>
          <h3>Backend Developer</h3>
          <p>Experienced in developing fast, scalable, and optimized backend systems and APIs to support seamless front-end functionality.
          </p>
        </div>
        </li>

        <li className={styles.aboutitem}>
          <img src={uiIcon} alt="" />
        <div className={styles.aboutitemtext}>
          <h3>UI Designer</h3>
          <p>Designed multiple high-conversion landing pages and created design systems that improve user interfaces and ensure consistency across platforms.
          </p>
        </div>
        </li>
        
      </ul>
      
      </div>
   </section>
  )
}
