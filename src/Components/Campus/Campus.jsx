import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/11.jpg'
import gallery_2 from '../../assets/22.jpg'
import gallery_3 from '../../assets/33.jpg'
import gallery_4 from '../../assets/44.jpg'
import white_arrow from '../../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={gallery_1} />
        <img src={gallery_2} />
        <img src={gallery_3} />
        <img src={gallery_4} />
      </div>
      <button className='btn dark-btn' href="https://www.bmw-m.com/en/fastlane/motorsport/motorsport.html">See More Here <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus