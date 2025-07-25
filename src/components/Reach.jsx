import React from 'react'
const Reachs = [
  { name: "Twitter", link: "https://x.com/shushantku68275?s=09" },
  { name: "LinkedIn", link: "https://www.linkedin.com/in/shushant-pandey-771775290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  { name: "Email", link: "mailto:shushantkumar0625@email.com" },
  ];

const Reach = () => {
  return (
    <div style={style.container}>
      <h3 style={style.h3}>Reach Out to me</h3>
      <p style={style.p} >Feel free to reach out to me via email, LinkedIn, or Twitter for any queries, collaboration opportunities, or further details.</p>
      <div className="Reach-grid" style={style.grid}>
        {Reachs.map((Reachs, index) => (
          <div key={index} className="skill-item items">
          <a href={Reachs.link} style={style.link} target="_blank" rel="noopener noreferrer">
              {Reachs.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
const style={
container:{
   marginTop:"-15px",
 
},
link:{
    color: "rgb(26, 25, 25)",
    textDecoration: "none",
    fontSize: "0.9rem",
    fontWeight: "400",
    transition: "all 0.3s ease",
    "&:hover": {
      color: "#1a73e8",
    },
},
h3:{
   
    fontSize: "1.2rem",
    marginBottom:"10px",
    padding:"0 20px",
},
  p:{
    margin: "5px 5px 5px 30px",
    fontWeight: "100",
    fontSize: "0.9rem",
    lineHeight: "1.5",
},

grid:{
  display:"flex",
  gap:"15px",
  padding:"0 30px",
}

}

export default Reach
