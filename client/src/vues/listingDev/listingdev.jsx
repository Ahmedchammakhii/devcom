import React from 'react'
import "./listingdev.scss"

import {BsFillCameraVideoFill,BsFillSignpostFill} from"react-icons/bs"
import {AiFillCalendar} from "react-icons/ai"
import { Avatar } from '@mui/material'
import Card from '../../components/Devlisting/Card' 
import { useNavigate } from 'react-router-dom'
import Sidebar from '../../components/lisitngDev/sidebar'
const listingdev = () => {
  const navigate = useNavigate()
  return (
    <div className='listingdev__all'>
    <Sidebar/>
      <div className="listingdev__mainSection">
        <h1>Developers that suits your needs  : </h1>
        <div className="listingdev__containers">
        
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        
        </div>
      </div>
      <div className="listingdev__profileBar">
        <div className="listingdev__company__infos">
        <Avatar />
      <div className="companymotto">
      
      <h4>proxim </h4>
      <h7 style={{color:"grey"}}>Company</h7>
      </div>


        </div>
     <button onClick={e=>navigate("/company/profile")}> Show profile</button>
     
     <h4><span><AiFillCalendar/></span> Add availabilty</h4>
     <h4 onClick={e=>navigate("/createoffer")}><span><BsFillSignpostFill/></span> Post an offer</h4>
     <div className="connect__motto_bottom">
      {/* <div className="motto__img"></div> */}
     </div>
           </div>
    </div>
  )
}

export default listingdev
