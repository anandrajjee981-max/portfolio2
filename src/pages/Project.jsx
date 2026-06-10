import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import '../project.scss';

const Project = () => {
  let files = [
    {
image : "https://i.pinimg.com/736x/c5/db/f9/c5dbf944b939e5a4332173e63d8f5c06.jpg",
name : "Affectra",
livelink : " https://affectra-koea.onrender.com"
    },

    {
      image : "https://i.pinimg.com/736x/bd/df/ef/bddfef90a6245e481fad5267b9f3fc51.jpg",
      name : "FitNova",
      livelink : "https://summer-internship-hackathon-2026-te.vercel.app/"

    },
    {
      image : "https://i.pinimg.com/1200x/29/95/00/2995008486e78b6ff55f9789cb9adb5a.jpg",
      name : "CineVerse",
      livelink : "https://cineverse-zc5r.onrender.com",

    },
    {
      image: "https://i.pinimg.com/1200x/01/ab/08/01ab08f7f61e5b6238eab104470d0903.jpg",
      name: "mac-os",
      livelink: "https://anandrajjee981-max.github.io/mac-os/"
    },
    {
      image: "https://i.pinimg.com/originals/82/8e/f1/828ef1f45c33f05b8329dd93fffb89d5.gif",
      name: "FinVision",
      livelink: "https://f-invision.vercel.app/"
    },
    {
      image: "https://i.pinimg.com/1200x/d9/06/f5/d906f5a4f4d364e067cc387e75bd2983.jpg",
      name: "Pixelforge",
      livelink: "https://anandrajjee981-max.github.io/PixelForge/"
    },
    {
      image: "https://i.pinimg.com/originals/f2/5f/d0/f25fd08697465b9c131e47698d6c0479.gif",
      name: "smart productivity os",
      livelink: "https://anandrajjee981-max.github.io/productivity-dashboard/"
    }
  ];

  return (
    <div className='project-section'>
      <h1 className="project-title">My Projects</h1>

      <div className="swiper-container">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper"
        >
          {files.map((elem, index) => (
            <SwiperSlide key={index}>
              {/* Card click link functionality */}
              <a href={elem.livelink} target="_blank" rel="noreferrer" className="project-link-wrapper">
                <div className="project-card">
                  <img src={elem.image} alt={elem.name} />
                  <div className="project-info">
                    <h3>{elem.name}</h3>
                    <span className="view-btn">View Live</span>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="swipe-indicator">
        <span className="swipe-text">Swipe</span>
        <div className="swipe-line"></div>
      </div>
    </div>
  );
}

export default Project;