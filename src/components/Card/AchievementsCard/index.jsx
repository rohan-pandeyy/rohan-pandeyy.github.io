import { RectangleCard } from '../cardSizes';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import trophy from '../../../assets/images/trophy.png';
import trophyShine from '../../../assets/images/trophyShine.png';

const AchievementsCard = () => {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 872);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 872);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleCardClick = () => {
        navigate('/achievements');
    };

    return (
        <RectangleCard 
            className="flex flex-col items-start justify-start p-9 group hover:bg-[#39cef7]" 
            onClick={handleCardClick} 
            mobileBackground="#39cef7"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <p className="max-[872px]:text-[25px] text-[1.5vw] font-bold mt-10 text-[#ffffe4] font-['DM_Sans']">Achievements</p>
            <img 
                className="mx-auto w-auto h-[60%] transition-all duration-300"
                src={!isMobile && isHovered ? trophyShine : trophy} 
                alt="trophy"
            />
        </RectangleCard>
    );
};

export default AchievementsCard;