import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { SquareCard } from '../../components/Card/cardSizes';
import AboutPage from '../../components/Card/AboutCard'
import LinkedInCard from '../../components/Card/LinkedInCard'

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
                    <AboutPage />
                    <SquareCard style={{ padding: '20px' }} onClick={() => {console.log('Card clicked!');}}>
                        <h1>My Card</h1>
                        <p>Some content here.</p>
                    </SquareCard>
                    <LinkedInCard />
                </div>
            </div>
        </>
    );
};

export default HomePage;