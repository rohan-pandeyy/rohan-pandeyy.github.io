import { RectangleCard } from '../cardSizes';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ContactCard = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 872);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 872);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const navigate = useNavigate();
    const handleCardClick = () => {
        navigate('/contact');
    };

    return (
        <RectangleCard 
            className="flex flex-col items-start justify-end p-9 group hover:bg-[#050127]" 
            onClick={handleCardClick} 
            mobileBackground="#050127"
        >
            <p className="font-bold font-['DM_Sans'] text-[#ffffe4] mb-[10px] max-[872px]:text-[25px] text-[1.5vw]">Let's work together ✨</p>
            <h2 className="font-extrabold text-[#ffc552] m-0 max-[872px]:text-[35px] text-[2.5vw] font-['DM_Sans'] transition-transform duration-300 ease-out group-hover:-translate-y-[10px]">Get in touch now</h2>
        </RectangleCard>
    );
};

export default ContactCard;