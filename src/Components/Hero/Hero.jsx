import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Gas , Grass , Car Nobody rides for free</h1>
            <p>Our cutting edge curriculum is designed to make the best car in the world with high class features</p>
            <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
        </div>

    </div>
  )
}

export default Hero