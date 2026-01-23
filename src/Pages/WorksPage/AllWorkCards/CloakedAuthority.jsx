import React, { useRef, useState } from 'react';
import { SquareCard } from '../../../components/Card/cardSizes';
import CloakedAuthorityVideo from '../../../assets/videos/cloaked-authority.mp4';
import './card.scss';
import { AnimatePresence } from 'framer-motion';
import WorkModal from '../../../components/WorkModal/WorkModal';

export const CloakedAuthority = () => {
    const videoRef = useRef(null);
    const [isExpanded, setIsExpanded] = useState(false);

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
        <React.Fragment>
            <SquareCard 
                style={{ backgroundColor: '#0F1A48', opacity: isExpanded ? 0 : 1 }} 
                className="project-square-card" 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}
                onClick={() => setIsExpanded(true)}
                layoutId="cloaked-authority-card"
            >
                <video ref={videoRef} className="project-video" muted playsInline loop>
                    <source src={CloakedAuthorityVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="project-info">
                    <p>— ThreeJS freeroam</p>
                    <h1>Cloaked Authority</h1>
                    <p className="description">Click to expand</p>
                </div>
            </SquareCard>
            <AnimatePresence>
                {isExpanded && (
                    <WorkModal 
                        layoutId="cloaked-authority-card" 
                        onClose={() => setIsExpanded(false)} 
                        bgColor="#0F1A48"
                    >
                         <video className="project-video" muted playsInline loop autoPlay style={{ width: '100%', borderRadius: '12px', marginBottom: '20px' }}>
                            <source src={CloakedAuthorityVideo} type="video/mp4" />
                        </video>
                        <div style={{ color: 'white' }}>
                            <p style={{ opacity: 0.7, textTransform: 'uppercase', fontSize: '0.9rem', marginBottom: '10px' }}>— ThreeJS freeroam</p>
                            <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Cloaked Authority</h1>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                                A 3D free-roam experience built with Three.js. 
                                Explore a mysterious immersive world directly in your browser.
                            </p>
                        </div>
                    </WorkModal>
                )}
            </AnimatePresence>
        </React.Fragment>
    );
};