import React from 'react';
import { SquareCard } from '../cardSizes';
import './index.scss';
import UserIcon from '../../../assets/icons/UserIcon.png';
import UserIconFill from '../../../assets/icons/UserIconFill.png';

const ResumeCard = () => {
    const isMobile = window.innerWidth <= 872;

    return (
        <SquareCard className="Resume-card" style={{ padding: '20px' }}  onClick={() => {console.log('Card clicked!');}} mobileBackground="#e1526a">
            <img className="User-icon" src={isMobile ? UserIconFill : UserIcon} alt="User Icon"></img>
            <p style={{fontSize: isMobile ? '15px' : '0.7vw', marginBottom: '0'}}>LEARN MORE ABOUT ME</p>
            <h2 style={{marginBottom: '10px', marginTop: '10px'}}>See My Resume</h2>
        </SquareCard>
    );
};

export default ResumeCard;