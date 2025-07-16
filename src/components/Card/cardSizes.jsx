import { useEffect, useState } from 'react';
import './cardSizes.scss';

const RectangleCard = ({ children, style, onClick, disableHover, mobileBackground, className }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 872);
    
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 872);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    const cardClass = `rectangle-card ${disableHover ? 'no-hover' : ''} ${className}`;
    const dynamicStyle = {...style, backgroundColor: isMobile && mobileBackground ? mobileBackground : style?.backgroundColor,};
    
    return (
        <div className={cardClass} style={dynamicStyle} onClick={onClick}>
            {children}
        </div>
    );
};

export { RectangleCard };

const SquareCard = ({ children, style, onClick, disableHover, mobileBackground, className, onMouseEnter, onMouseLeave }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 872);
    
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 872);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    const cardClass = `square-card ${disableHover ? 'no-hover' : ''} ${className}`;
    const dynamicStyle = {...style, backgroundColor: isMobile && mobileBackground ? mobileBackground : style?.backgroundColor,};
    
    return (
        <div className={cardClass} style={dynamicStyle} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {children}
        </div>
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