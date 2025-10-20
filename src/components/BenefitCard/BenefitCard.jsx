import React, { useState } from 'react'

function BenefitCard({ icon, title, description }) {
    const cardStyle = {
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        padding: '32px 24px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'default'
      };
    
      const iconContainerStyle = {
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        backgroundColor: '#e3f2fd',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '20px',
        color: '#1565c0'
      };
    
      const titleStyle = {
        fontSize: '20px',
        fontWeight: '600',
        color: '#1565c0',
        marginBottom: '12px',
        lineHeight: '1.3'
      };
    
      const descriptionStyle = {
        fontSize: '15px',
        color: '#666666',
        lineHeight: '1.6',
        margin: 0
      };
    
      const [isHovered, setIsHovered] = useState(false);
    
      const hoveredCardStyle = {
        ...cardStyle,
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 8px 16px rgba(0, 0, 0, 0.15)' : '0 1px 3px rgba(0, 0, 0, 0.1)'
      };
    
      return (
        <div 
          style={hoveredCardStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div style={iconContainerStyle}>
            {icon}
          </div>
          <h3 style={titleStyle}>{title}</h3>
          <p style={descriptionStyle}>{description}</p>
        </div>
      );
}

export default BenefitCard