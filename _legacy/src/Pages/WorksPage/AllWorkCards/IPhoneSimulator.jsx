import React, { useRef, useState } from 'react';
import { SquareCard } from '../../../components/Card/cardSizes';
import ImageWithSkeleton from '../../../components/ImageWithSkeleton/ImageWithSkeleton';
import iphoneSimVideo from '../../../assets/videos/iphone-sim.mp4';
import './card.scss';
import { AnimatePresence } from 'framer-motion';
import WorkModal from '../../../components/WorkModal/WorkModal';
import { SiHtml5, SiCss3, SiJavascript } from 'react-icons/si';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Project Assets
import CoverPicture from '../../../assets/images/IphoneSimulator/cover_picture.png';
import DemoVideo from '../../../assets/images/IphoneSimulator/iPhoneSim_Demo.mp4';
import LockScreenImg from '../../../assets/images/IphoneSimulator/LockScreen.png';
import HomeScreenImg from '../../../assets/images/IphoneSimulator/HomeScreen.png';
import PasswordScreenImg from '../../../assets/images/IphoneSimulator/PasswordScreen.png';
import CameraScreenImg from '../../../assets/images/IphoneSimulator/CameraScreen.png';


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
                        <ImageWithSkeleton src={CoverPicture} alt="iPhone Simulator Cover" className="modal-cover-image" />
                        
                        <div className="work-modal-container">
                            {/* Header Section */}
                            <div className="work-modal-header">
                                <p className="work-tagline">Project Recreation</p>
                                <h1 className="work-title">iPhone Simulator</h1>
                                
                                {/* Project Links */}
                                <div className="work-project-links">
                                    <a 
                                        href="https://github.com/rohan-pandeyy/iphone-sim" 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        className="work-link-button github"
                                    >
                                        <FaGithub /> GitHub
                                    </a>
                                    <a 
                                        href="https://rohan-pandeyy.github.io/iphone-sim/" 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        className="work-link-button demo"
                                    >
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                </div>

                                <p className="work-intro">
                                    A sort of interactive iPhone 12 made in HTML, CSS, and a lil bit of JS! Includes a lock screen, passcode, camera app, calculator and home screen. Is as realistic and looks virtually the same as the actual iPhone.
                                </p>

                                {/* Tech Stack */}
                                <div className="work-tech-stack mt-40">
                                    <p className="work-tech-label">Powered By</p>
                                    <div className="work-tech-icons">
                                        <div title="HTML5" className="tech-icon-orange"><SiHtml5 /></div>
                                        <div title="CSS3" className="tech-icon-blue"><SiCss3 /></div>
                                        <div title="JavaScript" className="tech-icon-yellow"><SiJavascript /></div>
                                    </div>
                                </div>
                            </div>

                            {/* Features Section */}
                            <div className="work-grid-section">
                                <div>
                                    <h2 className="work-section-title">Authentic Experience</h2>
                                    <p className="work-text mb-30">
                                        Experience the look and feel of iOS right in your browser. From the slide-to-unlock gesture to the smooth transitions between apps, every detail has been crafted to mimic the actual device.
                                    </p>
                                    <ul className="work-text work-feature-list">
                                        <li><strong>Lock Screen:</strong> Realistic time and date display with slide unlock.</li>
                                        <li><strong>Passcode:</strong> Functional security screen simulation.</li>
                                        <li><strong>Home Screen:</strong> Grid layout with recognizable app icons.</li>
                                    </ul>
                                </div>
                                <div>
                                    <ImageWithSkeleton src={LockScreenImg} alt="Lock Screen" className="work-grid-image" />
                                </div>
                            </div>

                            <div className="work-highlight-box">
                                <h2 className="work-highlight-title text-center">Interactive Apps</h2>
                                <div className="highlight-grid">
                                    <div className="work-video-container">
                                        <video muted playsInline loop autoPlay>
                                            <source src={DemoVideo} type="video/mp4" />
                                        </video>
                                    </div>
                                    <div>
                                        <p className="work-text mb-20">
                                            Beyond just visual replication, the simulator includes functional mini-apps:
                                        </p>
                                        <ul className="work-text work-feature-list">
                                            <li><strong>Camera:</strong> Access your webcam to take photos within the sim.</li>
                                            <li><strong>Calculator:</strong> Fully functional distinct iOS calculator logic.</li>
                                            <li><strong>Clock & Settings:</strong> Interactive UI elements that respond to your touch.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="work-development-section">
                                <h2 className="dev-title">Visual Fidelity</h2>
                                <div className="video-grid">
                                    <div>
                                        <ImageWithSkeleton src={HomeScreenImg} alt="Home Screen" className="work-grid-image" style={{ height: "500px" }} />
                                        <p className="video-caption">Home Screen Layout</p>
                                    </div>
                                    <div>
                                        <ImageWithSkeleton src={PasswordScreenImg} alt="Password Screen" className="work-grid-image" style={{ height: "500px" }} />
                                        <p className="video-caption">Security Interface</p>
                                    </div>
                                    <div>
                                        <ImageWithSkeleton src={CameraScreenImg} alt="Camera App" className="work-grid-image" style={{ height: "500px" }} />
                                        <p className="video-caption">Camera Application</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </WorkModal>
                )}
            </AnimatePresence>
        </React.Fragment>
    );
};