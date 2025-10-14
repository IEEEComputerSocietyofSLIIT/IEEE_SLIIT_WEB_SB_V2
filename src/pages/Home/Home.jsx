import React from 'react'
import './Home.css'
import headerImg from '../../assets/images/home-image.png';
import cardData from '../../components/HomeCards/CardData';
import { HomeCards } from '../../components/HomeCards/HomeCards';
import homeLogoImg from '../../assets/images/logo-home.png';
import circleDesign from '../../assets/images/circle.png';


export const Home = () => {
  return (
    <>
      <div className='home'>
        <div className='home__s1'>
          <img src={headerImg} alt="Home-Header-Image" />
        </div>

        <div className='home__s2'>

        </div>

        <div className='home__s3'>
          <h1>IEEE Student</h1>
          <h1 style={{ color: '#07B492' }}>Branch</h1>
          <h1>SLIIT</h1>
          <div className='home__s3__sub'>
            <button className='home__s3__sub__btn1'>Join Now</button>
            <button className='home__s3__sub__btn2'>Learn More</button>
          </div>
          <div className='home__s3__sub__cards'>
            {cardData.map((item) => (
              <HomeCards
                heading={item.heading}
                count={item.count}
              />
            ))}
          </div>
        </div>
      </div>

      <div className='home__content'>
        <div className='home__content__s1'>
          <h1>Welcome To</h1>
          <h1 style={{ color: '#00629B' }}>IEEE Student Branch</h1>
          <h1>of SLIIT</h1>
        </div>

        <div className='home__content__s2'>
          <img src={homeLogoImg} alt="IEEE-Logo" />
          <p>Since our inception in 2011, we have been one of the most famous student chapters in Sri Lanka. Pioneering a variety of projects across multiple fields, including technical innovation and community service, our student members participate in seminars, career support workshops in science and technical areas, and personal development programs to enhance their achievements.</p>
          <img className='home__content__s2__sub__img1' src={circleDesign} alt="Circle-Design" />
          <img className='home__content__s2__sub__img2' src={circleDesign} alt="Circle-Design" />
        </div>
      </div>

    </>
  )
}
