import React, { useState } from 'react'

function AwardCards({ icon, year, title, organization, description }) {
    const cardStyle = {
        position: 'relative',
        backgroundColor: '#fff',
        borderRadius: '12px',
        padding: '32px 24px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        height: '100%',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
      };
    
      const iconContainerStyle = {
        marginBottom: '20px',
      };
    
      const iconStyle = {
        fontSize: '48px',
        marginBottom: '8px',
      };
    
      const yearBadgeStyle = {
        position: 'absolute',
        top: '10px',
        right: '10px',
        backgroundColor: '#0066cc',
        color: '#fff',
        padding: '4px 12px',
        borderRadius: '20px',
        fontSize: '12px',
        fontWeight: '600',
      };
    
      const titleStyle = {
        fontSize: '18px',
        fontWeight: '700',
        color: '#1a1a1a',
        marginBottom: '16px',
        lineHeight: '1.4',
      };
    
      const organizationStyle = {
        fontSize: '14px',
        fontWeight: '600',
        color: '#0066cc',
        marginBottom: '16px',
      };
    
      const descriptionStyle = {
        fontSize: '14px',
        color: '#666',
        lineHeight: '1.6',
        marginTop: 'auto',
      };
    
      const [isHovered, setIsHovered] = useState(false);
    
      const hoveredCardStyle = {
        ...cardStyle,
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 8px 24px rgba(0, 0, 0, 0.12)' : '0 2px 8px rgba(0, 0, 0, 0.08)',
      };
    
      return (
        <div 
          style={hoveredCardStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div style={iconContainerStyle}>
            <span style={yearBadgeStyle}>{year}</span>
            <div style={iconStyle}>{icon}</div>
          </div>
          <h3 style={titleStyle}>{title}</h3>
          <div style={organizationStyle}>{organization}</div>
          <p style={descriptionStyle}>{description}</p>
        </div>
      );
}

export default AwardCards