import React, { useRef } from 'react';
import { SquareCard } from '../../../components/Card/cardSizes';
import iphoneSimVideo from '../../../assets/videos/iphone-sim.mp4';
import './card.scss';

export const IPhoneSimulator = () => {
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };
    return (
        <SquareCard style={{ backgroundColor: '#D07560' }} className="project-square-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <video ref={videoRef} className="project-video" muted playsInline loop>
                <source src={iphoneSimVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="project-info">
                <p>— Recreation</p>
                <h1>iPhone Simulator</h1>
            </div>
        </SquareCard>
    );
};