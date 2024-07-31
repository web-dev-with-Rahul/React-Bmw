import React from 'react'
import './About.css'
import about_img from'../../assets/cutie.jpg'
import play_icon from'../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} className='about-img' />
            <img src={play_icon} className='play-icon' onClick={()=>{
              setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>Fast As Wind</h3>
            <h2>Come and Join our League</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, quasi, odio ipsum quibusdam maxime laboriosam vel obcaecati non rerum in itaque commodi.it amet consectetur adipisicing elit. Provident, quasi, odio ipsum quibusdam maxime laboriosam vel obcaecati non rerum in itaque commod</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, quasi, odio ipsum quibusdam maxime laboriosam vel obcaecati non rerum in itaque commodi.it amet consectetur adipisicing elit. Provident, quasi, odio ipsum quibusdam maxime laboriosam vel obcaecati non rerum in itaque commod</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, quasi, odio ipsum quibusdam maxime laboriosam vel obcaecati non rerum in itaque commodi.it amet consectetur adipisicing elit. Provident, quasi, odio ipsum quibusdam maxime laboriosam vel obcaecati non rerum in itaque commod</p>
        </div>
    </div>
  )
}

export default About