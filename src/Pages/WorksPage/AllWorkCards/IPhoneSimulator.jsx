import React, { useRef, useState } from 'react';
import { SquareCard } from '../../../components/Card/cardSizes';
import ImageWithSkeleton from '../../../components/ImageWithSkeleton';
import iphoneSimVideo from '../../../assets/videos/iphone-sim.mp4';
import { AnimatePresence } from 'framer-motion';
import WorkModal from '../../../components/WorkModal';
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
                className="group" 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}
                onClick={() => setIsExpanded(true)}
                layoutId="iphone-sim-card"
                onLayoutAnimationStart={() => setZIndex(10)}
                onLayoutAnimationComplete={() => setZIndex(1)}
            >
                {!isExpanded && (
                    <video ref={videoRef} className="block w-[90%] h-[160px] mx-auto mt-[1%] object-contain" muted playsInline loop>
                        <source src={iphoneSimVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
                <div className="absolute bottom-5 left-0 w-full z-10 pointer-events-none px-[10%]">
                    <p className="text-[1.2rem] opacity-80 mb-0 uppercase tracking-wide transition-opacity duration-300 group-hover:opacity-0 text-left text-white">— Recreation</p>
                    <h1 className="text-[25px] font-bold leading-tight mt-0 mb-0 text-left text-white transition-transform duration-300 group-hover:-translate-y-[25px]">iPhone Simulator</h1>
                    <p className="absolute bottom-0 left-0 w-full px-[10%] text-[14px] font-medium font-dm-sans opacity-0 transition-opacity duration-300 group-hover:opacity-100 italic text-left text-white">Click to expand</p>
                </div>
            </SquareCard>
            <AnimatePresence>
                {isExpanded && (
                    <WorkModal 
                        layoutId="iphone-sim-card" 
                        onClose={() => setIsExpanded(false)} 
                        bgColor="#D07560"
                    >
                        <ImageWithSkeleton src={CoverPicture} alt="iPhone Simulator Cover" className="w-full rounded-xl mb-10 shadow-[0_4px_20px_rgba(0,0,0,0.3)] block min-[873px]:w-[40%] min-[873px]:h-auto min-[873px]:mx-auto" />
                        
                        <div className="text-white max-w-[1000px] mx-auto">
                            {/* Header Section */}
                            <div className="mb-[60px] text-center">
                                <p className="opacity-70 uppercase text-[1.5rem] mb-[10px] tracking-[2px]">Project Recreation</p>
                                <h1 className="text-[5rem] mb-[20px] font-extrabold max-[872px]:text-[3rem]">iPhone Simulator</h1>
                                
                                {/* Project Links */}
                                <div className="flex justify-center gap-9 mb-10 max-[872px]:flex-col max-[872px]:items-center">
                                    <a 
                                        href="https://github.com/rohan-pandeyy/iphone-sim" 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        className="flex items-center gap-[10px] px-[30px] py-[12px] rounded-[50px] no-underline text-[1.7rem] font-bold transition-all duration-300 cursor-pointer bg-[#ffc552ce] border border-[#97742eff] text-[#0F1A48] hover:bg-[#ffcf6fff] hover:-translate-y-[2px]"
                                    >
                                        <FaGithub /> GitHub
                                    </a>
                                    <a 
                                        href="https://rohan-pandeyy.github.io/iphone-sim/" 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        className="flex items-center gap-[10px] px-[30px] py-[12px] rounded-[50px] no-underline text-[1.7rem] font-bold transition-all duration-300 cursor-pointer bg-[#ffffffe5] !border border-white text-[#0F1A48] hover:-translate-y-[2px] hover:shadow-[0_5px_15px_#ffc552]"
                                    >
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                </div>

                                <p className="text-[1.9rem] leading-[1.6] opacity-90 max-w-[900px] mx-auto max-[872px]:text-[1.5rem]">
                                    A sort of interactive iPhone 12 made in HTML, CSS, and a lil bit of JS! Includes a lock screen, passcode, camera app, calculator and home screen. Is as realistic and looks virtually the same as the actual iPhone.
                                </p>

                                {/* Tech Stack */}
                                <div className="mb-10 text-center mt-10">
                                    <p className="opacity-60 text-[1.2rem] mb-[15px] uppercase tracking-[1px]">Powered By</p>
                                    <div className="flex justify-center gap-[30px] items-center text-[3rem]">
                                        <div title="HTML5" className="text-[#E34F26]"><SiHtml5 /></div>
                                        <div title="CSS3" className="text-[#1572B6]"><SiCss3 /></div>
                                        <div title="JavaScript" className="text-[#F7DF1E]"><SiJavascript /></div>
                                    </div>
                                </div>
                            </div>

                            {/* Features Section */}
                            <div className="mb-[60px] grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10">
                                <div>
                                    <h2 className="text-[2.5rem] mb-[20px] border-b-[2px] border-white/10 pb-[10px]">Authentic Experience</h2>
                                    <p className="text-[1.7rem] leading-[1.8] opacity-85 mb-8">
                                        Experience the look and feel of iOS right in your browser. From the slide-to-unlock gesture to the smooth transitions between apps, every detail has been crafted to mimic the actual device.
                                    </p>
                                    <ul className="text-[1.7rem] leading-[1.8] opacity-85 list-none p-0">
                                        <li className="mb-5"><strong>Lock Screen:</strong> Realistic time and date display with slide unlock.</li>
                                        <li className="mb-5"><strong>Passcode:</strong> Functional security screen simulation.</li>
                                        <li><strong>Home Screen:</strong> Grid layout with recognizable app icons.</li>
                                    </ul>
                                </div>
                                <div>
                                    <ImageWithSkeleton src={LockScreenImg} alt="Lock Screen" className="w-full rounded-[12px] block shadow-[0_4px_12px_rgba(0,0,0,0.2)]" />
                                </div>
                            </div>

                            <div className="mb-20 bg-white/5 rounded-[24px] p-10">
                                <h2 className="text-[2.8rem] mb-[30px] text-center">Interactive Apps</h2>
                                <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 items-center">
                                    <div className="rounded-[16px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
                                        <video muted playsInline loop autoPlay className="w-full block">
                                            <source src={DemoVideo} type="video/mp4" />
                                        </video>
                                    </div>
                                    <div>
                                        <p className="text-[1.7rem] leading-[1.8] opacity-85 mb-5">
                                            Beyond just visual replication, the simulator includes functional mini-apps:
                                        </p>
                                        <ul className="text-[1.7rem] leading-[1.8] opacity-85 list-none p-0">
                                            <li className="mb-5"><strong>Camera:</strong> Access your webcam to take photos within the sim.</li>
                                            <li className="mb-5"><strong>Calculator:</strong> Fully functional distinct iOS calculator logic.</li>
                                            <li><strong>Clock & Settings:</strong> Interactive UI elements that respond to your touch.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-10">
                                <h2 className="text-[3.5rem] mb-10 text-center">Visual Fidelity</h2>
                                <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-9">
                                    <div>
                                        <ImageWithSkeleton src={HomeScreenImg} alt="Home Screen" className="w-full rounded-[12px] shadow-[0_4px_12px_rgba(0,0,0,0.2)] block object-cover" style={{ height: "500px" }} />
                                        <p className="mt-2.5 text-[1.5rem] opacity-60 text-center">Home Screen Layout</p>
                                    </div>
                                    <div>
                                        <ImageWithSkeleton src={PasswordScreenImg} alt="Password Screen" className="w-full rounded-[12px] shadow-[0_4px_12px_rgba(0,0,0,0.2)] block object-cover" style={{ height: "500px" }} />
                                        <p className="mt-2.5 text-[1.5rem] opacity-60 text-center">Security Interface</p>
                                    </div>
                                    <div>
                                        <ImageWithSkeleton src={CameraScreenImg} alt="Camera App" className="w-full rounded-[12px] shadow-[0_4px_12px_rgba(0,0,0,0.2)] block object-cover" style={{ height: "500px" }} />
                                        <p className="mt-2.5 text-[1.5rem] opacity-60 text-center">Camera Application</p>
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