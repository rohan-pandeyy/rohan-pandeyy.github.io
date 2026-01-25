import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ImageWithSkeleton = ({ src, alt, className, style, skeletonHeight, ...props }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const handleImageLoad = () => {
        setIsLoaded(true);
    };

    return (
        <div 
            className={`image-skeleton-wrapper ${className || ''}`} 
            style={{ position: 'relative', display: 'block', overflow: 'hidden', ...style }}
        >
            {!isLoaded && (
                <div style={{ 
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    width: '100%', 
                    height: '100%', 
                    zIndex: 1 
                }}>
                    <Skeleton height="100%" style={{ display: 'block', height: '100%' }} />
                </div>
            )}
            <img 
                src={src} 
                alt={alt} 
                onLoad={handleImageLoad}
                style={{ 
                    display: 'block',
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    opacity: isLoaded ? 1 : 0,
                    transition: 'opacity 0.5s ease-in-out'
                }}
                {...props}
            />
        </div>
    );
};

export default ImageWithSkeleton;
