import React, { useState, useEffect } from 'react';
import './index.scss';
import { RectangleCard } from '../../components/Card/cardSizes';
import { IPhoneSimulator } from './AllWorkCards/IPhoneSimulator';
import { CloakedAuthority } from '../WorksPage/AllWorkCards/CloakedAuthority';

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
                    <IPhoneSimulator />
                    <RectangleCard style={{ backgroundColor: '#A1918A' }} onClick={() => {console.log('Card clicked!');}}>
                        <h1>My Card</h1>
                        <p>Some content here.</p>
                    </RectangleCard>
                    <CloakedAuthority />
                </div>
            </div>
        </>
    )
};

export default WorkPage;