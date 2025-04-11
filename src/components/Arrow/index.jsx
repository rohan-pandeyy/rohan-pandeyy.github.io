import React from 'react';
import './index.scss';

const Arrow = ({
    rotation = 0,
    size = 40,
    fillColor = 'none',        // Background circle color
    strokeColor = '#d9d5c9',   // Outline color
    arrowColor = '#d9d5c9',    // Arrow line color
    hoverFillColor = '#ffc552', // Background on hover
    hoverStrokeColor = '#ffc552', // Outline on hover
    hoverArrowColor = '#000',  // Arrow on hover
    isHovered
}) => {
    return (
        <div 
            className="arrow-container" 
            style={{ 
                transform: `rotate(${isHovered ? rotation - 45 : rotation}deg)`, 
                width: `${size}px`, 
                height: `${size}px`, 
                transition: 'transform 0.3s ease' 
            }}
        >   
            <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                {/* Background circle */}
                <circle 
                  cx="128" 
                  cy="128" 
                  r="96" 
                  fill={isHovered ? hoverFillColor : fillColor}
                  opacity="1"
                />

                {/* Outer circle stroke */}
                <circle 
                  cx="128" 
                  cy="128" 
                  r="96" 
                  fill="none" 
                  stroke={isHovered ? hoverStrokeColor : strokeColor}
                  strokeWidth="16"
                  strokeMiterlimit="10"
                />

                {/* Arrow parts */}
                <polyline 
                  points="108 100 156 100 156 148"
                  fill="none"
                  stroke={isHovered ? hoverArrowColor : arrowColor}
                  strokeWidth="16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <line 
                  x1="100"
                  y1="156"
                  x2="156"
                  y2="100"
                  stroke={isHovered ? hoverArrowColor : arrowColor}
                  strokeWidth="16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
            </svg>
        </div>
    );
};

export default Arrow;
