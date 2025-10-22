import React from 'react';
import { Calendar } from 'lucide-react';

export default function EventCard({ 
  eventName, 
  description, 
  image, 
  registerLink, 
  startDate, 
  endDate,
  category 
}) {
  // Format date to display
  const formatDate = (date) => {
    const options = { month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  };

  const formatDateRange = () => {
    if (startDate && endDate) {
      const start = formatDate(startDate);
      const end = formatDate(endDate);
      if (start === end) {
        return start;
      }
      return `${start} - ${end}`;
    }
    return formatDate(startDate);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex-shrink-0 w-80 transition-transform hover:scale-105">
      {/* Category Badge */}
      {category && (
        <div className="px-6 pt-6">
          <div className="inline-flex items-center gap-2 mb-3">
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: '#00D9FF' }}
            />
            <span className="text-sm font-semibold text-gray-900">{category}</span>
          </div>
        </div>
      )}

      {/* Event Image */}
      <div className="px-6 pb-4">
        <div className="relative overflow-hidden rounded-xl">
          <img
            src={image}
            alt={eventName}
            className="w-full h-48 object-cover"
          />
        </div>
      </div>

      {/* Event Details */}
      <div className="px-6 pb-6">
        {/* Date */}
        {startDate && (
          <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
            <Calendar size={16} />
            <span>{formatDateRange()}</span>
          </div>
        )}

        {/* Description */}
        <p className="text-sm text-gray-700 leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Register Button */}
        {registerLink && (
          <a
            href={registerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 rounded-full text-white text-sm font-medium transition"
            style={{ 
              backgroundColor: '#1F2937',
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#374151'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#1F2937'}
          >
            Read More
          </a>
        )}
      </div>
    </div>
  );
}