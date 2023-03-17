import React from 'react'
import Sidebar from '../../components/lisitngDev/sidebar'
import PovCard from './PovCard'
import "./povCompanies.scss"

const povCompanies = () => {
  return (
    <div className='listingInteriewPovCompanies'>
      <Sidebar/>
                
<div className="interviewpov__containers" >
    <h1 >Interviews you've got until the moment : </h1>
    <div className="povcard__status">
        <ul>
        <li>Rejected</li>
            <li>Accepted</li>
            <li>Scheduled</li>
            <li>Pending</li>
        </ul>
    </div>
      <PovCard which="dev"/>
    </div>
    </div>
  )

}

export default povCompanies
