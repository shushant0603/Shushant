import React from 'react'

 const projects = [
    {
      title: "Chat App",
      description: "Working",
      image:"Chat__app.png",
      // liveDemo: "https://chat-app-frontend-git-main-shushant-kumars-projects.vercel.app",
      // github: "https://github.com/shushant0603/chat_App_Frontend",
    },
    {
      title: "Code_review_AI",
      description: "This application built using the MERN Stack & Using GEMINI API",
      image:"code-review.png",
      liveDemo: "https://code-review-frontend-i23a.onrender.com/",
      github: "https://github.com/shushant0603/Code_review_frontend",
    },
    {
        title: " Smart College Companion",
        description: "A web app to help students manage tasks, events, and resources efficiently.",
        image:"collage_companion.png",
        liveDemo: "https://smart-college-companion-frontend.onrender.com",
        github: "https://github.com/shushant0603/Smart_college_companion_Frontend",
      },
  ];
  

const Project = () => {
  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.heading}>Projects</h2>

      <div style={styles.grid}>
        {projects.map((project, index) => (
          <div style={styles.card} key={index}>
            <img
              src={project.image}
              alt={project.title}
              style={styles.image}
            />
            <h3 style={styles.title}>{project.title}</h3>
            <p style={styles.description}>{project.description}</p>

            <div style={styles.btnGroup}>
           <a href={project.liveDemo} target="_blank" rel="noreferrer" style={styles.btn}>
                Live Demo
               </a> 
              <a href={project.github} target="_blank" rel="noreferrer" style={styles.btn}>
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
const styles = {
    heading: {
      fontSize: "1.5rem",
      fontWeight:"200",
    },
    grid: {
        padding: "2rem 1rem",
      display: "grid",
      gap: "2rem",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    },
    card: {
      backgroundColor: "#1f1f1f",
      borderRadius: "8px",
      padding: "1.5rem",
      transition: "transform 0.3s ease",
      position:"relative",
      overflow:"hidden",
    },
    image: {
      width: "100%",
      height:"50%",
      borderRadius: "5px",
      marginBottom: "1rem",
    },
    title: {
      marginBottom: "0.5rem",
      fontSize: "1.2rem",
    },
    description: {
      marginBottom: "1rem",
      color: "#ccc",
    },
    btnGroup: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '10px',
      marginTop: '10px',
    },
    
    btn: {
      padding: '10px 12px',
      textDecoration: 'none',
      color: '#fff',
      backgroundColor: "#333",
      borderRadius: '5px',
      textAlign: 'center',
      flex: '1 1 45%', // About half, allowing wrapping
      maxWidth: '150px',
      minWidth: '100px',
      boxSizing: 'border-box',
    
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    
    // Add media query for smaller screens
'@media (max-width: 768px)': {
  btn: {
    flex: '1 1 calc(50% - 10px)', // Buttons take up 1/2 of the row on smaller screens
  },
},
'@media (max-width: 480px)': {
  btn: {
    flex: '1 1 100%', // Buttons take full width on very small screens
  },
},
  };


export default Project
