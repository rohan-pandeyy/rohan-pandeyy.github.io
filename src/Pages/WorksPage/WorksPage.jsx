import React, { useState, useEffect } from 'react';
import { IPhoneSimulator } from './AllWorkCards/IPhoneSimulator';
import { DriveGuardian } from './AllWorkCards/DriveGuardian';
import { CloakedAuthority } from './AllWorkCards/CloakedAuthority';

const WorksPage = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 872);

    useEffect(() => {
        window.scrollTo(0, 0);
        
        const handleResize = () => setIsMobile(window.innerWidth <= 872);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div className="animate-[slide-up_0.5s_ease-out]">
                <div className="mt-[85px]">
                    <div className="text-primary font-bold text-center w-full font-dm-sans not-italic leading-[0.85] text-[16.7vw]">All Works</div>
                </div>
            </div>
            <div className="animate-[scale-in_0.5s_ease-out]">
                <div className={`mt-5 flex gap-9 ${isMobile ? 'flex-col items-center' : 'flex-row items-start'}`}>
                    <IPhoneSimulator />
                    <DriveGuardian />
                    <CloakedAuthority />
                </div>
            </div>
        </>
    )
};

export default WorksPage;