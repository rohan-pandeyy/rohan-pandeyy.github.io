import react, { useState } from 'react';
import { RectangleCard } from '../../../components/Card/cardSizes';
import DriveGuardianGif from '../../../assets/videos/Drive-Guardian-Video.gif';
import DriveGuardianStatic from '../../../assets/videos/Drive-Guardian-Static.png';
import './card.scss';

export const DriveGuardian = () => {
    const [gifKey, setGifKey] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        // bump key so browser reloads GIF fresh each time
        setGifKey(prev => prev + 1);
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <RectangleCard
            style={{ backgroundColor: '#A1918A' }}
            className="project-rectangle-card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {isHovered ? (
                <img
                    key={gifKey} // forces reload
                    className="project-video"
                    src={`${DriveGuardianGif}?${gifKey}`}
                    alt="Drive Guardian Demo"
                />
            ) : (
                <img
                    className="project-video"
                    src={DriveGuardianStatic}
                    alt="Drive Guardian Static"
                />
            )}
            <div className="project-info">
                <p>— Automatic Braking System</p>
                <h1>Drive Guardian</h1>
            </div>
        </RectangleCard>
    );
};
