import React from 'react'
import '../assets/css/Contact.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

function Header() {
  return (
    <div id='contact-div'>
        <div class='contact-container'>
          <h1>Connect With Me</h1>
          <p>Thank you for visiting my portfolio. Feel free to explore my projects and reach out for potential collaborations.</p>
          <div class='contact-box'>
            <div class='contact-left'>
              <h3>Send your request</h3>
              <form>
                <div class="input-row">
                  <div class="input-group">
                    <label>Name</label>
                    <input type="text" placeholder='John Doe'></input>
                  </div>
                  <div class="input-group">
                    <label>Phone</label>
                    <input type="text" placeholder='+1 234 567 8901'></input>
                  </div>
                </div>
                <div class="input-row">
                  <div class="input-group">
                    <label>Email</label>
                    <input type="text" placeholder='example@email.com'></input>
                  </div>
                  <div class="input-group">
                    <label>Subject</label>
                    <input type="text" placeholder='Contact'></input>
                  </div>
                </div>
                <label>Message</label>
                <textarea rows='5' placeholder='Your Message'></textarea>
                <button type='submit'>Send</button>
              </form>
            </div>
            <div class='contact-right'>
              <h3>Reach Me</h3>
              <div>
                <GitHubIcon style={{ fontSize: 60 }}/>
                <p>JonathanKim0</p>
              </div>
              <div>
                <LinkedInIcon style={{ fontSize: 60 }}/>
                <p>Jonathan Kim</p>
              </div>
              <div >
                <EmailIcon style={{ fontSize: 60 }}/>
                <p>jonathan.kim@polymtl.ca</p>
              </div>
              <div>
                <LocalPhoneIcon style={{ fontSize: 60 }}/>
                <p>514-553-3957</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header