import React from 'react';
import { RectangleCard } from '../cardSizes';
import './index.scss';
import me from '../../../assets/images/me.png';

const AboutCard = () => {
    return (
        <>
            <RectangleCard className="About-card" style={{ padding: '20px' }} onClick={() => {console.log('Card clicked!');}} mobileBackground="#926bf5">
                <img className="profile-image" src={me} alt="Me"></img>
                <h1 style={{ color: '#fff' }}>Hey, I'm Rohan 👋</h1>
                <p style={{ margin: '0' }} >Full Stack | IoT | AIML</p>
            </RectangleCard>
        </>
    );
};

export default AboutCard;