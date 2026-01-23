import { useEffect, useState } from 'react';
import './cardSizes.scss';
import { motion } from 'framer-motion';

const RectangleCard = ({ children, style, onClick, disableHover, mobileBackground, className, onMouseEnter, onMouseLeave, layoutId }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 872);
    
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 872);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    const cardClass = `rectangle-card ${disableHover ? 'no-hover' : ''} ${className}`;
    const dynamicStyle = {...style, backgroundColor: isMobile && mobileBackground ? mobileBackground : style?.backgroundColor,};
    
    return (
        <motion.div 
            className={cardClass} 
            style={dynamicStyle} 
            onClick={onClick} 
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave}
            layoutId={layoutId}
        >
            {children}
        </motion.div>
    );
};

export { RectangleCard };

const SquareCard = ({ children, style, onClick, disableHover, mobileBackground, className, onMouseEnter, onMouseLeave, layoutId }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 872);
    
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 872);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    const cardClass = `square-card ${disableHover ? 'no-hover' : ''} ${className}`;
    const dynamicStyle = {...style, backgroundColor: isMobile && mobileBackground ? mobileBackground : style?.backgroundColor,};
    
    return (
        <motion.div 
            className={cardClass} 
            style={dynamicStyle} 
            onClick={onClick} 
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave}
            layoutId={layoutId}
        >
            {children}
        </motion.div>
    );
};

export { SquareCard };
const WelcomeCard = ({ children }) => {
    return (
        <div className="welcome-card">
            {children}
        </div>
    );
};

export { WelcomeCard };