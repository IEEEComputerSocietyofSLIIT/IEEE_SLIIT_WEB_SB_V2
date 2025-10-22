import React, { useState } from 'react';
import { Calendar, MapPin, Clock, ArrowLeft } from 'lucide-react';

export default function EventDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0);

  // Dummy event data
  const eventData = {
    id: 1,
    eventName: "JOYBOTS 2.0 - Robotics Workshop",
    category: "JOYBOTS 2.0",
    mainImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1563191911-e65f8655ebf9?w=400&h=300&fit=crop"
    ],
    description: `Welcome to JOYBOTS 2.0, an exciting robotics workshop designed to bring joy and innovation to students passionate about technology and automation!

This comprehensive workshop series will introduce participants to the fundamentals of robotics, including:

• Robot design and construction principles
• Programming and automation techniques
• Sensor integration and control systems
• Real-world applications of robotics in various industries
• Hands-on project building and team collaboration

Whether you're a beginner or have some experience with robotics, this workshop offers something for everyone. Our experienced instructors will guide you through interactive sessions, providing personalized attention and support throughout your learning journey.

Participants will have the opportunity to work on exciting projects, collaborate with fellow enthusiasts, and showcase their creations at the end of the workshop. This is more than just a learning experience – it's a chance to be part of a vibrant community of innovators and makers.

Don't miss this opportunity to dive into the fascinating world of robotics and automation. Register now to secure your spot and embark on an unforgettable journey of discovery and innovation!`,
    startDate: "2024-11-15",
    endDate: "2024-11-15",
    startTime: "09:00 AM",
    endTime: "05:00 PM",
    location: "SLIIT Main Campus, Malabe",
    venue: "Tech Innovation Lab, Building A - Level 3",
    registerLink: "#"
  };

  const formatDate = (date) => {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  };

  const formatDateRange = () => {
    const start = formatDate(eventData.startDate);
    const end = formatDate(eventData.endDate);
    if (start === end) {
      return start;
    }
    return `${start} - ${end}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="text-white"
        style={{
          width: '100%',
          height: '300px',
          background: 'linear-gradient(135deg, #003F7F, #0066CC, #0066CC)',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 w-full">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 mb-4 text-white hover:text-gray-200 transition"
          >
            <ArrowLeft size={20} />
            <span>Back to Events</span>
          </button>
          <div className="inline-flex items-center gap-2 mb-3">
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: '#00D9FF' }}
            />
            <span className="text-sm font-semibold">{eventData.category}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">{eventData.eventName}</h1>
        </div>
      </div>

      {/* Content Section */}
      <div 
        className="mx-auto px-10"
        style={{
          backgroundColor: 'white',
          borderTopLeftRadius: '40px',
          borderTopRightRadius: '40px',
          marginTop: '-60px',
          paddingTop: '60px',
          paddingBottom: '60px'
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images */}
          <div className="lg:col-span-2">
            {/* Main Image */}
            <div className="mb-6">
              <img
                src={eventData.gallery[selectedImage]}
                alt={eventData.eventName}
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Gallery */}
            {eventData.gallery.length > 1 && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Gallery</h3>
                <div className="grid grid-cols-4 gap-3">
                  {eventData.gallery.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative overflow-hidden rounded-lg transition-all ${
                        selectedImage === index 
                          ? 'ring-4 ring-blue-500' 
                          : 'hover:opacity-80'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-24 object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Event</h2>
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                {eventData.description}
              </div>
            </div>

            {/* Register Button */}
            <div className="flex justify-center lg:justify-start">
              <a
                href={eventData.registerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 rounded-lg text-white text-lg font-semibold transition shadow-lg hover:shadow-xl"
                style={{ backgroundColor: '#0066CC' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#003F7F'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#0066CC'}
              >
                Register Now
              </a>
            </div>
          </div>

          {/* Right Column - Event Details Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Event Details</h3>
                
                {/* Date and Time */}
                <div className="mb-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#0066CC' }}
                    >
                      <Calendar size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Date</p>
                      <p className="text-gray-900 font-semibold">{formatDateRange()}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 mb-4">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#0066CC' }}
                    >
                      <Clock size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Time</p>
                      <p className="text-gray-900 font-semibold">
                        {eventData.startTime} - {eventData.endTime}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#0066CC' }}
                    >
                      <MapPin size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Location</p>
                      <p className="text-gray-900 font-semibold">{eventData.location}</p>
                      <p className="text-sm text-gray-600 mt-1">{eventData.venue}</p>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 my-6"></div>

                {/* Quick Register */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Quick Actions</h4>
                  <a
                    href={eventData.registerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-6 py-3 rounded-lg text-white text-center font-semibold transition"
                    style={{ backgroundColor: '#0066CC' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#003F7F'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#0066CC'}
                  >
                    Register Now
                  </a>
                  <button
                    className="block w-full px-6 py-3 rounded-lg text-gray-700 text-center font-semibold transition mt-3 border-2 border-gray-300 hover:border-gray-400"
                  >
                    Share Event
                  </button>
                </div>
              </div>

              {/* Additional Info Card */}
              <div className="bg-blue-50 rounded-2xl p-6 mt-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Need Help?</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Have questions about this event? Contact our team for assistance.
                </p>
                <a
                  href="mailto:sliit.ieee@gmail.com"
                  className="text-sm font-semibold hover:underline"
                  style={{ color: '#0066CC' }}
                >
                  sliit.ieee@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}