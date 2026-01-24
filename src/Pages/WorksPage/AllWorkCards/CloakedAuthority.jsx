import React, { useRef, useState } from 'react';
import { SquareCard } from '../../../components/Card/cardSizes';
import CloakedAuthorityVideo from '../../../assets/videos/cloaked-authority.mp4';
import './card.scss';
import { AnimatePresence } from 'framer-motion';
import WorkModal from '../../../components/WorkModal/WorkModal';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiThreedotjs, SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si';

// Development Assets
import GargiModelVideo from '../../../assets/images/CloakedAuthorities/gargi - model.mp4';
import GargiWalkRunVideo from '../../../assets/images/CloakedAuthorities/gargi - walk and run.mp4';
import EnvironmentVideo from '../../../assets/images/CloakedAuthorities/environment rendered.mp4';
import CameraRiggedVideo from '../../../assets/images/CloakedAuthorities/Third Person Camera that follows mouse (rigged).mp4';
import RunningJumpingRiggedVideo from '../../../assets/images/CloakedAuthorities/running + jumping (rigged).mp4';
import CoverPicture from '../../../assets/images/CloakedAuthorities/cover_picture.jpeg';

export const CloakedAuthority = () => {
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
                style={{ backgroundColor: '#0F1A48', opacity: isExpanded ? 0 : 1, zIndex }} 
                className="project-square-card" 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}
                onClick={() => setIsExpanded(true)}
                layoutId="cloaked-authority-card"
                onLayoutAnimationStart={() => setZIndex(10)}
                onLayoutAnimationComplete={() => setZIndex(1)}
            >
                {!isExpanded && (
                    <video ref={videoRef} className="project-video" muted playsInline loop>
                        <source src={CloakedAuthorityVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
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
                         <img src={CoverPicture} alt="Cloaked Authority Cover" className="modal-cover-image" />
                        <div className="work-modal-container">
                            {/* Header Section */}
                            <div className="work-modal-header">
                                <p className="work-tagline">ThreeJS Freeroam Experience</p>
                                <h1 className="work-title">Cloaked Authority</h1>
                                
                                {/* Project Links */}
                                <div className="work-project-links">
                                    <a 
                                        href="https://github.com/rohan-pandeyy/cloaked-authority" 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        className="work-link-button github"
                                    >
                                        <FaGithub /> GitHub
                                    </a>
                                    <a 
                                        href="https://rohan-pandeyy.github.io/Cloaked-Authority/" 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        className="work-link-button demo"
                                    >
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                </div>

                                <p className="work-intro">
                                    Set in a cyberpunk future dominated by the mega-corporation "Silent Dynamics," players uncover a global conspiracy involving mind control and a rogue hacker named Gargi.
                                </p>

                                {/* Tech Stack */}
                                <div className="work-tech-stack">
                                    <p className="work-tech-label">Powered By</p>
                                    <div className="work-tech-icons">
                                        <div title="Three.js" className="tech-icon-white"><SiThreedotjs /></div>
                                        <div title="JavaScript" className="tech-icon-yellow"><SiJavascript /></div>
                                        <div title="HTML5" className="tech-icon-orange"><SiHtml5 /></div>
                                        <div title="CSS3" className="tech-icon-blue"><SiCss3 /></div>
                                    </div>
                                </div>
                            </div>

                            {/* Story Section */}
                            <div className="work-grid-section">
                                <div>
                                    <h2 className="work-section-title">The Story</h2>
                                    <p className="work-text">
                                        The world is controlled by Director Ronnie, a puppet master orchestrating mind-control experiments to increase power. 
                                        Players take on the role of <strong>Gargi</strong>, a former high-ranking operative turned rogue hacker. 
                                        Gargi discovers the corporation's connection to a global conspiracy involving a mysterious organization known as "The Nexus."
                                    </p>
                                </div>
                                <div>
                                    <h2 className="work-section-title">Backstory</h2>
                                    <p className="work-text">
                                        Gargi, once an elite cyber security expert within Silent Dynamics, uncovers evidence of the corporation's collaboration with The Nexus. 
                                        Now aligned with the resistance led by Commander Wires, Gargi aims to expose the truth, dismantle The Nexus, and liberate the world from mind control.
                                    </p>
                                </div>
                            </div>

                            {/* Characters & Gameplay */}
                            <div className="work-highlight-box">
                                <div className="highlight-grid">
                                    <div>
                                        <h2 className="work-highlight-title">Protagonist: Gargi</h2>
                                        <p className="work-text" style={{ marginBottom: '20px', opacity: 0.9 }}>
                                            <strong>Role:</strong> Former Elite Operative / Rogue Hacker<br/>
                                            <strong>Motivation:</strong> Exposing Silent Dynamics & The Nexus
                                        </p>
                                        <p className="work-text">
                                            Equipped with cutting-edge gadgets and cybernetic enhancements, Gargi specializes in stealth, hacking, and combat. 
                                            Players utilize these skills to infiltrate facilities and engage in corporate espionage.
                                        </p>
                                    </div>
                                    <div className="work-video-container">
                                        <video muted playsInline loop autoPlay>
                                            <source src={GargiModelVideo} type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </div>

                            {/* Development Journey */}
                            <div className="work-development-section">
                                <h2 className="dev-title">Development Journey</h2>
                                
                                {/* Section 1: Locomotion */}
                                <div className="dev-subsection">
                                    <h3 className="subsection-title">Locomotion & Physics</h3>
                                    <div className="video-grid">
                                        <div>
                                            <div className="dev-video-wrapper">
                                                <video muted playsInline loop autoPlay>
                                                    <source src={GargiWalkRunVideo} type="video/mp4" />
                                                </video>
                                            </div>
                                            <p className="video-caption">Base Loco-motion testing</p>
                                        </div>
                                        <div>
                                            <div className="dev-video-wrapper">
                                                <video muted playsInline loop autoPlay>
                                                    <source src={RunningJumpingRiggedVideo} type="video/mp4" />
                                                </video>
                                            </div>
                                            <p className="video-caption">Rigged Running & Jumping</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 2: Environment & Camera */}
                                <div className="dev-subsection">
                                    <h3 className="subsection-title">Environment & Camera Systems</h3>
                                    <div className="video-grid">
                                        <div>
                                            <div className="dev-video-wrapper">
                                                <video muted playsInline loop autoPlay>
                                                    <source src={EnvironmentVideo} type="video/mp4" />
                                                </video>
                                            </div>
                                            <p className="video-caption">Environment Rendering</p>
                                        </div>
                                        <div>
                                            <div className="dev-video-wrapper">
                                                <video muted playsInline loop autoPlay>
                                                    <source src={CameraRiggedVideo} type="video/mp4" />
                                                </video>
                                            </div>
                                            <p className="video-caption">(Broken lol) 3rd Person Camera System</p>
                                        </div>
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