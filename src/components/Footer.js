import React from 'react';
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from '@material-ui/icons/YouTube';
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <a href='https://www.facebook.com/profile.php?id=100026463172933' target='blank'><FacebookIcon /></a>
            <a href='https://www.instagram.com/blazIsme/' target='blank'><InstagramIcon /></a>
            <a href='https://twitter.com/RavitVittt' target='blank'><TwitterIcon /></a>
            <a href='https://www.linkedin.com/in/borng-ravit-68349a234/' target='blank'><LinkedIcon /></a>
            <a href='https://www.youtube.com/channel/UCItZCHNjAtxJcCpTcelp6RA' target='blank'><YouTubeIcon /></a>
        </div>
        <p>&copy:2023brongravit.com</p>
    </div>
  )
}

export default Footer