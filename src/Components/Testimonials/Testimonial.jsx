import React, { useRef } from 'react'
import './Testimonial.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/11.jpg'
import user_2 from '../../assets/11.jpg'
import user_3 from '../../assets/11.jpg'
import user_4 from '../../assets/11.jpg'

const Testimonial = () => {
    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform=`translateX(${tx}%)`
    }
    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform=`translateX(${tx}%)`
    }

    return (
        <div className='testimonials'>
            <img src={next_icon} className='next-btn' onClick={slideForward} />
            <img src={back_icon} className='back-btn' onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Trevis</h3>
                                    <span>Gangster 001</span>
                                </div>
                            </div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae et veniam cumque quidem commodi harum facilis sit. Fugit ducimus reprehenderit blanditiis corporis!</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>Semi</h3>
                                    <span>Gangster 002</span>
                                </div>
                            </div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae et veniam cumque quidem commodi harum facilis sit. Fugit ducimus reprehenderit blanditiis corporis!</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Grey</h3>
                                    <span>Gangster 003</span>
                                </div>
                            </div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae et veniam cumque quidem commodi harum facilis sit. Fugit ducimus reprehenderit blanditiis corporis!</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>Scott</h3>
                                    <span>Gangster 004</span>
                                </div>
                            </div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae et veniam cumque quidem commodi harum facilis sit. Fugit ducimus reprehenderit blanditiis corporis!</p>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Testimonial