import React, { useRef, useState } from 'react';
import { SquareCard } from '../../../components/Card/cardSizes';
import ImageWithSkeleton from '../../../components/ImageWithSkeleton';
import CloakedAuthorityVideo from '../../../assets/videos/cloaked-authority.mp4';
import { AnimatePresence } from 'framer-motion';
import WorkModal from '../../../components/WorkModal';
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
                className="group" 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}
                onClick={() => setIsExpanded(true)}
                layoutId="cloaked-authority-card"
                onLayoutAnimationStart={() => setZIndex(10)}
                onLayoutAnimationComplete={() => setZIndex(1)}
            >
                {!isExpanded && (
                    <video ref={videoRef} className="block w-[90%] h-[160px] mx-auto mt-[1%] object-contain" muted playsInline loop>
                        <source src={CloakedAuthorityVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
                <div className="absolute bottom-5 left-0 w-full z-10 pointer-events-none px-[10%]">
                    <p className="text-[1.2rem] opacity-80 mb-0 uppercase tracking-wide transition-opacity duration-300 group-hover:opacity-0 text-left text-white">— ThreeJS freeroam</p>
                    <h1 className="text-[25px] font-bold leading-tight mt-0 mb-0 text-left text-white transition-transform duration-300 group-hover:-translate-y-[25px]">Cloaked Authority</h1>
                    <p className="absolute bottom-0 left-0 w-full px-[10%] text-[14px] font-medium font-dm-sans opacity-0 transition-opacity duration-300 group-hover:opacity-100 italic text-left text-white">Click to expand</p>
                </div>
            </SquareCard>
            <AnimatePresence>
                {isExpanded && (
                    <WorkModal 
                        layoutId="cloaked-authority-card" 
                        onClose={() => setIsExpanded(false)} 
                        bgColor="#0F1A48"
                    >
                         <ImageWithSkeleton src={CoverPicture} alt="Cloaked Authority Cover" className="w-full rounded-xl mb-10 shadow-[0_4px_20px_rgba(0,0,0,0.3)] block min-[873px]:w-[40%] min-[873px]:h-auto min-[873px]:mx-auto" />
                        <div className="text-white max-w-[1000px] mx-auto">
                            {/* Header Section */}
                            <div className="mb-[60px] text-center">
                                <p className="opacity-70 uppercase text-[1.5rem] mb-[10px] tracking-[2px]">ThreeJS Freeroam Experience</p>
                                <h1 className="text-[5rem] mb-[20px] font-extrabold max-[872px]:text-[3rem]">Cloaked Authority</h1>
                                
                                {/* Project Links */}
                                <div className="flex justify-center gap-9 mb-10 max-[872px]:flex-col max-[872px]:items-center">
                                    <a 
                                        href="https://github.com/rohan-pandeyy/cloaked-authority" 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        className="flex items-center gap-[10px] px-[30px] py-[12px] rounded-[50px] no-underline text-[1.7rem] font-bold transition-all duration-300 cursor-pointer bg-[#ffc552ce] border border-[#97742eff] text-[#0F1A48] hover:bg-[#ffcf6fff] hover:-translate-y-[2px]"
                                    >
                                        <FaGithub /> GitHub
                                    </a>
                                    <a 
                                        href="https://rohan-pandeyy.github.io/Cloaked-Authority/" 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        className="flex items-center gap-[10px] px-[30px] py-[12px] rounded-[50px] no-underline text-[1.7rem] font-bold transition-all duration-300 cursor-pointer bg-[#ffffffe5] !border border-white text-[#0F1A48] hover:-translate-y-[2px] hover:shadow-[0_5px_15px_#ffc552]"
                                    >
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                </div>

                                <p className="text-[1.9rem] leading-[1.6] opacity-90 max-w-[900px] mx-auto max-[872px]:text-[1.5rem]">
                                    Set in a cyberpunk future dominated by the mega-corporation "Silent Dynamics," players uncover a global conspiracy involving mind control and a rogue hacker named Gargi.
                                </p>

                                {/* Tech Stack */}
                                <div className="mb-10 text-center mt-10">
                                    <p className="opacity-60 text-[1.2rem] mb-[15px] uppercase tracking-[1px]">Powered By</p>
                                    <div className="flex justify-center gap-[30px] items-center text-[3rem]">
                                        <div title="Three.js" className="text-white"><SiThreedotjs /></div>
                                        <div title="JavaScript" className="text-[#F7DF1E]"><SiJavascript /></div>
                                        <div title="HTML5" className="text-[#E34F26]"><SiHtml5 /></div>
                                        <div title="CSS3" className="text-[#1572B6]"><SiCss3 /></div>
                                    </div>
                                </div>
                            </div>

                            {/* Story Section */}
                            <div className="mb-[60px] grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10">
                                <div>
                                    <h2 className="text-[2.5rem] mb-[20px] border-b-[2px] border-white/10 pb-[10px]">The Story</h2>
                                    <p className="text-[1.7rem] leading-[1.8] opacity-85">
                                        The world is controlled by Director Ronnie, a puppet master orchestrating mind-control experiments to increase power. 
                                        Players take on the role of <strong>Gargi</strong>, a former high-ranking operative turned rogue hacker. 
                                        Gargi discovers the corporation's connection to a global conspiracy involving a mysterious organization known as "The Nexus."
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-[2.5rem] mb-[20px] border-b-[2px] border-white/10 pb-[10px]">Backstory</h2>
                                    <p className="text-[1.7rem] leading-[1.8] opacity-85">
                                        Gargi, once an elite cyber security expert within Silent Dynamics, uncovers evidence of the corporation's collaboration with The Nexus. 
                                        Now aligned with the resistance led by Commander Wires, Gargi aims to expose the truth, dismantle The Nexus, and liberate the world from mind control.
                                    </p>
                                </div>
                            </div>

                            {/* Characters & Gameplay */}
                            <div className="mb-20 bg-white/5 rounded-[24px] p-10">
                                <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 items-center">
                                    <div>
                                        <h2 className="text-[2.8rem] mb-[30px]">Protagonist: Gargi</h2>
                                        <p className="text-[1.7rem] leading-[1.8] opacity-85 mb-5 !opacity-90">
                                            <strong>Role:</strong> Former Elite Operative / Rogue Hacker<br/>
                                            <strong>Motivation:</strong> Exposing Silent Dynamics & The Nexus
                                        </p>
                                        <p className="text-[1.7rem] leading-[1.8] opacity-85">
                                            Equipped with cutting-edge gadgets and cybernetic enhancements, Gargi specializes in stealth, hacking, and combat. 
                                            Players utilize these skills to infiltrate facilities and engage in corporate espionage.
                                        </p>
                                    </div>
                                    <div className="rounded-[16px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
                                        <video muted playsInline loop autoPlay className="w-full block">
                                            <source src={GargiModelVideo} type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </div>

                            {/* Development Journey */}
                            <div className="mb-10">
                                <h2 className="text-[3.5rem] mb-10 text-center">Development Journey</h2>
                                
                                {/* Section 1: Locomotion */}
                                <div className="mb-[60px]">
                                    <h3 className="text-[2rem] mb-5 opacity-90">Locomotion & Physics</h3>
                                    <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-9">
                                        <div>
                                            <div className="w-full rounded-[12px] overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
                                                <video muted playsInline loop autoPlay className="w-full block">
                                                    <source src={GargiWalkRunVideo} type="video/mp4" />
                                                </video>
                                            </div>
                                            <p className="mt-2.5 text-[1.5rem] opacity-60 text-center">Base Loco-motion testing</p>
                                        </div>
                                        <div>
                                            <div className="w-full rounded-[12px] overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
                                                <video muted playsInline loop autoPlay className="w-full block">
                                                    <source src={RunningJumpingRiggedVideo} type="video/mp4" />
                                                </video>
                                            </div>
                                            <p className="mt-2.5 text-[1.5rem] opacity-60 text-center">Rigged Running & Jumping</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 2: Environment & Camera */}
                                <div className="mb-[60px]">
                                    <h3 className="text-[2rem] mb-5 opacity-90">Environment & Camera Systems</h3>
                                    <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-9">
                                        <div>
                                            <div className="w-full rounded-[12px] overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
                                                <video muted playsInline loop autoPlay className="w-full block">
                                                    <source src={EnvironmentVideo} type="video/mp4" />
                                                </video>
                                            </div>
                                            <p className="mt-2.5 text-[1.5rem] opacity-60 text-center">Environment Rendering</p>
                                        </div>
                                        <div>
                                            <div className="w-full rounded-[12px] overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
                                                <video muted playsInline loop autoPlay className="w-full block">
                                                    <source src={CameraRiggedVideo} type="video/mp4" />
                                                </video>
                                            </div>
                                            <p className="mt-2.5 text-[1.5rem] opacity-60 text-center">(Broken lol) 3rd Person Camera System</p>
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