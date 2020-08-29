import React, { useEffect, useRef, useState } from 'react';
import { TweenMax, Power3} from 'gsap';
import './about.css';
import { Tween } from 'gsap/gsap-core';


function About(props){
  let [circleToggle, setCircleToggle] = useState(false);

  let aboutPage = useRef(null);
  let circle = useRef(null);
  let circleRed = useRef(null);
  let circleBlue = useRef(null);

  const handleExpand = () => {
    TweenMax.to(circleRed, .8, {width: 200, height: 200, ease: Power3.easeOut, backgroundColor: 'purple', borderRadius:0})
    setCircleToggle(true);
  }

  const handleShrink = () => {
    TweenMax.to(circleRed, .8, {width: 75, height: 75, ease: Power3.easeOut, backgroundColor: 'red', borderRadius:100})
    setCircleToggle(false);
  }

  useEffect(() => {
    TweenMax.to(aboutPage, 0, {css: {visibility: 'visible'}})
    TweenMax.from(circle, 2, {opacity: 0, x: 300, ease: Power3.easeOut})
    TweenMax.from(circleRed, 2, {opacity: 0, x: 300, ease: Power3.easeOut, delay: .2})
    TweenMax.from(circleBlue, 2, {opacity: 0, x: 300, ease: Power3.easeOut, delay: .4})
  }, [])
    return(
      <div 
        ref={el => aboutPage = el} 
        className='about-page'>
        <h1>THIS IS ABOUT ME</h1>
        <div 
          ref={el => circle = el} 
          className='circle'></div>
        <div 
          onClick={circleToggle !== true ? handleExpand : handleShrink}
          ref={el => circleRed = el} 
          className='circle red'></div>
        <div 
          ref={el => circleBlue = el} 
          className='circle blue'></div>
          <img src='https://spoonacular.com/recipeImages/428263-312x231.jpg'/>
      </div>
    )
}

export default About;