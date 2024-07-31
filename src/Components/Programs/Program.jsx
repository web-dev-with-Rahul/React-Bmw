import React from 'react'
import './Program.css'
import program_1 from '../../assets/program-1.jpg'
import program_2 from '../../assets/program-2.jpg'
import program_3 from '../../assets/program-3.jpg'
import program_icon_1 from '../../assets/photu.png'

const Program = () => {
    return (
        <div className='programs'>
            <div className="program">
                <img src={program_1} />
                <div className="caption">
                    <img src={program_icon_1} />
                    <p>Low Profile Rims</p>
                </div>
            </div>
            <div className="program">
                <img src={program_2} />
                <div className="caption">
                    <img src={program_icon_1} />
                    <p>Super Cars</p>
                </div>
            </div>
            <div className="program">
                <img src={program_3} />
                <div className="caption">
                    <img src={program_icon_1} />
                    <p>Super Bikes</p>
                </div>
            </div>
        </div>
    )
}

export default Program