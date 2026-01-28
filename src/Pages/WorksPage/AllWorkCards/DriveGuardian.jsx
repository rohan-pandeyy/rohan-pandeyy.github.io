import React, { useRef, useState } from 'react';
import { RectangleCard } from '../../../components/Card/cardSizes';
import ImageWithSkeleton from '../../../components/ImageWithSkeleton';
import DriveGuardianVideo from '../../../assets/videos/Drive-Guardian.mp4';
import { AnimatePresence } from 'framer-motion';
import WorkModal from '../../../components/WorkModal';
import CoverPicture from '../../../assets/images/DriveGuardian/cover_picture.png';
import { SiPython, SiPytorch, SiOpencv, SiFlask, SiNumpy, SiPandas, SiScikitlearn } from 'react-icons/si';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Project Assets
import SampleVideo from '../../../assets/images/DriveGuardian/Sample Video.mp4';
import PreprocessingImg from '../../../assets/images/DriveGuardian/Preprocessing_data_&_extracting_features.jpeg';
import PolynomialsImg from '../../../assets/images/DriveGuardian/Estimating_the_polynomials.jpeg';
import LaneDetectionImg from '../../../assets/images/DriveGuardian/LaneObjectDetection.jpeg';
import SobelFilterImg from '../../../assets/images/DriveGuardian/Sobel-FeldmanFilter.jpeg';

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
                className="group" 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}
                onClick={() => setIsExpanded(true)}
                layoutId="drive-guardian-card"
                onLayoutAnimationStart={() => setZIndex(10)}
                onLayoutAnimationComplete={() => setZIndex(1)}
            >
                {!isExpanded && (
                    <video ref={videoRef} className="block w-[90%] h-[160px] mx-auto mt-[1%] object-contain" muted playsInline loop>
                        <source src={DriveGuardianVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
                <div className="absolute bottom-5 left-0 w-full z-10 pointer-events-none px-[10%]">
                    <p className="text-[1.2rem] opacity-80 mb-0 uppercase tracking-wide transition-opacity duration-300 group-hover:opacity-0 text-left text-white">— Autonomous Vehicle</p>
                    <h1 className="text-[25px] font-bold leading-tight mt-0 mb-0 text-left text-white transition-transform duration-300 group-hover:-translate-y-[25px]">Drive Guardian</h1>
                    <p className="absolute bottom-0 left-0 w-full px-[10%] text-[14px] font-medium font-dm-sans opacity-0 transition-opacity duration-300 group-hover:opacity-100 italic text-left text-white">Click to expand</p>
                </div>
            </RectangleCard>
            <AnimatePresence>
                {isExpanded && (
                    <WorkModal 
                        layoutId="drive-guardian-card" 
                        onClose={() => setIsExpanded(false)} 
                        bgColor="#9C918A"
                    >
                        <ImageWithSkeleton src={CoverPicture} alt="Drive Guardian Cover" className="w-full rounded-xl mb-10 shadow-[0_4px_20px_rgba(0,0,0,0.3)] block min-[873px]:w-[40%] min-[873px]:h-auto min-[873px]:mx-auto" />
                        
                        <div className="text-white max-w-[1000px] mx-auto">
                            {/* Header Section */}
                            <div className="mb-[60px] text-center">
                                <p className="opacity-70 uppercase text-[1.5rem] mb-[10px] tracking-[2px]">Automatic Breaking System</p>
                                <h1 className="text-[5rem] mb-[20px] font-extrabold max-[872px]:text-[3rem]">Drive Guardian</h1>
                                
                                {/* Project Links */}
                                <div className="flex justify-center gap-9 mb-10 max-[872px]:flex-col max-[872px]:items-center">
                                    <a 
                                        href="https://github.com/rohan-pandeyy/drive-guardian" 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        className="flex items-center gap-[10px] px-[30px] py-[12px] rounded-[50px] no-underline text-[1.7rem] font-bold transition-all duration-300 cursor-pointer bg-[#ffc552ce] border border-[#97742eff] text-[#0F1A48] hover:bg-[#ffcf6fff] hover:-translate-y-[2px]"
                                    >
                                        <FaGithub /> GitHub
                                    </a>
                                    <a 
                                        href="https://rohan-pandeyy.github.io/drive-guardian/" 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        className="flex items-center gap-[10px] px-[30px] py-[12px] rounded-[50px] no-underline text-[1.7rem] font-bold transition-all duration-300 cursor-pointer bg-[#ffffffe5] !border border-white text-[#0F1A48] hover:-translate-y-[2px] hover:shadow-[0_5px_15px_#ffc552]"
                                    >
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                </div>

                                <p className="text-[1.9rem] leading-[1.6] opacity-90 max-w-[900px] mx-auto max-[872px]:text-[1.5rem]">
                                    An advanced driver safety tool that enhances road safety by leveraging machine learning for real-time hazard detection and automated braking.
                                </p>

                                {/* Tech Stack */}
                                <div className="mb-10 text-center mt-10">
                                    <p className="opacity-60 text-[1.2rem] mb-[15px] uppercase tracking-[1px]">Powered By</p>
                                    <div className="flex justify-center gap-[30px] items-center text-[3rem]">
                                        <div title="Python" className="text-[#1572B6]"><SiPython /></div>
                                        <div title="OpenCV" className="text-white"><SiOpencv /></div>
                                        <div title="PyTorch" className="text-[#E34F26]"><SiPytorch /></div>
                                        <div title="Flask" className="text-white"><SiFlask /></div>
                                        <div title="NumPy" className="text-[#1572B6]"><SiNumpy /></div>
                                        <div title="Pandas" className="text-[#1572B6]"><SiPandas /></div>
                                        <div title="Scikit-learn" className="text-[#1572B6]"><SiScikitlearn /></div>
                                    </div>
                                </div>
                            </div>

                            {/* Background & Description */}
                            <div className="mb-[60px] grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10">
                                <div>
                                    <h2 className="text-[2.5rem] mb-[20px] border-b-[2px] border-white/10 pb-[10px]">Background</h2>
                                    <p className="text-[1.7rem] leading-[1.8] opacity-85">
                                        With the increasing number of road accidents, Drive Guardian aims to enhance driver safety by providing a tool that automatically applies brakes when necessary. Our application leverages advanced machine learning algorithms, such as YOLO and lane detection, to ensure precise brake timing, reducing the risk of accidents.
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-[2.5rem] mb-[20px] border-b-[2px] border-white/10 pb-[10px]">Project Description</h2>
                                    <p className="text-[1.7rem] leading-[1.8] opacity-85">
                                        Our project aims to enhance the safety of drivers and passengers alike by leveraging live feeds from dashcam videos and utilizing advanced algorithms for real-time analysis of applying brakes.
                                    </p>
                                </div>
                            </div>

                            {/* Key Features */}
                            <div className="mb-20 bg-white/5 rounded-[24px] p-10">
                                <h2 className="text-[2.8rem] mb-[30px] text-center">Key Features</h2>
                                <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 items-center">
                                    <div>
                                        <ul className="text-[1.7rem] leading-[1.8] opacity-85 list-none p-0">
                                            <li className="mb-5">
                                                <strong>Real-time Analysis:</strong> Sophisticated monitoring of road conditions to detect potential hazards instantly.
                                            </li>
                                            <li className="mb-5">
                                                <strong>Object Detection & Prediction:</strong> Utilizing YOLO and advanced algorithms to predict hazards and empower drivers with proactive insights.
                                            </li>
                                            <li>
                                                <strong>Enhanced Video Clarity:</strong> Integration of upscaling techniques to improve video feed clarity for precise analysis.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="rounded-[16px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
                                        <video muted playsInline loop autoPlay className="w-full block">
                                            <source src={SampleVideo} type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </div>

                            {/* ML Algorithm Section */}
                            <div className="mb-10">
                                <h2 className="text-[3.5rem] mb-10 text-center">ML Algorithm & Architecture</h2>
                                
                                <div className="mb-[60px]">
                                    <h3 className="text-[2rem] mb-5 opacity-90">Data Preprocessing & Lane Enhancement</h3>
                                    <p className="text-[1.7rem] leading-[1.8] opacity-85 mb-8">
                                        <strong>Camera Calibration:</strong> Removes lens distortion using <code>cv2.undistort()</code>.<br/>
                                        <strong>Lane Feature Enhancement:</strong> Uses Gradient Thresholding (Sobel) and Color Thresholding to highlight lane markings.<br/>
                                        <strong>Bird's-Eye View:</strong> Transforms the perspective for easier lane curvature analysis.
                                    </p>
                                    <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-9">
                                        <div>
                                            <ImageWithSkeleton src={PreprocessingImg} alt="Preprocessing" className="w-full rounded-[12px] shadow-[0_4px_12px_rgba(0,0,0,0.2)] block object-cover" style={{ height: "300px" }} />
                                            <p className="mt-2.5 text-[1.5rem] opacity-60 text-center">Preprocessing Data & Extracting Features</p>
                                        </div>
                                        <div>
                                            <ImageWithSkeleton src={SobelFilterImg} alt="Sobel Filter" className="w-full rounded-[12px] shadow-[0_4px_12px_rgba(0,0,0,0.2)] block object-cover" style={{ height: "300px" }} />
                                            <p className="mt-2.5 text-[1.5rem] opacity-60 text-center">Sobel-Feldman Filter Application</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-[60px]">
                                    <h3 className="text-[2rem] mb-5 opacity-90">Object & Lane Detection</h3>
                                    <p className="text-[1.7rem] leading-[1.8] opacity-85 mb-8">
                                        Utilized <strong>YOLOv5</strong> for robust object detection and custom CV algorithms for lane tracking. The system fuses these inputs to determine safe braking distances.
                                    </p>
                                    <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-9">
                                        <div>
                                            <ImageWithSkeleton src={PolynomialsImg} alt="Polynomial Estimation" className="w-full rounded-[12px] shadow-[0_4px_12px_rgba(0,0,0,0.2)] block object-cover" style={{ height: "300px" }} />
                                            <p className="mt-2.5 text-[1.5rem] opacity-60 text-center">Estimating Lane Polynomials</p>
                                        </div>
                                        <div>
                                            <ImageWithSkeleton src={LaneDetectionImg} alt="Lane Detection" className="w-full rounded-[12px] shadow-[0_4px_12px_rgba(0,0,0,0.2)] block object-cover" style={{ height: "300px" }} />
                                            <p className="mt-2.5 text-[1.5rem] opacity-60 text-center">Final Lane & Object Detection Output</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Instructions & Requirements */}
                            <div className="mb-[60px] grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10">
                                <div>
                                    <h2 className="text-[2.5rem] mb-[20px] border-b-[2px] border-white/10 pb-[10px]">Instructions to Run</h2>
                                    <div className="bg-black/30 p-9 rounded-[12px] font-mono text-[1rem]">
                                        <p className="text-[#ffc552] mb-2.5"># Install Requirements</p>
                                        <p className="mb-5">pip install ultralytics</p>
                                        
                                        <p className="text-[#ffc552] mb-2.5"># Run Application</p>
                                        <p>flask run</p>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-[2.5rem] mb-[20px] border-b-[2px] border-white/10 pb-[10px]">Requirements</h2>
                                    <div className="flex flex-wrap gap-2.5">
                                        {['flask', 'opencv-python', 'numpy', 'torch', 'pillow', 'pandas', 'nltk', 'scikit-learn', 'cuda', 'transformers'].map((req, index) => (
                                            <span key={index} className="bg-white/10 px-4 py-2 rounded-[20px] text-[1.2rem]">
                                                {req}
                                            </span>
                                        ))}
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
