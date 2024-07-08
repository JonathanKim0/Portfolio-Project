import React from 'react';
import '../assets/css/Resume.css';
import ENG from '../assets/pdf/Jonathan Kim CV VEng.pdf';
import FR from '../assets/pdf/Jonathan Kim CV VFr.pdf';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Resume() {

    const changeSource = (src) => {
        document.getElementById('resume-frame').src = src;
    }

    return (
        <div className='Resume'>
            <div style={{padding: '10px'}}>
            <a href='/main'
                class="clickable-button"
              >
                <ArrowBackIcon style={{ fontSize: 60 , color: '#3F3B3B'}} />
            </a>
            </div>
            <div className='pdf-div'>
            <iframe id="resume-frame" src={ENG}/>
            </div>
            <div className='button-div'>
            <button className='big-button' onClick={() => changeSource(ENG)}>English</button>
            <button className='big-button' onClick={() => changeSource(FR)}>French</button>
            </div>
            
        </div>
    )
  }
  
  export default Resume