import React, { useState, useEffect } from 'react';
import './index.scss';
import { RectangleCard, SquareCard } from '../../components/Card/cardSizes';

const WorkPage = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 872);

    useEffect(() => {
        window.scrollTo(0, 0);
        
        const handleResize = () => setIsMobile(window.innerWidth <= 872);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div className="upwards-load">
                <div style={{marginTop: '85px'}}>
                    <div className="title">All Works</div>
                </div>
            </div>
            <div className="zoom-load">
                <div style={{marginTop: '20px', display: 'flex', gap: '20px', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'center' : 'flex-start',}}>
                    <SquareCard style={{ backgroundColor: '#D07560' }} onClick={() => {console.log('Card clicked!');}}>
                        <h1>My Card</h1>
                        <p>Some content here.</p>
                    </SquareCard>
                    <RectangleCard style={{ backgroundColor: '#A1918A' }} onClick={() => {console.log('Card clicked!');}}>
                        <h1>My Card</h1>
                        <p>Some content here.</p>
                    </RectangleCard>
                    <SquareCard style={{ backgroundColor: '#0F1A48' }} onClick={() => {console.log('Card clicked!');}}>
                        <h1>My Card</h1>
                        <p>Some content here.</p>
                    </SquareCard>
                </div>
            </div>
        </>
    )
};

export default WorkPage;