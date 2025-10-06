import React from 'react'
import './About.css'
import { AboutCardsInfo, OurValuesInfo } from '../../components/AboutCards/AboutCards'
import { AboutCards } from '../../components/AboutCards/AboutCards';
import actionImg1 from '../../assets/images/action_img_1.png';
import actionImg2 from '../../assets/images/action_img_2.png';
import actionImg3 from '../../assets/images/action_img_3.png';


export const About = () => {

const ourComActionInfo = [
  {
    image: actionImg1,
    heading: "Team Collaboration",
    para: "Working together to solve complex engineering challenges"
  },
  {
    image: actionImg2,
    heading: "Hands-on Learning",
    para: "Practical experience with cutting-edge technology"
  },
  {
    image: actionImg3,
    heading: "Excellence Recognition",
    para: "Celebrating achievements and outstanding contributions"
  }
]

const journeyInfo = [
  {
    year: "2011",
    heading: "IEEE Student Branch SLIIT Founded",
    para: "Establishing our foundation to serve the student community",
    icon: "🏛️"
  },
  {
    year: "2015",
    heading: "First IEEE Day Celebration",
    para: "Commemorating IEEE's contributions to technology advancement",
    icon: "🎉"
  },
  {
    year: "2018",
    heading: "Launched Multiple Society Chapters",
    para: "Expanding our reach across various engineering disciplines",
    icon: "🔧"
  },
  {
    year: "2020",
    heading: "Digital Transformation Initiative",
    para: "Adapting to new challenges with innovative digital solutions",
    icon: "💻"
  }
]

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

      <div className='our__com_action'>
        <div className='our__com_action__s1'>
          <h1>Our Community in Action</h1>
          <p>Capturing moments of innovation, collaboration, and impact within our IEEE SLIIT community</p>
        </div>

        <div className='our__com_action__s2'>
  {ourComActionInfo.map((item, index) => (
    <div className="our_com_action_item" key={index}>
      <div className="our_com_action_item_img">
        <img src={item.image} alt={item.heading} />
      </div>
      <div className="our_com_action_item_details">
        <h3>{item.heading}</h3>
        <p>{item.para}</p>
      </div>
    </div>
  ))}
</div>
      </div>

      <div className='our__journey'>
  <div className='our__journey__s1'>
    <h1>Our Journey</h1>
  </div>

  <div className='our__journey__s2'>
    <div className='timeline'>
    {journeyInfo.map((item, index) => (
        <div className={`timeline__item`} key={index}>
          {index % 2 === 0 ? (
            <>
            <div className='timeline__content'>
              <h3>{item.heading}</h3>
              <p>{item.para}</p>
            </div>
            <div className='timeline__marker'>
              <span className='timeline__icon'>{item.icon}</span>
            </div>
            <div className='timeline__year'>
              <span>{item.year}</span>
            </div>
            </>
          ) : (
            <>
            <div className='timeline__year'>
              <span>{item.year}</span>
            </div>
            <div className='timeline__marker'>
              <span className='timeline__icon'>{item.icon}</span>
            </div>
            <div className='timeline__content'>
              <h3>{item.heading}</h3>
              <p>{item.para}</p>
            </div>
            </>
          )}
        </div>
      ))}
    </div>
  </div>
</div>

    </>
  )
}
