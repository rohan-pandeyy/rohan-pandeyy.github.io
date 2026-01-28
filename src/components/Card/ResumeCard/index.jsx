import React, { useState, useEffect } from 'react';
import { SquareCard } from '../cardSizes';
import { useNavigate } from 'react-router-dom';
import UserIcon from '../../../assets/icons/UserIcon.png';
import UserIconFill from '../../../assets/icons/UserIconFill.png';
import UserIconWhite from '../../../assets/icons/UserIconWhite.png';

const ResumeCard = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 872);
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 872);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleCardClick = () => {
        navigate('/resume');
    };

    return (
        <SquareCard 
            className="flex flex-col items-start justify-end p-9 group hover:bg-[#e1526a]" 
            onClick={handleCardClick} 
            mobileBackground="#e1526a"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img 
                className="w-[15%] h-auto transition-all duration-300 max-[872px]:w-[10vw]" 
                src={isMobile ? UserIconWhite : (isHovered ? UserIconFill : UserIcon)} 
                alt="User Icon"
            />
            <p className="mt-4 max-[872px]:text-[15px] text-[0.7vw] font-['DM_Sans'] text-[#ffffe4]">LEARN MORE ABOUT ME</p>
            <h2 className="mb-[10px] mt-[10px] transition-transform duration-300 ease-out group-hover:-translate-y-[10px]">See My Resume</h2>
        </SquareCard>
    );
};

export default ResumeCard;