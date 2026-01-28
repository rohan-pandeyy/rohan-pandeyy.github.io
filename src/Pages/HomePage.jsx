import React, { useState, useEffect } from 'react';
import AboutCard from '../components/Card/AboutCard'
import LinkedInCard from '../components/Card/LinkedInCard'
import ResumeCard from '../components/Card/ResumeCard'
import ContactCard from '../components/Card/ContactCard'
import AchievementsCard from '../components/Card/AchievementsCard'

const HomePage = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 872);

    useEffect(() => {
        window.scrollTo(0, 0);
        
        const handleResize = () => setIsMobile(window.innerWidth <= 872);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div className="zoom-load">
                <div className={`mt-[85px] flex gap-9 ${isMobile ? 'flex-col items-center' : 'flex-row items-start'}`}>
                    <AboutCard />
                    <ResumeCard />
                    <LinkedInCard />
                </div>
                <div className={`mt-9 flex gap-9 ${isMobile ? 'flex-col items-center' : 'flex-row items-start'}`}>
                    <AchievementsCard />
                    <ContactCard />
                </div>
            </div>
        </>
    );
};

export default HomePage;