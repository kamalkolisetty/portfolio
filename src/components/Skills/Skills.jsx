import React from 'react'
import styles from './Skills.module.css'

import skills from '../../data/skillss'
export const Skills = () => {
  return (
    <section id="skills" >
      
      <div className={styles.container} >
      <h2 className={styles.title} >Skills</h2>
      <div className={styles.skills} >
            {
                skills.map((skill,id)=>{
                    return <div key={id} className={styles.skill}
                    >
                        <div className={styles.skillimage}>
                            <img src={skill.imageSrc} alt={skill.title} />
                        </div>
                        <p className={styles.name} >{skill.title} </p>
                         </div>
                })
            }

        </div>
      </div>

    </section>
  )
}
