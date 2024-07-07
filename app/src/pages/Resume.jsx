import React from 'react';
import { NavLink } from "react-router-dom";
import '../assets/css/Resume.css';
import CV from '../assets/pdf/Jonathan Kim CV VEng.pdf';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Resume() {
    return (
        <div className='Resume'>
            <div style={{padding: '10px'}}>
            <a href='/main'
                class="clickable-button"
              >
                <ArrowBackIcon style={{ fontSize: 60 , color: '#3F3B3B'}} />
            </a>
            </div>
            <div class='pdf-div'>
            <iframe id="resume-frame" src={CV}/>
            </div>
            <div class='button-div'>
            <button className='big-button'>English</button>
            <button className='big-button'>French</button>
            </div>
            
        </div>
    )
  }
  
  export default Resume