import React, { useState, useEffect } from 'react';
import { SquareCard } from '../cardSizes';
import LinkedInIcon from '../../../assets/icons/LinkedInIcon.png';
import LinkedInIconFill from '../../../assets/icons/LinkedInIconFill.png';

const LinkedInCard = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 872);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 872);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleCardClick = () => {
        window.open('https://www.linkedin.com/in/rohanpandeyy/', '_blank', 'noopener,noreferrer');
    };

    return (
        <SquareCard 
            className="flex justify-center items-center p-9 group hover:bg-[#2875b1]" 
            onClick={handleCardClick} 
            mobileBackground="#2875b1"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img 
                className="w-[40%] h-auto transition-all duration-300 max-[872px]:w-[30vw]" 
                src={isMobile || isHovered ? LinkedInIconFill : LinkedInIcon} 
                alt="LinkedIn"
            />
        </SquareCard>
    );
};

export default LinkedInCard;