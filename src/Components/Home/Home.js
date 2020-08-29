import React, { useRef, useEffect } from 'react';
import { TweenMax, Power3 } from 'gsap';
import title1 from '../../images/title1.png';
import title2 from '../../images/webDev.png';
import './Home.css';


function Home(props){
   let t1 = useRef(null);
   let t2 = useRef(null);


   useEffect( () => {
     t1Fn()
     t2Fn()
   }, [])

   const t1Fn = () => {
    TweenMax.to(
      t1,
      3,
      {
        opacity: 1,
        x: 50,
        ease: Power3.easeOut
      }
    )
   }

   const t2Fn = () => {
    TweenMax.to(
      t2,
      3,
      {
        opacity: 1,
        x: -50,
        ease: Power3.easeOut
      }
    )
   }
    return(
        <div>
            <div className='main-container'>
              <img 
                ref={el => {t1 = el}} 
                className='main-title1' src={title1} alt='full stack' />
              <img 
              ref={el => {t2 = el}}
              className='main-title2' src={title2} alt='web dev'/>
            </div>
        </div>
    )
}

export default Home;