import React, { useState, useEffect, useRef } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ImageWithSkeleton = ({ src, alt, className, style, skeletonHeight, ...props }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const isMountedRef = useRef(true);

    useEffect(() => {
        return () => {
            isMountedRef.current = false;
        };
    }, []);

    const imgRef = useRef(null);

    useEffect(() => {
        if (imgRef.current && imgRef.current.complete) {
            handleImageLoad();
        }
    }, []);

    const handleImageLoad = () => {
        if (isMountedRef.current) {
            setIsLoaded(true);
        }
    };

    const handleImageError = () => {
        if (isMountedRef.current) {
            setIsLoaded(true); // Hide skeleton even if error
        }
    };

    return (
        <div 
            className={`image-skeleton-wrapper ${className || ''}`} 
            style={{ position: 'relative', display: 'block', overflow: 'hidden', ...style }}
            aria-busy={!isLoaded}
            aria-live="polite"
            aria-label={!isLoaded ? "Loading component" : undefined}
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
                    <Skeleton height={skeletonHeight || "100%"} style={{ display: 'block', height: skeletonHeight || '100%' }} />
                </div>
            )}
            <img 
                ref={imgRef}
                src={src} 
                alt={alt} 
                onLoad={handleImageLoad}
                onError={handleImageError}
                style={{ 
                    display: 'block',
                    width: '100%', 
                    height: style && style.height ? '100%' : 'auto', 
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
