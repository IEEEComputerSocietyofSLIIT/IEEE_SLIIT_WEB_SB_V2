import React from "react";
import "./Home.css";
import headerImg from "../../assets/images/home-image.png";
import cardData from "../../components/HomeCards/CardData";
import { HomeCards } from "../../components/HomeCards/HomeCards";
import homeLogoImg from "../../assets/images/logo-home.png";
import circleDesign from "../../assets/images/circle.png";
import AwardCards from "../../components/AwardCards/AwardCards";
import { AwardCardsInfo } from "../../components/AwardCards/awardsInfo";
import BenefitCard from "../../components/BenefitCard/BenefitCard";
import { benefitsData } from "../../components/BenefitCard/benefitsData.jsx";

export const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home__s1">
          <img src={headerImg} alt="Home-Header-Image" />
        </div>

        <div className="home__s2"></div>

        <div className="home__s3">
          <h1>IEEE Student</h1>
          <h1 style={{ color: "#07B492" }}>Branch</h1>
          <h1>SLIIT</h1>
          <div className="home__s3__sub">
            <button onClick={()=>{window.open("https://forms.fillout.com/t/pZwz6iZ95hus", "_blank");}} className="home__s3__sub__btn1">Join Now</button>
            <button className="home__s3__sub__btn2">Learn More</button>
          </div>
          <div className="home__s3__sub__cards">
            {cardData.map((item) => (
              <HomeCards heading={item.heading} count={item.count} />
            ))}
          </div>
        </div>
      </div>

      <div className="home__content">
        <div className="home__content__s1">
          <h1>Welcome To</h1>
          <h1 style={{ color: "#00629B" }}>IEEE Student Branch</h1>
          <h1>of SLIIT</h1>
        </div>

        <div className="home__content__s2">
          <img src={homeLogoImg} alt="IEEE-Logo" />
          <p>
            Since our inception in 2011, we have been one of the most famous
            student chapters in Sri Lanka. Pioneering a variety of projects
            across multiple fields, including technical innovation and community
            service, our student members participate in seminars, career support
            workshops in science and technical areas, and personal development
            programs to enhance their achievements.
          </p>
          <img
            className="home__content__s2__sub__img1"
            src={circleDesign}
            alt="Circle-Design"
          />
          <img
            className="home__content__s2__sub__img2"
            src={circleDesign}
            alt="Circle-Design"
          />
        </div>
      </div>

      <div className="hc_section_3">
        <div className="hc_section_3__s1">
          <h1>Join IEEE Student Branch at SLIIT</h1>
          <p>
            Become a part of the world's largest technical professional
            organization dedicated to advancing technology for humanity.
          </p>
          <h2>Why Join IEEE at SLIIT?</h2>
        </div>
        <div className="hc_section_3__s2">
          <div className="hc_section_3__s2__grid">
            {benefitsData.map((benefit, index) => (
              <BenefitCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="hc_archievements">
        <div className="hc_archievements__s1">
          <h1>Our Achievements</h1>
          <p>
            Celebrating milestones that showcase our dedication to excellence,
            innovation, and community impact
          </p>
        </div>

        <div className="hc_archievements__s2">
          <div className="hc_archievements__s2__grid">
            {AwardCardsInfo.map((award, index) => (
              <AwardCards
                key={index}
                icon={award.icon}
                year={award.year}
                title={award.title}
                organization={award.organization}
                description={award.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
