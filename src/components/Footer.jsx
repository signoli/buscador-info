import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../App.css";

const Github = 'https://github.com/signoli';
const Linkedin = 'https://www.linkedin.com/in/signoli/';

const Footer = () => {
  
  return (
    <footer >
      <div className="foot-cont">

            <p>
               Proyecto Buscador Informatorio 2022
            </p>

            <span>
                <a href={Github}>
                  <GitHubIcon />     
                </a>
              
                <a href={Linkedin}>
                  <LinkedInIcon />   
                </a>
             
            </span>

      </div>
    </footer>
  );
}

export default Footer;
