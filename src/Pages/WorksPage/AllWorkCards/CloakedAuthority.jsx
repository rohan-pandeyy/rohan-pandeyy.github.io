import React, { useRef } from 'react';
import { SquareCard } from '../../../components/Card/cardSizes';
import CloakedAuthorityVideo from '../../../assets/videos/cloaked-authority.mp4';
import './card.scss';

export const CloakedAuthority = () => {
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
        <SquareCard style={{ backgroundColor: '#0F1A48' }} className="project-square-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <video ref={videoRef} className="project-video" muted playsInline loop>
                <source src={CloakedAuthorityVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="project-info">
                <p>— ThreeJS freeroam</p>
                <h1>Cloaked Authority</h1>
            </div>
        </SquareCard>
    );
};