import React from 'react'
import styles from './Contact.module.css'
import githubIcon from '../../assets/contact/githubIcon.png'
import linkedinIcon from '../../assets/contact/linkedinIcon.png'
import emailIcon from '../../assets/contact/emailIcon.png'

export const Contact = () => {
    return (
        <footer className={styles.container} id="contact" >
            <div className={styles.text}>
                <h2 >Contact </h2>
                <p>Let's Get in Touch ✨ </p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={emailIcon} alt="" />
                    <a href="mailto:kamalkumarkolisetty@gmail.com
" target='_blank' >kamalkumarkolisetty@gmail.com
                    </a>
                </li>
                <li className={styles.link}>
                    <img src={githubIcon} alt="" />
                    <a href="https://github.com/kamalkolisetty" target='_blank'>kamalkolisetty</a>
                </li>
                <li className={styles.link}>
                    <img src={linkedinIcon} alt="" />
                    <a href="https://www.linkedin.com/in/kamal-kumar-kolisetty-19b944221/" target='_blank'>kamal-kumar-kolisetty</a>
                </li>
            </ul>
        </footer>
    )
}
