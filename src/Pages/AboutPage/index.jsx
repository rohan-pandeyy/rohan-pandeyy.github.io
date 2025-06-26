import React, { useState, useEffect } from 'react';
import { WelcomeCard } from '../../components/Card/cardSizes';
import { RectangleCard, SquareCard } from '../../components/Card/cardSizes';
import welcomemp4 from '../../assets/videos/welcome.mp4';
import LinkedInCard from '../../components/Card/LinkedInCard'
import ContactCard from '../../components/Card/ContactCard'
import ResumeCard from '../../components/Card/ResumeCard'
import Footer from '../../components/Footer';
import './index.scss';

const AboutPage = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 872);

    useEffect(() => {
        window.scrollTo(0, 0);
        
        const handleResize = () => setIsMobile(window.innerWidth <= 872);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div className="upwards-load">
                <div style={{marginTop: '85px'}}>
                    <div className="title">About Me</div>
                </div>
            </div>
            <div className="zoom-load">
                <div style={{marginTop: '20px', display: 'flex', gap: '20px', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'center' : 'flex-start',}}>
                    <WelcomeCard>
                        <video className="welcome-video" src={welcomemp4} muted loop autoPlay playsInline></video>
                    </WelcomeCard>
                    <SquareCard style={{ padding: '20px' }} onClick={() => {console.log('Card clicked!');}} disableHover>
                        <h1>Hey👋<br/>I'm Rohan</h1>
                        <p>AIML and Computer Hardware Tyro.</p>
                    </SquareCard>
                </div>
                <div style={{marginTop: '20px', display: 'flex', gap: '20px', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'center' : 'flex-start',}}>
                    <RectangleCard style={{ padding: '20px' }} onClick={() => {console.log('Card clicked!');}} disableHover>
                        <h1>Who Am I?</h1>
                        <p>Aka Ronnie on the internet, I'm a budding engineer who's increasingly fascinated by the realms of Machine Learning and Electronic devices.</p>
                    </RectangleCard>
                    <RectangleCard style={{ padding: '20px' }} onClick={() => {console.log('Card clicked!');}} disableHover>
                        <h1>Experience</h1>
                        <p>Head of Research ---- Data Science Society<br />Data Science Intern ---- Internship Studio<br />The Design Network ---- Full Stack Intern</p>
                    </RectangleCard>
                </div>
                <div style={{marginTop: '20px', display: 'flex', gap: '20px', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'center' : 'flex-start',}}>
                    <LinkedInCard />
                    <ContactCard />
                    <ResumeCard />
                </div>
            </div>
            <Footer />
        </>
    )
};

export default AboutPage;