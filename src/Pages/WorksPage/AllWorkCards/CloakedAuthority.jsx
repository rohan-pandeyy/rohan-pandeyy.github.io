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
                        <div style={{ color: 'white', maxWidth: '1000px', margin: '0 auto' }}>
                            {/* Header Section */}
                            <div style={{ marginBottom: '60px', textAlign: 'center' }}>
                                <p style={{ opacity: 0.7, textTransform: 'uppercase', fontSize: '1.5rem', marginBottom: '10px', letterSpacing: '2px' }}>ThreeJS Freeroam Experience</p>
                                <h1 style={{ fontSize: '5rem', marginBottom: '20px', fontWeight: '800' }}>Cloaked Authority</h1>
                                
                                {/* Project Links */}
                                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '40px' }}>
                                    <a 
                                        href="https://github.com/rohan-pandeyy/cloaked-authority" 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 30px', borderRadius: '50px', backgroundColor: '#ffc552ce', border: '1px solid #97742eff', color: '#0F1A48', textDecoration: 'none', fontSize: '1.7rem', fontWeight: 'bold', transition: 'all 0.3s ease', cursor: 'pointer' }}
                                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#ffcf6fff'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#ffc552'; e.currentTarget.style.transform = 'translateY(0)'; }}
                                    >
                                        <FaGithub /> GitHub
                                    </a>
                                    <a 
                                        href="https://rohan-pandeyy.github.io/Cloaked-Authority/" 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 30px', borderRadius: '50px', backgroundColor: '#ffffffe5', border: '1px solid white', color: '#0F1A48', textDecoration: 'none', fontSize: '1.7rem', fontWeight: 'bold', transition: 'all 0.3s ease', cursor: 'pointer' }}
                                        onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 5px 15px #ffc552'; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                                    >
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                </div>

                                <p style={{ fontSize: '1.9rem', lineHeight: '1.6', opacity: 0.9, maxWidth: '900px', margin: '0 auto' }}>
                                    Set in a cyberpunk future dominated by the mega-corporation "Silent Dynamics," players uncover a global conspiracy involving mind control and a rogue hacker named Gargi.
                                </p>

                                {/* Tech Stack */}
                                <div style={{ marginBottom: '40px' }}>
                                    <p style={{ opacity: 0.6, fontSize: '1rem', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>Powered By</p>
                                    <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', alignItems: 'center' }}>
                                        <div title="Three.js" style={{ color: 'white', fontSize: '3rem' }}><SiThreedotjs /></div>
                                        <div title="JavaScript" style={{ color: '#F7DF1E', fontSize: '3rem' }}><SiJavascript /></div>
                                        <div title="HTML5" style={{ color: '#E34F26', fontSize: '3rem' }}><SiHtml5 /></div>
                                        <div title="CSS3" style={{ color: '#1572B6', fontSize: '3rem' }}><SiCss3 /></div>
                                    </div>
                                </div>
                            </div>

                            {/* Story Section */}
                            <div style={{ marginBottom: '60px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                                <div>
                                    <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', borderBottom: '2px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>The Story</h2>
                                    <p style={{ fontSize: '1.7rem', lineHeight: '1.8', opacity: 0.85 }}>
                                        The world is controlled by Director Ronnie, a puppet master orchestrating mind-control experiments to increase power. 
                                        Players take on the role of <strong>Gargi</strong>, a former high-ranking operative turned rogue hacker. 
                                        Gargi discovers the corporation's connection to a global conspiracy involving a mysterious organization known as "The Nexus."
                                    </p>
                                </div>
                                <div>
                                    <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', borderBottom: '2px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>Backstory</h2>
                                    <p style={{ fontSize: '1.7rem', lineHeight: '1.8', opacity: 0.85 }}>
                                        Gargi, once an elite cyber security expert within Silent Dynamics, uncovers evidence of the corporation's collaboration with The Nexus. 
                                        Now aligned with the resistance led by Commander Wires, Gargi aims to expose the truth, dismantle The Nexus, and liberate the world from mind control.
                                    </p>
                                </div>
                            </div>

                            {/* Characters & Gameplay */}
                            <div style={{ marginBottom: '80px', background: 'rgba(255,255,255,0.05)', borderRadius: '24px', padding: '40px' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
                                    <div>
                                        <h2 style={{ fontSize: '2.8rem', marginBottom: '30px' }}>Protagonist: Gargi</h2>
                                        <p style={{ fontSize: '1.7rem', lineHeight: '1.8', marginBottom: '20px', opacity: 0.9 }}>
                                            <strong>Role:</strong> Former Elite Operative / Rogue Hacker<br/>
                                            <strong>Motivation:</strong> Exposing Silent Dynamics & The Nexus
                                        </p>
                                        <p style={{ fontSize: '1.7rem', lineHeight: '1.8', opacity: 0.85 }}>
                                            Equipped with cutting-edge gadgets and cybernetic enhancements, Gargi specializes in stealth, hacking, and combat. 
                                            Players utilize these skills to infiltrate facilities and engage in corporate espionage.
                                        </p>
                                    </div>
                                    <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.3)' }}>
                                        <video style={{ width: '100%', display: 'block' }} muted playsInline loop autoPlay>
                                            <source src={GargiModelVideo} type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </div>

                            {/* Development Journey */}
                            <div style={{ marginBottom: '40px' }}>
                                <h2 style={{ fontSize: '3.5rem', marginBottom: '40px', textAlign: 'center' }}>Development Journey</h2>
                                
                                {/* Section 1: Locomotion */}
                                <div style={{ marginBottom: '60px' }}>
                                    <h3 style={{ fontSize: '2rem', marginBottom: '20px', opacity: 0.9 }}>Locomotion & Physics</h3>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '20px' }}>
                                        <div>
                                            <video style={{ width: '100%', borderRadius: '12px' }} muted playsInline loop autoPlay>
                                                <source src={GargiWalkRunVideo} type="video/mp4" />
                                            </video>
                                            <p style={{ marginTop: '10px', fontSize: '1.1rem', opacity: 0.6, textAlign: 'center' }}>Base Loco-motion testing</p>
                                        </div>
                                        <div>
                                            <video style={{ width: '100%', borderRadius: '12px' }} muted playsInline loop autoPlay>
                                                <source src={RunningJumpingRiggedVideo} type="video/mp4" />
                                            </video>
                                            <p style={{ marginTop: '10px', fontSize: '1.1rem', opacity: 0.6, textAlign: 'center' }}>Rigged Running & Jumping</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 2: Environment & Camera */}
                                <div style={{ marginBottom: '60px' }}>
                                    <h3 style={{ fontSize: '2rem', marginBottom: '20px', opacity: 0.9 }}>Environment & Camera Systems</h3>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '20px' }}>
                                        <div>
                                            <video style={{ width: '100%', borderRadius: '12px' }} muted playsInline loop autoPlay>
                                                <source src={EnvironmentVideo} type="video/mp4" />
                                            </video>
                                            <p style={{ marginTop: '10px', fontSize: '1.1rem', opacity: 0.6, textAlign: 'center' }}>Environment Rendering</p>
                                        </div>
                                        <div>
                                            <video style={{ width: '100%', borderRadius: '12px' }} muted playsInline loop autoPlay>
                                                <source src={CameraRiggedVideo} type="video/mp4" />
                                            </video>
                                            <p style={{ marginTop: '10px', fontSize: '1.1rem', opacity: 0.6, textAlign: 'center' }}>3rd Person Camera System</p>
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