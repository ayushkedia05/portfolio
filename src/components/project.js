
import React,{useEffect, useState} from 'react'
import './project.css'
const Project=(props)=>{

const [curr,setcurr]=useState(0);
  const changeslideL=()=>{
   const btnleft=document.querySelectorAll('.slider__btn slider__btn--left')
  //  btnleft.style.size='20px';
   setcurr(curr-1);
  }

  const changeslideR=()=>{
    const btnright=document.querySelectorAll('.slider__btn slider__btn--right')
    setcurr(curr+1);
   console.log(curr)
 
   }

  useEffect(()=>{
    const slides=document.querySelectorAll('.slide');
     if(curr===slides.length)
     setcurr(0);
     if(curr===-1)
     setcurr(slides.length-1);  
    slides.forEach((s,i)=>s.style.transform=`translateX(${100*(i-curr)}% )`)


     

  },[curr]);


  useEffect(()=>{
    const slider=document.querySelectorAll('.slider');

    slider.forEach((s,i)=>{s.style.transform='scale(0.8)'
    s.style.overflow='hidden'}
    )
  },[]);


   
return <React.Fragment>
<section className="section" id="project">

      <div className="slider">
        <div className="slide">
          <div className="project">
            <h5 className="project__header">Tour guide API</h5>
            <blockquote className="project__text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium quas quisquam non? Quas voluptate nulla minima
              deleniti optio ullam nesciunt, numquam corporis et asperiores
              laboriosam sunt, praesentium suscipit blanditiis. Necessitatibus
              id alias reiciendis, perferendis facere pariatur dolore veniam
              autem esse non voluptatem saepe provident nihil molestiae.
            </blockquote>
           
          </div>
        </div>

          <div className="slide">
          <div className="project">
            <h5 className="project__header">C++ projects</h5>
            <blockquote className="project__text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium quas quisquam non? Quas voluptate nulla minima
              deleniti optio ullam nesciunt, numquam 
            </blockquote>
           
          </div>
        </div>
        <div className="slide">
          <div className="project">
            <h5 className="project__header">Media player and image compressor</h5>
            <blockquote className="project__text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
         
            </blockquote>
           
          </div>
        </div>

        <button className="slider__btn slider__btn--left" onClick={changeslideL} >&larr;</button>
        <button className="slider__btn slider__btn--right"onClick={changeslideR} >&rarr;</button>
        <div className="dots"></div>
      </div>
    </section>

</React.Fragment>
}
export default Project;