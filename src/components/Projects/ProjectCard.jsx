import React from 'react'
import styles from './ProjectCard.module.css'

export const ProjectCard = ({project}) => {
  return (
    <div className={styles.container}>
    <img className={styles.image} src={project.imageSrc} alt={project.title} />
    <h3 className={styles.title}>{project.title} </h3>
    <p className={styles.desc}>{project.description} </p>

    <ul className={styles.skills}>
        {project.skills.map((skill, id) => (
            <li className={styles.skill} key={id}>{skill}</li>
        ))}
    </ul>

    <div className={styles.link}>
        <button> <a  
        
        href={project.github} target="_blank" >Github</a></button>
        
    </div>

</div>
  )
}
