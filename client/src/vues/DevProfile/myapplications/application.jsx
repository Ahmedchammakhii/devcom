import React from 'react'
import Sidebar from '../../../components/lisitngDev/sidebar'
import PovCard from '../../listingInterview/PovCard'
import "./application.scss"
const application = () => {
  return (
    <div className='applications__all'>
   <Sidebar which={"dev"}/>
   <div className="allapplications">
   <div className="interviewpov__containers" >
    <h1>Interviews you've got until the moment : </h1>
    <div className="povcard__status">
        <ul>
            <li>Rejected</li>
            <li>Accepted</li>
            <li>Scheduled</li>
            <li>Pending</li>
        </ul>
    </div>
   <PovCard/>
   <PovCard/>
   </div>
  
      </div>
      </div>
  )
}

export default application
