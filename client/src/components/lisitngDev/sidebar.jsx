import React from 'react'
import {RiSuitcaseFill} from"react-icons/ri"
import {TiMessages}from"react-icons/ti"
import {BsFillCameraVideoFill} from"react-icons/bs"
import "./sidebar.scss"
import { useNavigate } from 'react-router-dom'

const Sidebar = ({which}) => {
  const navigate = useNavigate()
  return (
    <div className="listingdev__sideBar" style={which=="dev" ? {background:"#121216" } : null} >
    <h4>logo</h4>
    <div className="companiesicon" style={which=="dev" ? {background:"black" } : null} ><RiSuitcaseFill style={ which =="dev" ?{color:"#fff"}:null} onClick={e=>which==="dev" ? navigate("/listingOffers") : navigate("/listingDev")}/></div>
    
    <div className="companiesicon" style={which=="dev" ? {background:"black" } : null}><TiMessages style={ which =="dev" ?{color:"#fff"}:null} onClick={e=>navigate("chatRooms")}/> </div>
    
    <div className="companiesicon" style={which=="dev" ? {background:"black" } : null} ><BsFillCameraVideoFill style={ which =="dev" ?{color:"#fff"}:null}  onClick={e=> which==="dev" ? navigate("/myapplications") : navigate("/interview")}/></div>

  </div>
  )
}

export default Sidebar
