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
    icon: <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.75 1.75C2.75 1.05859 2.19141 0.5 1.5 0.5C0.808594 0.5 0.25 1.05859 0.25 1.75V3V14.875V19.25C0.25 19.9414 0.808594 20.5 1.5 20.5C2.19141 20.5 2.75 19.9414 2.75 19.25V14.25L5.26172 13.6211C6.86719 13.2188 8.56641 13.4062 10.0469 14.1445C11.7734 15.0078 13.7773 15.1133 15.582 14.4336L16.9375 13.9258C17.4258 13.7422 17.75 13.2773 17.75 12.7539V3.08203C17.75 2.18359 16.8047 1.59766 16 2L15.625 2.1875C13.8164 3.09375 11.6875 3.09375 9.87891 2.1875C8.50781 1.5 6.93359 1.32812 5.44531 1.69922L2.75 2.375V1.75Z" fill="white"/>
</svg>

  },
  {
    year: "2015",
    heading: "First IEEE Day Celebration",
    para: "Commemorating IEEE's contributions to technology advancement",
    icon: <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_106_306)">
    <path d="M5.25 0.5C5.94141 0.5 6.5 1.05859 6.5 1.75V3H11.5V1.75C11.5 1.05859 12.0586 0.5 12.75 0.5C13.4414 0.5 14 1.05859 14 1.75V3H15.875C16.9102 3 17.75 3.83984 17.75 4.875V6.75H0.25V4.875C0.25 3.83984 1.08984 3 2.125 3H4V1.75C4 1.05859 4.55859 0.5 5.25 0.5ZM0.25 8H17.75V18.625C17.75 19.6602 16.9102 20.5 15.875 20.5H2.125C1.08984 20.5 0.25 19.6602 0.25 18.625V8ZM3.375 10.5C3.03125 10.5 2.75 10.7812 2.75 11.125V14.875C2.75 15.2188 3.03125 15.5 3.375 15.5H7.125C7.46875 15.5 7.75 15.2188 7.75 14.875V11.125C7.75 10.7812 7.46875 10.5 7.125 10.5H3.375Z" fill="white"/>
    </g>
    <defs>
    <clipPath id="clip0_106_306">
    <path d="M0.25 0.5H17.75V20.5H0.25V0.5Z" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    
  },
  {
    year: "2018",
    heading: "Launched Multiple Society Chapters",
    para: "Expanding our reach across various engineering disciplines",
    icon: <svg width="26" height="21" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_106_317)">
    <path d="M10.5 3H15.5V5.5H10.5V3ZM9.875 0.5C8.83984 0.5 8 1.33984 8 2.375V6.125C8 7.16016 8.83984 8 9.875 8H11.75V9.25H1.75C1.05859 9.25 0.5 9.80859 0.5 10.5C0.5 11.1914 1.05859 11.75 1.75 11.75H5.5V13H3.625C2.58984 13 1.75 13.8398 1.75 14.875V18.625C1.75 19.6602 2.58984 20.5 3.625 20.5H9.875C10.9102 20.5 11.75 19.6602 11.75 18.625V14.875C11.75 13.8398 10.9102 13 9.875 13H8V11.75H18V13H16.125C15.0898 13 14.25 13.8398 14.25 14.875V18.625C14.25 19.6602 15.0898 20.5 16.125 20.5H22.375C23.4102 20.5 24.25 19.6602 24.25 18.625V14.875C24.25 13.8398 23.4102 13 22.375 13H20.5V11.75H24.25C24.9414 11.75 25.5 11.1914 25.5 10.5C25.5 9.80859 24.9414 9.25 24.25 9.25H14.25V8H16.125C17.1602 8 18 7.16016 18 6.125V2.375C18 1.33984 17.1602 0.5 16.125 0.5H9.875ZM4.25 18V15.5H9.25V18H4.25ZM16.75 15.5H21.75V18H16.75V15.5Z" fill="white"/>
    </g>
    <defs>
    <clipPath id="clip0_106_317">
    <path d="M0.5 0.5H25.5V20.5H0.5V0.5Z" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    
  },
  {
    year: "2020",
    heading: "Digital Transformation Initiative",
    para: "Adapting to new challenges with innovative digital solutions",
    icon: <svg width="26" height="21" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_106_329)">
    <path d="M3 3C1.62109 3 0.5 4.12109 0.5 5.5V15.5C0.5 16.8789 1.62109 18 3 18H23C24.3789 18 25.5 16.8789 25.5 15.5V5.5C25.5 4.12109 24.3789 3 23 3H3ZM4.25 5.5H13C13.6914 5.5 14.25 6.05859 14.25 6.75V9.25C14.25 9.94141 13.6914 10.5 13 10.5H4.25C3.55859 10.5 3 9.94141 3 9.25V6.75C3 6.05859 3.55859 5.5 4.25 5.5ZM3 14.875C3 14.5312 3.28125 14.25 3.625 14.25H13.625C13.9688 14.25 14.25 14.5312 14.25 14.875C14.25 15.2188 13.9688 15.5 13.625 15.5H3.625C3.28125 15.5 3 15.2188 3 14.875ZM15.5 14.875C15.5 14.5312 15.7812 14.25 16.125 14.25H22.375C22.7188 14.25 23 14.5312 23 14.875C23 15.2188 22.7188 15.5 22.375 15.5H16.125C15.7812 15.5 15.5 15.2188 15.5 14.875ZM3.625 11.75C3.79076 11.75 3.94973 11.8158 4.06694 11.9331C4.18415 12.0503 4.25 12.2092 4.25 12.375C4.25 12.5408 4.18415 12.6997 4.06694 12.8169C3.94973 12.9342 3.79076 13 3.625 13C3.45924 13 3.30027 12.9342 3.18306 12.8169C3.06585 12.6997 3 12.5408 3 12.375C3 12.2092 3.06585 12.0503 3.18306 11.9331C3.30027 11.8158 3.45924 11.75 3.625 11.75ZM5.5 12.375C5.5 12.2092 5.56585 12.0503 5.68306 11.9331C5.80027 11.8158 5.95924 11.75 6.125 11.75C6.29076 11.75 6.44973 11.8158 6.56694 11.9331C6.68415 12.0503 6.75 12.2092 6.75 12.375C6.75 12.5408 6.68415 12.6997 6.56694 12.8169C6.44973 12.9342 6.29076 13 6.125 13C5.95924 13 5.80027 12.9342 5.68306 12.8169C5.56585 12.6997 5.5 12.5408 5.5 12.375ZM8.625 11.75C8.79076 11.75 8.94973 11.8158 9.06694 11.9331C9.18415 12.0503 9.25 12.2092 9.25 12.375C9.25 12.5408 9.18415 12.6997 9.06694 12.8169C8.94973 12.9342 8.79076 13 8.625 13C8.45924 13 8.30027 12.9342 8.18306 12.8169C8.06585 12.6997 8 12.5408 8 12.375C8 12.2092 8.06585 12.0503 8.18306 11.9331C8.30027 11.8158 8.45924 11.75 8.625 11.75ZM10.5 12.375C10.5 12.2092 10.5658 12.0503 10.6831 11.9331C10.8003 11.8158 10.9592 11.75 11.125 11.75C11.2908 11.75 11.4497 11.8158 11.5669 11.9331C11.6842 12.0503 11.75 12.2092 11.75 12.375C11.75 12.5408 11.6842 12.6997 11.5669 12.8169C11.4497 12.9342 11.2908 13 11.125 13C10.9592 13 10.8003 12.9342 10.6831 12.8169C10.5658 12.6997 10.5 12.5408 10.5 12.375ZM13.625 11.75C13.7908 11.75 13.9497 11.8158 14.0669 11.9331C14.1842 12.0503 14.25 12.2092 14.25 12.375C14.25 12.5408 14.1842 12.6997 14.0669 12.8169C13.9497 12.9342 13.7908 13 13.625 13C13.4592 13 13.3003 12.9342 13.1831 12.8169C13.0658 12.6997 13 12.5408 13 12.375C13 12.2092 13.0658 12.0503 13.1831 11.9331C13.3003 11.8158 13.4592 11.75 13.625 11.75Z" fill="white"/>
    </g>
    <defs>
    <clipPath id="clip0_106_329">
    <path d="M0.5 0.5H25.5V20.5H0.5V0.5Z" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    
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
    <h3 data-year={item.year}>{item.heading}</h3>
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
    <h3 data-year={item.year}>{item.heading}</h3>
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
