import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

function Contact() {
  return (
    <div>Contact
        <div>
            <button> <InstagramIcon /> </button>
            <button> <LinkedInIcon /> </button>
            <button> <EmailIcon /> </button>
            <button> <PhoneAndroidIcon /> </button>
        </div>
    </div>
  )
}

export default Contact