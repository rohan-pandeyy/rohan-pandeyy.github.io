import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const adjustColor = (hex, percent) => {
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);

    const amount = Math.abs(percent) / 100;

    if (percent > 0) {
        // Lighten (Lerp to white)
        r = Math.round(r + (255 - r) * amount);
        g = Math.round(g + (255 - g) * amount);
        b = Math.round(b + (255 - b) * amount);
    } else {
        // Darken (Lerp to black)
        r = Math.round(r * (1 - amount));
        g = Math.round(g * (1 - amount));
        b = Math.round(b * (1 - amount));
    }

    const rr = ((r.toString(16).length === 1) ? "0" + r.toString(16) : r.toString(16));
    const gg = ((g.toString(16).length === 1) ? "0" + g.toString(16) : g.toString(16));
    const bb = ((b.toString(16).length === 1) ? "0" + b.toString(16) : b.toString(16));

    return "#" + rr + gg + bb;
};

const WorkModal = ({ layoutId, onClose, bgColor, children }) => {
    useEffect(() => {
        // Prevent background scrolling
        const originalStyle = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = originalStyle;
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    const scrollbarColor = adjustColor(bgColor || '#ffffff', 40); // Lighten by 40%

    return (
        <React.Fragment>
            <motion.div 
                className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-[8px] z-[2999] max-[872px]:z-[800]" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }} 
                onClick={onClose} 
            />
            <motion.div
                layoutId={layoutId}
                className="fixed top-[5vh] left-[5vw] w-[90vw] h-[90vh] rounded-[20px] z-[3000] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] max-[872px]:top-0 max-[872px]:left-0 max-[872px]:w-full max-[872px]:h-full max-[872px]:rounded-none max-[872px]:z-[900]"
                style={{ backgroundColor: bgColor }}
                role="dialog"
                aria-modal="true"
                aria-label="Work details dialog"
            >
                <div 
                    className="custom-scrollbar relative h-full w-full overflow-y-auto"
                    style={{ '--scrollbar-color': scrollbarColor }}
                >
                    <style>{`
                        .custom-scrollbar::-webkit-scrollbar { width: 8px; }
                        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                        .custom-scrollbar::-webkit-scrollbar-thumb { background-color: var(--scrollbar-color); border-radius: 4px; }
                        .custom-scrollbar::-webkit-scrollbar-thumb:hover { filter: brightness(0.9); }
                    `}</style>
                    <button type="button" className="sticky top-9 float-right mr-5 -mb-[60px] bg-black/20 text-white border-none rounded-full w-14 h-14 text-2xl cursor-pointer z-[1001] flex items-center justify-center transition-colors duration-300 hover:bg-black/40 max-[872px]:top-[75px] max-[872px]:mt-5" onClick={onClose} aria-label="Close">
                        &times;
                    </button>
                    <div className="p-10 max-[872px]:p-9 max-[872px]:pt-[120px]">
                        {children}
                    </div>
                </div>
            </motion.div>
        </React.Fragment>
    );
};

export default WorkModal;
