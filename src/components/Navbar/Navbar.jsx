
import React,{useState} from 'react'
import styles from './Navbar.module.css'
import menuIcon from '../../assets/nav/menuIcon.png';
import { use } from 'react';
import closeIcon from '../../assets/nav/closeIcon.png'
// Use the imported image directly in your component

export const Navbar = () => {
   // console.log(getImageUrl("nav/menuIcon.png")); // Should log the resolved URL
const [menu,setMenu]=useState(false)

  return (
     <nav className={styles.navbar}>
        <a className={styles.title} href="/">My Creative World</a>
        <div className={styles.menu} >
        <img className={styles.menuBtn} 
        
        src={menu?closeIcon:menuIcon} alt="menu icon"
        onClick={()=>{
            setMenu(!menu)

        }}
        />
       
        
        <ul className={`${styles.menuItems} ${menu && styles.menuOpen}`} 
        onClick={()=>{
            setMenu(false);
        }}
        >       
                <li ><a href="#about">About</a></li>
                <li ><a href="#skills">Skills</a></li>
                <li ><a href="#projects">Projects</a></li>
                <li ><a href="#contact">Contact</a></li>
            </ul>
        </div>
      
     </nav>
       
  )
}
