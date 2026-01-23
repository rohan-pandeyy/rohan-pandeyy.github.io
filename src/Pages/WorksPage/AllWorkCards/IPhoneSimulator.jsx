import React, { useRef, useState } from 'react';
import { SquareCard } from '../../../components/Card/cardSizes';
import iphoneSimVideo from '../../../assets/videos/iphone-sim.mp4';
import './card.scss';
import { AnimatePresence } from 'framer-motion';
import WorkModal from '../../../components/WorkModal/WorkModal';

export const IPhoneSimulator = () => {
    const videoRef = useRef(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const [zIndex, setZIndex] = useState(1);

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
                style={{ backgroundColor: '#D07560', opacity: isExpanded ? 0 : 1, zIndex }} 
                className="project-square-card" 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}
                onClick={() => setIsExpanded(true)}
                layoutId="iphone-sim-card"
                onLayoutAnimationStart={() => setZIndex(10)}
                onLayoutAnimationComplete={() => setZIndex(1)}
            >
                {!isExpanded && (
                    <video ref={videoRef} className="project-video" muted playsInline loop>
                        <source src={iphoneSimVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
                <div className="project-info">
                    <p>— Recreation</p>
                    <h1>iPhone Simulator</h1>
                    <p className="description">Click to expand</p>
                </div>
            </SquareCard>
            <AnimatePresence>
                {isExpanded && (
                    <WorkModal 
                        layoutId="iphone-sim-card" 
                        onClose={() => setIsExpanded(false)} 
                        bgColor="#D07560"
                    >
                         <video className="project-video" muted playsInline loop autoPlay style={{ width: '100%', borderRadius: '12px', marginBottom: '20px' }}>
                            <source src={iphoneSimVideo} type="video/mp4" />
                        </video>
                        <div style={{ color: 'white' }}>
                            <p style={{ opacity: 0.7, textTransform: 'uppercase', fontSize: '0.9rem', marginBottom: '10px' }}>— Recreation</p>
                            <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>iPhone Simulator</h1>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                                A faithful recreation of the iPhone interface using web technologies. 
                                This project mimics the smooth animations, gestures, and visual style of iOS.
                            </p>
                        </div>
                    </WorkModal>
                )}
            </AnimatePresence>
        </React.Fragment>
    );
};