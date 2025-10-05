import React from 'react'
import './About.css'
import { AboutCardsInfo, OurValuesInfo } from '../AboutCards/AboutCards';
import { AboutCards } from '../AboutCards/AboutCards';

export const About = () => {
  return (
    <>
      <div className='about__us'>
        <div className='about__us__s1'>
          <h1>About Us</h1>
          <p>Learn more about our journey, mission, and the impact we're making in the technology community.</p>
        </div>
      </div>
      <div className='about__us__s2'>
        <div className='about__us__s2__sub'>
          {AboutCardsInfo.map((item) => (
            <AboutCards
              image={item.image}
              heading={item.heading}
              para={item.para}
            />
          ))}
        </div>
      </div>

      <div className='our__values'>
        <div className='our__values__s1'>
          <h1>Our Values</h1>
          <p>The principles that guide everything we do</p>
        </div>

        <div className='our__values__s2'>
          {OurValuesInfo.map((item) => (
            <AboutCards
              image={item.image}
              heading={item.heading}
              para={item.para}
            />
          ))}
        </div>
      </div>

    </>
  )
}
