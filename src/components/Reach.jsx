import React from 'react'
const Reachs = [
  "Twitter",
  "LinkedIn",
  "Email",
  ];

const Reach = () => {
  return (
    <div style={style.container}>
      <h3 style={style.h3}>Reach Out to me</h3>
      <p style={style.p} >Feel free to reach out to me via email, LinkedIn, or Twitter for any queries, collaboration opportunities, or further details.</p>
      <div className="Reach-grid" style={style.grid}>
        {Reachs.map((Reachs, index) => (
          <div key={index} className="skill-item items">
            {Reachs}
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
