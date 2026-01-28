import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const RectangleCard = ({ children, style, onClick, disableHover, mobileBackground, className = '', onMouseEnter, onMouseLeave, layoutId, ...props }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 872);
    
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 872);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    const baseClasses = "h-[280px] bg-[#333639] rounded-[24px] cursor-pointer overflow-hidden relative box-border border border-transparent z-10 transition-transform duration-500 max-[872px]:w-[95%] max-[872px]:hover:border-transparent max-[872px]:hover:transform-none";
    const hoverClasses = disableHover ? "hover:cursor-auto" : "hover:scale-[1.03] hover:border-white";
    const widthClass = "w-1/2";
    
    const cardClass = `${baseClasses} ${widthClass} ${hoverClasses} ${className}`;
    const dynamicStyle = {...style, backgroundColor: isMobile && mobileBackground ? mobileBackground : style?.backgroundColor,};
    
    return (
        <motion.div 
            className={cardClass} 
            style={dynamicStyle} 
            onClick={onClick} 
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave}
            layoutId={layoutId}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export { RectangleCard };

const SquareCard = ({ children, style, onClick, disableHover, mobileBackground, className = '', onMouseEnter, onMouseLeave, layoutId, ...props }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 872);
    
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 872);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    const baseClasses = "h-[280px] bg-[#333639] rounded-[24px] cursor-pointer overflow-hidden relative box-border border border-transparent z-10 transition-transform duration-500 max-[872px]:w-[95%] max-[872px]:hover:border-transparent max-[872px]:hover:transform-none";
    const hoverClasses = disableHover ? "hover:cursor-auto" : "hover:scale-[1.03] hover:border-white";
    const widthClass = "w-1/4";
    
    const cardClass = `${baseClasses} ${widthClass} ${hoverClasses} ${className}`;
    const dynamicStyle = {...style, backgroundColor: isMobile && mobileBackground ? mobileBackground : style?.backgroundColor,};
    
    return (
        <motion.div 
            className={cardClass} 
            style={dynamicStyle} 
            onClick={onClick} 
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave}
            layoutId={layoutId}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export { SquareCard };
const WelcomeCard = ({ children }) => {
    return (
        <div className="w-[75%] h-[280px] rounded-[24px] bg-[#3b3b40] overflow-hidden flex justify-center items-center max-[872px]:w-[95%]">
            {children}
        </div>
    );
};

export { WelcomeCard };