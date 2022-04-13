import React,{useRef} from "react";
import "./about.css";
import imag from "./images/code.jpeg";
import linkedin from "./images/linkedin.png"
import insta from "./images/instagram.png"
import git from "./images/git.png"
import twitter from "./images/twitter.png"



const About = () => {
  return (
    <React.Fragment>
      <div className="aboutme" id="about"  >
        <div className="forimg">
          <img src={imag} alt=" " className="comp"></img>
        </div>

        <div className="writeup">
          <h1>ABOUT ME</h1>
          <div className="text">
            <p>I'm Ayush Kedia, this website is my attempt to 
            represent myself <br></br>to the internet, I am a web
            developer and Competitive programmer.<br></br> A tech entusiast and ready to learn.</p>

            <br></br>
            {/* <br></br> */}

            If you wish to contact me, connect me here
          </div>
        <ul className="links">
         <li>  <a href="https://www.linkedin.com/in/ayush-kedia-4a3519200/" className="link"> <img 
            src={linkedin}
            alt="linkedin"
            className="link"
            /></a></li>
            <li><a href="https://github.com/ayushkedia05" className="link"><img 
            src={git}
            alt="Github"
            className="link"
            /></a></li>
            <li><a href="https://www.instagram.com/ayush_kedia05/" className="link"><img 
            src={insta}
            alt="instagram"
            className="link"
            /></a></li>
            <li><a href="https://www.instagram.com/ayush_kedia05/" className="link"><img 
            src={twitter}
            alt="twitter"
            className="link"
            /></a></li>
            </ul>

            <div className="text ne">
            <p>Name : Ayush Kedia</p>
            <p>city : Bangalore,India</p>
            <p>Email: kediaayush26@gmail.com</p>
        </div>
        <div className="text2"><a href="https://drive.google.com/file/d/1LakDTcj70CXgyYlW5GmUPYClp3RtKmmo/view?usp=sharing" target="_blank" rel="noreferrer"><button className="button">download CV</button></a></div>
        </div>
        






      </div>
        

     














    </React.Fragment>
  );
};

export default About;





