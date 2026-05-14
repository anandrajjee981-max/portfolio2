import React from 'react'
import "../certificate.scss";
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards } from 'swiper/modules'

// Swiper styles import karna zaroori hai
import 'swiper/css'
import 'swiper/css/effect-cards'

const Certificate = () => {
    const mycert = [
        {
            name: "Ranchi hacks",
            link: "https://certificate.givemycertificate.com/c/19f89d6d-acd8-48bb-b2c4-d436888254b6",
            image: './ranchihacks.jpg'
        },
        {
            name: "gen ai",
            link: "https://www.credly.com/badges/5f4e840e-221f-4ba0-8631-8bff0527a2de/linked_in_profile",
            image: '/genai.jpg'
        },
        {
            name: "free code camp v8",
            link: "https://www.freecodecamp.org/certification/anand-raj/responsive-web-design",
            image: 'free.jpg'
        }
    ]

    return (
        <div className='cer'>
            <h2 className="cyber-title" data-text="MY CERTIFICATE">MY CERTIFICATE</h2>
            
            <div className="swiper-container">
                <Swiper
                   effect={'cards'}
    grabCursor={true}
    loop={true} // Isse rotation infinity ho jayegi
    centeredSlides={true} // Slide hamesha center mein rahegi
    modules={[EffectCards]}
    className="mySwiper"
    cardsEffect={{
        slideShadows: false, // Performance aur clean look ke liye
        rotate: true, // Cards ko halka rotate karne ke liye
        perSlideOffset: 8, // Ek ke upar ek dikhne ka offset
        perSlideRotate: 2, // Har slide ka rotation angle
    }}
                >
                    {mycert.map(function (elem, index) {
                        return (
                            <SwiperSlide key={index}>
                                <a href={elem.link} target='_blank' rel="noreferrer" className="card-link">
                                    <div className="image-wrapper">
                                        <img src={elem.image} alt={elem.name} />
                                        <div className="cyber-overlay"></div>
                                    </div>
                                    <div className="card-info">
                                        <h3>{elem.name}</h3>
                                        <span className="cyber-btn">VIEW_CERTIFICATE //</span>
                                    </div>
                                </a>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    )
}

export default Certificate