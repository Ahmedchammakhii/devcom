import React from 'react'
import "./povcard.scss"
const PovCard = ({which}) => {
  return (
<div className="povCard">
    
<div class="job-listing" style={which!=="dev" ? {background:"#21242a",width:"100%"} : null } >
  <div class="job-listing__text-section"style={which!=="dev" ? {color:"#fff"} : null } >
  
    <p class="job-listing__role" style={which!=="dev" ? {color:"#fff"} : null }>Senior Frontend Developer</p>
    <p class="job-listing__more-info" style={which!=="dev" ? {color:"#fff"} : null }><span class="date">Today </span> <span class="interview-duration">90mn</span> <span class="mottotojoin">Click on join to join the room</span></p>
     </div>
   <ul>
      <li>Frontend</li>
      <li>Senior</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      
      <li style={which!=="dev" ? {background:"#5d7791"} : null }>join</li>
    </ul>

</div>
</div>
  )
}

export default PovCard
