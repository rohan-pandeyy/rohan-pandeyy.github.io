import { useNavigate } from 'react-router-dom';
import { RectangleCard } from './cardSizes';
import { useState, useEffect } from 'react';
import me from '../../assets/images/me.png';
import iamDev from '../../assets/images/IamDev.png';

const AboutCard = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 872);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 872);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCardClick = () => navigate('/about');

  return (
    <RectangleCard
      className="flex flex-col items-start relative p-9 group hover:bg-[#926bf5]"
      mobileBackground="#926bf5"
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        className="w-[90px] h-[90px] transition-all duration-300" // approximated transition
        src={!isMobile && isHovered ? iamDev : me} 
        alt="Me" 
      />
      <h1 className="text-white py-10 text-[35px] max-[1140px]:text-[28px] max-[1330px]:text-[30px] font-extrabold font-['DM_Sans']">Hey, I'm Rohan 👋</h1>

      <div className="relative h-[1.4em] leading-[1.4em] w-full" aria-live="polite">
        <p className={`absolute top-0 left-0 m-0 transition-opacity duration-150 whitespace-nowrap overflow-hidden text-ellipsis text-[#ffffe4] font-medium text-[20px] font-['DM_Sans'] max-[1140px]:text-[15px] max-[1330px]:text-[18px] ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
            Full Stack | IoT | AIML
        </p>
        <p className={`absolute top-0 left-0 m-0 transition-opacity duration-150 whitespace-nowrap overflow-hidden text-ellipsis text-[#ffffe4] font-medium text-[20px] font-['DM_Sans'] max-[1140px]:text-[15px] max-[1330px]:text-[18px] ${isHovered ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          Worked with folks @{" "}
          <a
            href="https://keenheads.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline hover:text-white"
            onClick={(e) => e.stopPropagation()}
          >
            Keenheads
          </a>
        </p>
      </div>
    </RectangleCard>
  );
};

export default AboutCard;
