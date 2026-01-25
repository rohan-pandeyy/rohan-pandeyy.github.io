import React, { useRef, useState } from 'react';
import { RectangleCard } from '../../../components/Card/cardSizes';
import ImageWithSkeleton from '../../../components/ImageWithSkeleton/ImageWithSkeleton';
import DriveGuardianVideo from '../../../assets/videos/Drive-Guardian.mp4';
import './card.scss';
import { AnimatePresence } from 'framer-motion';
import WorkModal from '../../../components/WorkModal/WorkModal';
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
                        <ImageWithSkeleton src={CoverPicture} alt="Drive Guardian Cover" className="modal-cover-image" />
                        
                        <div className="work-modal-container">
                            {/* Header Section */}
                            <div className="work-modal-header">
                                <p className="work-tagline">Automatic Breaking System</p>
                                <h1 className="work-title">Drive Guardian</h1>
                                
                                {/* Project Links */}
                                <div className="work-project-links">
                                    <a 
                                        href="https://github.com/rohan-pandeyy/drive-guardian" 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        className="work-link-button github"
                                    >
                                        <FaGithub /> GitHub
                                    </a>
                                    <a 
                                        href="https://rohan-pandeyy.github.io/drive-guardian/" 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        className="work-link-button demo"
                                    >
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                </div>

                                <p className="work-intro">
                                    An advanced driver safety tool that enhances road safety by leveraging machine learning for real-time hazard detection and automated braking.
                                </p>

                                {/* Tech Stack */}
                                <div className="work-tech-stack mt-40">
                                    <p className="work-tech-label">Powered By</p>
                                    <div className="work-tech-icons">
                                        <div title="Python" className="tech-icon-blue"><SiPython /></div>
                                        <div title="OpenCV" className="tech-icon-white"><SiOpencv /></div>
                                        <div title="PyTorch" className="tech-icon-orange"><SiPytorch /></div>
                                        <div title="Flask" className="tech-icon-white"><SiFlask /></div>
                                        <div title="NumPy" className="tech-icon-blue"><SiNumpy /></div>
                                        <div title="Pandas" className="tech-icon-blue"><SiPandas /></div>
                                        <div title="Scikit-learn" className="tech-icon-blue"><SiScikitlearn /></div>
                                    </div>
                                </div>
                            </div>

                            {/* Background & Description */}
                            <div className="work-grid-section">
                                <div>
                                    <h2 className="work-section-title">Background</h2>
                                    <p className="work-text">
                                        With the increasing number of road accidents, Drive Guardian aims to enhance driver safety by providing a tool that automatically applies brakes when necessary. Our application leverages advanced machine learning algorithms, such as YOLO and lane detection, to ensure precise brake timing, reducing the risk of accidents.
                                    </p>
                                </div>
                                <div>
                                    <h2 className="work-section-title">Project Description</h2>
                                    <p className="work-text">
                                        Our project aims to enhance the safety of drivers and passengers alike by leveraging live feeds from dashcam videos and utilizing advanced algorithms for real-time analysis of applying brakes.
                                    </p>
                                </div>
                            </div>

                            {/* Key Features */}
                            <div className="work-highlight-box">
                                <h2 className="work-highlight-title text-center">Key Features</h2>
                                <div className="highlight-grid">
                                    <div>
                                        <ul className="work-text work-feature-list">
                                            <li className="mb-20">
                                                <strong>Real-time Analysis:</strong> Sophisticated monitoring of road conditions to detect potential hazards instantly.
                                            </li>
                                            <li className="mb-20">
                                                <strong>Object Detection & Prediction:</strong> Utilizing YOLO and advanced algorithms to predict hazards and empower drivers with proactive insights.
                                            </li>
                                            <li>
                                                <strong>Enhanced Video Clarity:</strong> Integration of upscaling techniques to improve video feed clarity for precise analysis.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="work-video-container">
                                        <video muted playsInline loop autoPlay>
                                            <source src={SampleVideo} type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </div>

                            {/* ML Algorithm Section */}
                            <div className="work-development-section">
                                <h2 className="dev-title">ML Algorithm & Architecture</h2>
                                
                                <div className="dev-subsection">
                                    <h3 className="subsection-title">Data Preprocessing & Lane Enhancement</h3>
                                    <p className="work-text mb-30">
                                        <strong>Camera Calibration:</strong> Removes lens distortion using <code>cv2.undistort()</code>.<br/>
                                        <strong>Lane Feature Enhancement:</strong> Uses Gradient Thresholding (Sobel) and Color Thresholding to highlight lane markings.<br/>
                                        <strong>Bird's-Eye View:</strong> Transforms the perspective for easier lane curvature analysis.
                                    </p>
                                    <div className="video-grid">
                                        <div>
                                            <ImageWithSkeleton src={PreprocessingImg} alt="Preprocessing" className="work-grid-image" style={{ height: "300px" }} />
                                            <p className="video-caption">Preprocessing Data & Extracting Features</p>
                                        </div>
                                        <div>
                                            <ImageWithSkeleton src={SobelFilterImg} alt="Sobel Filter" className="work-grid-image" style={{ height: "300px" }} />
                                            <p className="video-caption">Sobel-Feldman Filter Application</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="dev-subsection">
                                    <h3 className="subsection-title">Object & Lane Detection</h3>
                                    <p className="work-text mb-30">
                                        Utilized <strong>YOLOv5</strong> for robust object detection and custom CV algorithms for lane tracking. The system fuses these inputs to determine safe braking distances.
                                    </p>
                                    <div className="video-grid">
                                        <div>
                                            <ImageWithSkeleton src={PolynomialsImg} alt="Polynomial Estimation" className="work-grid-image" style={{ height: "300px" }} />
                                            <p className="video-caption">Estimating Lane Polynomials</p>
                                        </div>
                                        <div>
                                            <ImageWithSkeleton src={LaneDetectionImg} alt="Lane Detection" className="work-grid-image" style={{ height: "300px" }} />
                                            <p className="video-caption">Final Lane & Object Detection Output</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Instructions & Requirements */}
                            <div className="work-grid-section">
                                <div>
                                    <h2 className="work-section-title">Instructions to Run</h2>
                                    <div className="work-code-block">
                                        <p className="comment"># Install Requirements</p>
                                        <p>pip install ultralytics</p>
                                        
                                        <p className="comment"># Run Application</p>
                                        <p>flask run</p>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="work-section-title">Requirements</h2>
                                    <div className="work-requirements-list">
                                        {['flask', 'opencv-python', 'numpy', 'torch', 'pillow', 'pandas', 'nltk', 'scikit-learn', 'cuda', 'transformers'].map((req, index) => (
                                            <span key={index} className="requirement-tag">
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
