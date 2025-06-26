import React, { useEffect, useState }  from 'react';
import Footer from '../../components/Footer';
import LeftColumn from './leftColumn';
import RightColumn from './rightColumn';
import './index.scss';

const ResumePage = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 872);
    
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 872);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return (
        <>
            <div style={{marginTop: '85px', display: 'flex', gap: '20px', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'center' : 'flex-start',}}>
                <div className="resume-container">
                    <div className="zoom-load">
                        <LeftColumn />
                    </div>
                    <div className="upwards-load">
                        <RightColumn />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ResumePage;
