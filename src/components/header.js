import React,{useRef} from "react";
import imag from './images/avenger.jpg'
import "./header.css"
import {Link} from 'react-scroll'
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'
// import Typewriter from 'typewriter-effect/dist/core';
// import ScriptTag from 'react-script-tag';
// import { Icon } from 'react-native-elements'
// export function AddLibrary(urlOfTheLibrary) {
//      const script = document.createElement('script');
//      script.src = urlOfTheLibrary;
//      script.async = true;
//      document.body.appendChild(script);
//    }
     
const Header=()=>{

     // var typed=Typed(".type",{
     //      strings:["Developer","Competitive programmer"],
     //      typeSpeed:100,
     //      backSpeed:60,loop:true
     //  });

     const section1=useRef();
    const gotosection=()=>{
         section1=document.getElementById('section1');
         section1.scrollIntoView({behavior:'sooth'});
    }

   return <React.Fragment>
        <div id="background">
       <header className="header" >
        <nav className="nav">
           <img
           src={imag}
           alt="logdfo"
           className="nav__logo"
           />

           <ul className="nav__links">
               <li className="nav__item">
                    <Link to="about" spy={true} smooth={true} offset={50} duration={1000} className="nav__link" >About</Link>
               </li>
               <li className="nav__item">
                    <Link to="skills" spy={true} smooth={true} offset={100} duration={1000} className="nav__link" >Skills</Link>
               </li>
               <li className="nav__item">
                    <Link to="project" spy={true} smooth={true} offset={50} duration={1000} className="nav__link" >Project</Link>
               </li>
               <li className="nav__item">
                    <Link to="contact" spy={true} smooth={true} offset={50} duration={1000} className="nav__link" > Contact  </Link>
               </li>
           </ul>
           
           
        </nav>


        <div class="header__title">
        <h1>
          Hi 
          <span > ,I </span>
          am<br />
          <span className="highlight">Ayush Kedia</span>
          <div>I am a <span className="type"> <Typewriter
            words={['Developer', 'Competitive programmer']}
            loop={1000000} 
            cursor
            cursorStyle='_'
          //   typeSpeed={70}
          //   deleteSpeed={50}
            delaySpeed={1000}
            
          /></span></div>
        </h1>
        <h4 className="lazy">A lazy developer but ready to learn</h4>
        {/* <button className="btn--text btn--scroll-to" onClick={gotosection} >Learn more &DownArrow;</button> */}
        <Link className="btn--text btn--scroll-to" to="about" spy={true} smooth={true} offset={50} duration={1000} >Learn more</Link>
        
     
      </div>




        </header>
        </div>
    </React.Fragment>


}

export default Header;