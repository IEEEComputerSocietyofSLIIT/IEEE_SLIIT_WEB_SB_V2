import React, { useState,useRef } from 'react';
import { ChevronLeft, ChevronRight, Search, Filter  } from 'lucide-react';
import eventImages from '../assets/images/Events';
import EventCard from '../components/EventCard';

export default function EventsPage() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [activeTab, setActiveTab] = useState('upcoming');
    const upcomingScrollRef = useRef(null);
    const pastScrollRef = useRef(null);

  // Sample event images - replace with your actual event images
  const eventMemories = [
    {
      id: 1,
      image:eventImages.SLIITXtremeOC ,
      alt: 'Event 1'
    },
    {
      id: 2,
      image: eventImages.SLIITXtremeOC,
      alt: 'Event 2'
    },
    {
      id: 3,
      image: eventImages.SLIITXtremeOC,
      alt: 'Event 3'
    },
    {
      id: 4,
      image: eventImages.SLIITXtremeOC,
      alt: 'Event 4'
    },
    {
      id: 5,
      image: eventImages.SLIITXtremeOC,
      alt: 'Event 5'
    }
  ];

   // Upcoming Events Data
   const upcomingEvents = [
    {
      id: 1,
      eventName: "JOYBOTS 2.0",
      category: "JOYBOTS 2.0",
      description: "Joybots 2.0 - We bring you the joy and happiness in robotic and knowledge learning and automation activity sessions.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      registerLink: "#",
      startDate: "2024-11-15",
      endDate: "2024-11-15"
    },
    {
      id: 2,
      eventName: "Get your merchandise",
      category: "Get your merchandise",
      description: "Elevate your style with the official IEEE SLIIT merchandise! From trendy t-shirts and hoodies to practical tote bags and exclusive accessories.",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=300&fit=crop",
      registerLink: "#",
      startDate: "2024-11-20",
      endDate: "2024-11-20"
    },
    {
      id: 3,
      eventName: "CellSpell",
      category: "CellSpell",
      description: "CellSpell is the perfect confluence of biology and technology. It educates the students with knowledge on cells while enhancing their memory and understanding.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop",
      registerLink: "#",
      startDate: "2024-12-01",
      endDate: "2024-12-01"
    }
  ];

  // Past Events Data
  const pastEvents = [
    {
      id: 1,
      eventName: "Synergy Springs",
      category: "Synergy Springs",
      description: "A full day leadership and soft skills training program organized for IEEE Members to Unfold.",
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&h=300&fit=crop",
      registerLink: "#",
      startDate: "2024-08-15",
      endDate: "2024-08-15"
    },
    {
      id: 2,
      eventName: "Venturify 2024",
      category: "Venturify 2024",
      description: "Venturify 2024 was a hybrid entrepreneurial boot camp, offering startup development, funding, and mentorship through online and onsite meetings.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      registerLink: "#",
      startDate: "2024-07-10",
      endDate: "2024-07-12"
    },
    {
      id: 3,
      eventName: "Launchpad '24",
      category: "Launchpad '24",
      description: "A webinar series focused on content creation, featuring two leading Sri Lankan content creators and influencers.",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop",
      registerLink: "#",
      startDate: "2024-06-20",
      endDate: "2024-06-20"
    },
    {
      id: 4,
      eventName: "TechTalk 2024",
      category: "TechTalk 2024",
      description: "An insightful discussion on emerging technologies and their impact on the industry.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
      registerLink: "#",
      startDate: "2024-05-15",
      endDate: "2024-05-15"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % eventMemories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + eventMemories.length) % eventMemories.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Helper function to get the position of each slide
  const getSlidePosition = (index) => {
    let offset = index - currentSlide;
    
    // Handle wrapping for smooth circular effect
    if (offset > eventMemories.length / 2) {
      offset -= eventMemories.length;
    } else if (offset < -eventMemories.length / 2) {
      offset += eventMemories.length;
    }
    
    return offset;
  };

  const scrollLeft = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="text-white"
        style={{
          width: '100%',
          height: '400px',
          background: 'linear-gradient(135deg, #003F7F, #0066CC, #0066CC)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Events</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Join our exciting events, workshops and seminars designed to advance your technical knowledge and professional network.
          </p>
        </div>
      </div>

      {/* Explore Event Memories Section */}
      <div 
        className="max-w-7xl mx-auto px-4"
        style={{
          backgroundColor: 'white',
          borderTopLeftRadius: '40px',
          borderTopRightRadius: '40px',
          marginTop: '-60px',
          paddingTop: '60px',
          paddingBottom: '60px'
        }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Explore Event Memories
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto px-4">
          {/* Main Carousel Container */}
          <div className="relative h-96 flex items-center justify-center overflow-hidden">
            {eventMemories.map((event, index) => {
              const offset = getSlidePosition(index);
              const isActive = index === currentSlide;
              const absOffset = Math.abs(offset);
              
              // Only render slides that are close to the current one
              if (absOffset > 2) return null;
              
              return (
                <div
                  key={event.id}
                  className="absolute transition-all duration-500 ease-in-out"
                  style={{
                    transform: `translateX(${offset * 180}px) scale(${isActive ? 1 : 0.85})`,
                    opacity: isActive ? 1 : 0.4,
                    zIndex: isActive ? 10 : 5 - absOffset,
                    pointerEvents: isActive ? 'auto' : 'none'
                  }}
                >
                  <img
                    src={event.image}
                    alt={event.alt}
                    className="w-[550px] h-80 object-cover rounded-3xl shadow-2xl"
                  />
                </div>
              );
            })}

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition z-20"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} className="text-gray-800" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition z-20"
              aria-label="Next slide"
            >
              <ChevronRight size={24} className="text-gray-800" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {eventMemories.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all rounded-full ${
                  index === currentSlide
                    ? 'w-8 h-2'
                    : 'w-2 h-2'
                }`}
                style={{
                  backgroundColor: index === currentSlide ? '#0066CC' : '#D1D5DB'
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header with Tabs */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div className="flex items-center gap-4">
              <Filter className="text-gray-600" size={24} />
              <div className="flex gap-4">
                <button
                  onClick={() => setActiveTab('upcoming')}
                  className={`text-lg font-semibold pb-2 transition-all ${
                    activeTab === 'upcoming'
                      ? 'border-b-2 text-gray-900'
                      : 'text-gray-400'
                  }`}
                  style={activeTab === 'upcoming' ? { borderColor: '#0066CC' } : {}}
                >
                  Upcoming Events
                </button>
                <button
                  onClick={() => setActiveTab('past')}
                  className={`text-lg font-semibold pb-2 transition-all ${
                    activeTab === 'past'
                      ? 'border-b-2 text-gray-900'
                      : 'text-gray-400'
                  }`}
                  style={activeTab === 'past' ? { borderColor: '#0066CC' } : {}}
                >
                  Past Events
                </button>
              </div>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Search By Event"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>

          {/* Upcoming Events Carousel */}
          {activeTab === 'upcoming' && (
            <div>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Upcoming Events</h2>
                <p className="text-gray-600">Don't miss out on these exciting upcoming events and opportunities</p>
              </div>

              <div className="relative">
                <div 
                  ref={upcomingScrollRef}
                  className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {upcomingEvents.map((event) => (
                    <EventCard key={event.id} {...event} />
                  ))}
                </div>

                <button
                  onClick={() => scrollLeft(upcomingScrollRef)}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition z-10"
                  aria-label="Scroll left"
                >
                  <ChevronLeft size={24} className="text-gray-800" />
                </button>

                <button
                  onClick={() => scrollRight(upcomingScrollRef)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition z-10"
                  aria-label="Scroll right"
                >
                  <ChevronRight size={24} className="text-gray-800" />
                </button>
              </div>
            </div>
          )}

          {/* Past Events Carousel */}
          {activeTab === 'past' && (
            <div>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Past Events</h2>
                <p className="text-gray-600">Take a look at our successful past events and what we've accomplished together</p>
              </div>

              <div className="relative">
                <div 
                  ref={pastScrollRef}
                  className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {pastEvents.map((event) => (
                    <EventCard key={event.id} {...event} />
                  ))}
                </div>

                <button
                  onClick={() => scrollLeft(pastScrollRef)}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition z-10"
                  aria-label="Scroll left"
                >
                  <ChevronLeft size={24} className="text-gray-800" />
                </button>

                <button
                  onClick={() => scrollRight(pastScrollRef)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition z-10"
                  aria-label="Scroll right"
                >
                  <ChevronRight size={24} className="text-gray-800" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )}
