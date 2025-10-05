# 🚀 Kamal Kumar Kolisetty's Dynamic Portfolio

### ✨ **Live Portfolio URL: [https://kamalkumar-kolisetty-portfolio.netlify.app/](https://kamalkumar-kolisetty-portfolio.netlify.app/)** ✨

<div align="center">

👋 **Welcome to my digital universe!** I'm Kamal Kumar Kolisetty, a passionate full-stack developer with a love for creating beautiful, intelligent, and highly responsive web applications. This repository isn't just code; it's the home of my personal portfolio—a **living, breathing showcase** that is dynamically powered by the GitHub API itself.

Built from the ground up with **React + Vite**, this single-page application is designed with **pixel-by-pixel precision** and brought to life with mesmerizing animations and interactive effects. It's a real-time reflection of my journey as a developer.

</div>

<div align="center" style="margin-top: 20px; margin-bottom: 20px;">
  <a href="https://www.linkedin.com/in/kamal-kumar-kolisetty-19b944221" target="_blank">
    <img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="mailto:kamalkumarkolisetty@gmail.com" target="_blank">
    <img src="https://img.shields.io/badge/-Email-%23D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
  <a href="https://www.hackerrank.com/kamalkumarkolis1" target="_blank">
    <img src="https://img.shields.io/badge/-HackerRank-%232EC866?style=for-the-badge&logo=hackerrank&logoColor=white" alt="HackerRank" />
  </a>
  <a href="https://kamalkumar-kolisetty-resume.tiiny.site/" target="_blank">
    <img src="https://img.shields.io/badge/-Resume-%23FF6B6B?style=for-the-badge&logo=pdf&logoColor=white" alt="Resume" />
  </a>
</div>

---

## 🌟 Core Features: What Makes This Portfolio Special?

This portfolio was engineered to be more than just a static site. It's a dynamic and automated reflection of my work, built on three core principles.

### 1. The Dynamic Heartbeat: Powered by the GitHub API
The entire portfolio operates with a **dynamic core**, fetching content directly from my GitHub repositories in real-time. This means the site updates itself automatically as I work, ensuring it's never outdated.

* **All Projects, Fetched in Real-Time**: The Projects section doesn't have hardcoded data. It uses the GitHub REST API to scan all my public repositories. It then filters for any repo tagged with the `portfolio-project` topic. The data (title, description, skills, image URL) is parsed directly from a special comment block in each project's `README.md`. If I update a project or add a new one with the topic, it appears on my portfolio **instantly** upon refresh—no redeployment needed!
* **Always-Current Resume Link**: The "Resume" button is also dynamic. It fetches its URL from a specific repository tagged with the `resume-link` topic. If I ever need to update my resume's hosting link, I just change it in that one `README.md` file on GitHub, and my portfolio's button updates itself.

### 2. A Symphony of Motion: Animations & Interactive Effects
Every interaction is designed to be delightful. The UI is filled with smooth, performant animations that create an engaging user experience.

* **Flying Hero Particles**: The hero section features a stunning visual where abstract shapes or code snippets (the "flying pictures") gracefully float across the background. This is achieved with pure CSS `@keyframes` animations, using `transform` properties for buttery-smooth, 60fps performance that doesn't tax the CPU.
* **Engaging Hover Effects**: Interactivity is key. Buttons glow and scale up (`transform: scale(1.05)`), project cards lift with a subtle shadow (`transform: translateY(-5px)`), and skill logos perform a full 360° rotation on hover. These small details make the site feel alive and responsive to the user.
* **Seamless Transitions**: Sections and elements fade or slide into view as you scroll, guided by the Intersection Observer API. This ensures animations only trigger when they are visible, optimizing performance.

### 3. Pixel-Perfect Craftsmanship: Responsive on Every Device
Meticulous care was taken to ensure the portfolio looks and feels perfect on any device, from a small mobile phone to a large desktop monitor.

* **Fluid Layouts**: Using a combination of CSS Flexbox and Grid, the layout gracefully adapts to any screen size. For example, the skills grid might show 5 columns on a desktop but seamlessly stack into 2 columns on a phone.
* **Responsive Typography and Spacing**: Font sizes and spacing are defined with relative units like `rem` and viewport units like `vw` (using `clamp()` for perfect scaling). This ensures text is always readable and elements have enough breathing room, no matter the device.
* **Optimized Assets**: All images, including skill logos and project thumbnails, are optimized for the web. They are lazy-loaded to improve initial page speed and are handled with care to maintain their aspect ratio and crispness on high-resolution displays.

---

## 🛠️ A Tour of the Sections

### 🎨 **Hero Section**
The first impression. It features a typewriter animation for my name, the mesmerizing flying particles in the background, and two clear calls-to-action: a "Let's Connect" button that scrolls to the contact section and the dynamically-linked "Resume" button.

### 👨‍💻 **About Section**
A clean, icon-driven summary of my key roles: Frontend Developer, Backend Developer, and UI Designer. Each role has a pulsing or rotating icon to draw the eye and a concise description of my skills in that area.

### 💡 **Skills Section**
A vibrant, visual grid of my technical abilities. Each skill is represented by its official logo, sourced from a centralized data file. On hover, a tooltip appears and the logo animates, making the exploration of my tech stack interactive and fun.

### 📂 **Projects Section**
The crown jewel of the portfolio. This section dynamically populates with cards for each of my tagged GitHub projects. Each card showcases the project's image, title, description, and a list of technologies used, all pulled directly from the project's own `README.md` file.

### 📞 **Contact Section**
A simple and direct way to get in touch. It includes links to my email, LinkedIn, and GitHub profile, with bouncing icons on hover to encourage interaction.

---

## 🔧 Tech Stack

This project was built with a modern, efficient, and powerful set of technologies:

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS Modules](https://img.shields.io/badge/CSS_Modules-000000?style=for-the-badge&logo=css-modules&logoColor=white)
![GitHub API](https://img.shields.io/badge/GitHub_API-181717?style=for-the-badge&logo=github&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

---

## 📊 My GitHub Stats

<div align="center">

![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=kamalkolisetty&layout=compact&theme=radical)
![Streak Stats](https://github-readme-streak-stats.herokuapp.com/?user=kamalkolisetty&theme=radical)
![Profile Views](https://komarev.com/ghpvc/?username=kamalkolisetty&label=Profile%20Views&color=blue&style=for-the-badge)

</div>

---

<div align="center">
© 2025 Kamal Kumar Kolisetty | Built with ❤️, ☕, and endless pixels.
</div>
