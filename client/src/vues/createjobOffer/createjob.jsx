import { Button } from '@mui/material'
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './createjob.scss'

const createjob = () => {
    const [jobTitle, setJobTitle] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [technologyStack, setTechnologyStack] = useState('');
    const [minimumExperience, setMinimumExperience] = useState('');
    const jobOfferRole = useRef(null)   
    const jobType = useRef(null) 
    const navigate=useNavigate()
      const handleJobTitleChange = (e) => {
      setJobTitle(e.target.value);
    }
    
    const handleJobDescriptionChange = (e) => {
      setJobDescription(e.target.value);
    }
  
    const handleTechnologyStackChange = (e) => {
      setTechnologyStack(e.target.value);
    }
  
    const handleMinimumExperienceChange = (e) => {
      setMinimumExperience(e.target.value);
    }
  
   
    const handleSubmit = (e) => {
      e.preventDefault();
      const Data = {
        jobTitle,
        jobDescription,
        technologyStack,
        minimumExperience,
        jobRole:jobOfferRole.current.selectedIndex[jobOfferRole.current.selectedIndex].value,
        
        jobType:jobType.current.selectedIndex[jobType.current.selectedIndex].value
      }
      // Send data to the server
      console.log('Job offer submitted!');
      navigate("/listingDev")
    }
  return (
    <div className='addJob__all'>
          <div class="container">
<section class="form-section">
    <form>

      <h2 class="form-section-heading">Add an offer</h2>

      <div class="field-wrap">
        <div class="field">
          <label class="label" for="first-name">Job Title</label>
          <input class="input" id="first-name" type="text" placeholder="" value={jobTitle} onChange={handleJobTitleChange} />
        </div>
      </div>

      <div class="field-wrap">
        <div class="field">
          <label class="label" for="last-name">Job Description</label>
          <textarea class="input" id="last-name" type="textarea" placeholder="" value={jobDescription} onChange={handleJobDescriptionChange}/>
        </div>
      </div>

      <div class="field-wrap">
        <div class="field">
          <label class="label" for="city">Technology Stack</label>
          <input class="input" id="city" type="text" autofocus value={technologyStack} onChange={handleTechnologyStackChange}/>
        </div>
      </div>

    </form>
</section>

<section class="form-section">
    <form>

      <h2 class="form-section-heading">More Info</h2>

      <div class="field-wrap">
        <div class="field">
     
          <label class="label" for="about">Minimum Experience <span class="helper-text">(Tell us the Minimum requirement)</span></label>
          <textarea class="input" id="about" value={minimumExperience} onChange={handleMinimumExperienceChange}></textarea>
        </div>
      </div>

      <div class="field-wrap">
        <div class="field">
          <label class="label" for="jobOfferRole">job Offer Role?</label>
          <select class="select" id="jobOfferRole" ref={jobOfferRole}>
            <option value={"0"} default>- Select -</option>
            <option value={"FrontEnd"}>Frontend</option>
            <option value={"Backend"}>Backend</option>
            <option value={"Full-stack"}>Fullstack</option>
      
          </select>
        </div>
      </div>

      <div class="field-wrap" >
        <div class="field">
          <label class="label" for="jobtype">Job Type ?</label>
          <select class="select" id="jobtype" ref={jobType}>
            <option default value={"0"} >- Select -</option>
            <option value="Full-time">Full-time</option>
            <option value={"Part-time"}>Part-time</option>
            <option value={"Contract"}>Contract</option>
   
          </select>
        </div>
      </div>

      <div class="field-wrap">
        <div class="field" style={{width:'90%',justifyContent:"center",background:"transparent"}}>
       

        </div>
      </div>

    </form>
</section>

</div>
<Button style={{background:"#413ef7",color:"#fff",width:"200px",height:"3rem"}} onClick={handleSubmit} >

Submit
</Button>
    </div>
  )
}

export default createjob
