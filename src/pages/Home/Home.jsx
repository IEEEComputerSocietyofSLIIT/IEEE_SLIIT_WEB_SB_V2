import React from "react";
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
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 w-full h-full min-h-[700px] sm:min-h-[600px] md:h-[70vh] lg:h-[90vh] md:max-h-[650px] lg:max-h-[750px]">
          <img 
            src={headerImg} 
            alt="Home-Header-Image" 
            className="w-full h-full object-cover"
          />
          {/* Dark gradient overlay for text visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-0 min-h-[700px] sm:min-h-[600px] md:h-[70vh] lg:h-[90vh] md:max-h-[650px] lg:max-h-[750px] flex items-center justify-center">
          <div className="flex flex-col items-center justify-center text-center w-full">
            {/* Title */}
            <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-10">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-wide drop-shadow-2xl text-white">
                IEEE Student
              </h1>
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight tracking-wide drop-shadow-2xl text-[#0FB2B2]">
                Branch
              </h1>
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-wide drop-shadow-2xl text-white">
                of SLIIT
              </h1>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-5 sm:mb-6 md:mb-8 lg:mb-10 w-full max-w-xs sm:max-w-none sm:w-auto">
              <button 
                onClick={() => {window.open("https://forms.fillout.com/t/pZwz6iZ95hus", "_blank");}}
                className="bg-white text-[#00629B] px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-bold text-sm sm:text-base md:text-lg shadow-lg hover:bg-[#0FB2B2] hover:cursor-pointer hover:text-white transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
              >
                Join Now
              </button>
              <button className="bg-transparent text-white border-2 border-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-bold text-sm sm:text-base md:text-lg hover:bg-white hover:text-[#00629B] transform hover:-translate-y-1 transition-all duration-300 shadow-lg w-full sm:w-auto">
                Learn More
              </button>
            </div>

            {/* Cards - Responsive Layout */}
            <div className="w-full max-w-6xl px-2">
              {/* Mobile: 2 columns grid */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 md:hidden">
                {cardData.map((item, index) => (
                  <div key={index} className="w-full min-w-0">
                    <HomeCards heading={item.heading} count={item.count} />
                  </div>
                ))}
              </div>
              
              {/* Tablet and Desktop: Original flex wrap layout */}
              <div className="hidden md:flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                {cardData.map((item, index) => (
                  <HomeCards key={index} heading={item.heading} count={item.count} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center md:text-left mb-8 sm:mb-10 md:mb-14">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0D1C1C] leading-tight">
              Welcome To
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#00629B] leading-tight">
              IEEE Student Branch
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0D1C1C] leading-tight">
              of SLIIT
            </h1>
          </div>

          {/* Content Card */}
          <div className="relative bg-white rounded-xl sm:rounded-2xl border border-gray-200 shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 max-w-5xl mx-auto backdrop-blur-sm overflow-hidden">
            <img 
              src={homeLogoImg} 
              alt="IEEE-Logo" 
              className="w-24 h-20 sm:w-28 sm:h-24 md:w-32 md:h-28 mx-auto mb-4 sm:mb-6"
            />
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-center text-gray-700">
              Since our inception in 2011, we have been one of the most famous
              student chapters in Sri Lanka. Pioneering a variety of projects
              across multiple fields, including technical innovation and community
              service, our student members participate in seminars, career support
              workshops in science and technical areas, and personal development
              programs to enhance their achievements.
            </p>
            
            {/* Decorative circles */}
            <img
              className="hidden lg:block absolute -top-12 -right-8 w-24 h-24 opacity-20"
              src={circleDesign}
              alt="Circle-Design"
            />
            <img
              className="hidden lg:block absolute -bottom-16 -left-12 w-24 h-24 opacity-20"
              src={circleDesign}
              alt="Circle-Design"
            />
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-br from-[#00629B]/5 via-[#0FB2B2]/5 to-[#00629B]/5 py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#00629B] mb-3 sm:mb-4 md:mb-6 px-2">
              Join IEEE Student Branch at SLIIT
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-12 leading-relaxed px-4">
              Become a part of the world's largest technical professional
              organization dedicated to advancing technology for humanity.
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#00629B] px-2">
              Why Join IEEE at SLIIT?
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
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

      {/* Achievements Section (commented out in original) */}
      {/* <div className="bg-white py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 px-2">
              Our Achievements
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto px-4">
              Celebrating milestones that showcase our dedication to excellence,
              innovation, and community impact
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
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
      </div> */}
    </>
  );
};