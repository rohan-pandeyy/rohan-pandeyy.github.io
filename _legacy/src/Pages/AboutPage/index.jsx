import React, { useState, useEffect } from 'react';
import { WelcomeCard } from '../../components/Card/cardSizes';
import { RectangleCard, SquareCard } from '../../components/Card/cardSizes';
import welcomemp4 from '../../assets/videos/welcome.mp4';
import LinkedInCard from '../../components/Card/LinkedInCard'
import ContactCard from '../../components/Card/ContactCard'
import ResumeCard from '../../components/Card/ResumeCard'
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
                        <p>Machine Learning Intern &rarr; Keenheads<br />Head of Research &rarr; Data Science Soc.<br />Full Stack Intern &rarr; The Design Network<br />Data Science Intern &rarr; Internship Studio</p>
                    </RectangleCard>
                </div>
                <div style={{marginTop: '20px', display: 'flex', gap: '20px', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'center' : 'flex-start',}}>
                    <RectangleCard style={{ padding: '20px' }} onClick={() => {console.log('Card clicked!');}} disableHover>
                        <h1>Full Stack</h1>
                        <p>React &#x2022; Next.js &#x2022; Node.js &#x2022; Express.js<br />TypeScript &#x2022; JS &#x2022; Python &#x2022; FastAPI<br />MongoDB &#x2022; MySQL &#x2022; PostGreSQL<br />AWS &#x2022; Google Cloud &#x2022; GitHub Actions</p>
                    </RectangleCard>
                    <RectangleCard style={{ padding: '20px' }} onClick={() => {console.log('Card clicked!');}} disableHover>
                        <h1>AI & ML</h1>
                        <p>TensorFlow &#x2022; Keras &#x2022; PyTorch<br />Python &#x2022; NumPy &#x2022; Pandas &#x2022; Scikit<br />Supervised &#x2022; Unsupervised Learning<br />Google Colab &#x2022; ONNX &#x2022; HuggingFace</p>
                    </RectangleCard>
                    <RectangleCard style={{ padding: '20px' }} onClick={() => {console.log('Card clicked!');}} disableHover>
                        <h1>Additional</h1>
                        <p>Git &#x2022; GitHub &#x2022; DSA with C++<br />Workflows &#x2022; Pipelines<br />Public Speaking &#x2022; Team Collaboration<br />Open Source &#x2022; Build in Public</p>
                    </RectangleCard>
                </div>
                <div style={{marginTop: '20px', display: 'flex', gap: '20px', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'center' : 'flex-start',}}>
                    <LinkedInCard />
                    <ContactCard />
                    <ResumeCard />
                </div>
            </div>
        </>
    )
};

export default AboutPage;