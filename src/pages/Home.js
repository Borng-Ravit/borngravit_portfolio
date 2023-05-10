import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TelegramIcon from "@material-ui/icons/Telegram";
import GihubIcon from "@material-ui/icons/GitHub";
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import "../styles/Home.css";
import CV from '../assets/BorngRavit-CV.pdf'

const Home = () => {
  return (
    <div className='home'>
      <div className='about'>
        <h2>
          <Fade left big cascade>
              Hi, My Name is Borng Ravit
          </Fade>
        </h2>
        <div className='prompt'>
          <p>
            <Fade right big cascade>
              I'm A Web developer with a passion for learning and creating.
            </Fade>
          </p>
          <a href='https://github.com/Borng-Ravit' target='blank'><GihubIcon /></a>
          <a href='#' target='blank'><TelegramIcon /></a>
          <a href='https://www.linkedin.com/in/borng-ravit-68349a234/' target='blank'><LinkedInIcon /></a>
        </div>
        <a href={CV} download='Borng_Ravit_CV' className='btn'>
          <button >Download My CV</button>
        </a>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <Flip left cascade>
              <span>
                HTML, CSS, JavaScript, BootStrap, Jquery, MaterialUI, TailwindCSS,
                StyledComponents.
              </span>
            </Flip>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>
              ...
            </span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <Flip left cascade>
              <span>
                C, C++, Java, JavaScript, Java, TypeScript.
              </span>
            </Flip>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home