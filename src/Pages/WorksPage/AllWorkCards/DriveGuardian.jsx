import React, { useRef, useState } from 'react';
import { RectangleCard } from '../../../components/Card/cardSizes';
import DriveGuardianVideo from '../../../assets/videos/Drive-Guardian.mp4';
import './card.scss';
import { AnimatePresence } from 'framer-motion';
import WorkModal from '../../../components/WorkModal/WorkModal';

export const DriveGuardian = () => {
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
            <RectangleCard 
                style={{ backgroundColor: '#9C918A', opacity: isExpanded ? 0 : 1, zIndex }} 
                className="project-rectangle-card" 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}
                onClick={() => setIsExpanded(true)}
                layoutId="drive-guardian-card"
                onLayoutAnimationStart={() => setZIndex(10)}
                onLayoutAnimationComplete={() => setZIndex(1)}
            >
                {!isExpanded && (
                    <video ref={videoRef} className="project-video" muted playsInline loop>
                        <source src={DriveGuardianVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
                <div className="project-info">
                    <p>— Autonomous Vehicle</p>
                    <h1>Drive Guardian</h1>
                    <p className="description">Click to expand</p>
                </div>
            </RectangleCard>
            <AnimatePresence>
                {isExpanded && (
                    <WorkModal 
                        layoutId="drive-guardian-card" 
                        onClose={() => setIsExpanded(false)} 
                        bgColor="#9C918A"
                    >
                        <video className="project-video" muted playsInline loop autoPlay style={{ width: '100%', borderRadius: '12px', marginBottom: '20px' }}>
                            <source src={DriveGuardianVideo} type="video/mp4" />
                        </video>
                        <div style={{ color: 'white' }}>
                            <p style={{ opacity: 0.7, textTransform: 'uppercase', fontSize: '0.9rem', marginBottom: '10px' }}>— Autonomous Vehicle</p>
                            <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Drive Guardian</h1>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                                Drive Guardian is an advanced autonomous vehicle system designed to ensure safety and efficiency on the road. 
                                This project explores the intersection of computer vision, sensor fusion, and real-time decision making.
                            </p>
                            <br />
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                                The system utilizes lidar and camera inputs to map the environment and detect obstacles, pedestrians, and other vehicles.
                            </p>
                        </div>
                    </WorkModal>
                )}
            </AnimatePresence>
        </React.Fragment>
    );
};
