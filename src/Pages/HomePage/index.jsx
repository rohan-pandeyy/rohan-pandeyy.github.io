import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import AboutCard from '../../components/Card/AboutCard'
import LinkedInCard from '../../components/Card/LinkedInCard'
import ResumeCard from '../../components/Card/ResumeCard'
import ContactCard from '../../components/Card/ContactCard'
import AchievementsCard from '../../components/Card/AchievementsCard'
import Footer from '../../components/Footer';

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
            <Navbar />
            <div className="zoom-load">
                <div style={{marginTop: '85px', display: 'flex', gap: '20px', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'center' : 'flex-start',}}>
                    <AboutCard />
                    <ResumeCard />
                    <LinkedInCard />
                </div>
                <div style={{marginTop: '20px', display: 'flex', gap: '20px', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'center' : 'flex-start',}}>
                    <AchievementsCard />
                    <ContactCard />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default HomePage;