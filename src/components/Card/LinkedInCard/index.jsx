import React from 'react';
import { SquareCard } from '../cardSizes';
import './index.scss';
import LinkedInIcon from '../../../assets/icons/LinkedInIcon.png';
import LinkedInIconFill from '../../../assets/icons/LinkedInIconFill.png';

const LinkedInCard = () => {
    const isMobile = window.innerWidth <= 872;


    const handleCardClick = () => {
        window.open('https://www.linkedin.com/in/rohanpandeyy/', '_blank', 'noopener,noreferrer');
    };

    return (
        <SquareCard className="linkedin-card" style={{ padding: '20px' }}  onClick={handleCardClick} mobileBackground="#2875b1">
            <img className="linkedin-icon" src={isMobile ? LinkedInIconFill : LinkedInIcon} alt="LinkedIn"></img>
        </SquareCard>
    );
};

export default LinkedInCard;