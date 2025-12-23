import React, { useRef } from 'react';
import { RectangleCard } from '../../../components/Card/cardSizes';
import DriveGuardianVideo from '../../../assets/videos/Drive-Guardian.mp4';
import './card.scss';

export const DriveGuardian = () => {
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
        <RectangleCard style={{ backgroundColor: '#9C918A' }} className="project-square-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <video ref={videoRef} className="project-video" muted playsInline loop>
                <source src={DriveGuardianVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="project-info">
                <p>— Autonomous Vehicle</p>
                <h1>Drive Guardian</h1>
                <p className="description">Click to expand</p>
            </div>
        </RectangleCard>
    );
};
