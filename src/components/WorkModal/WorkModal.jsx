import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './WorkModal.scss';

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
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    const scrollbarColor = adjustColor(bgColor || '#ffffff', 40); // Lighten by 40%

    return (
        <React.Fragment>
            <motion.div 
                className="modal-overlay" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }} 
                onClick={onClose} 
            />
            <motion.div
                layoutId={layoutId}
                className="work-modal"
                style={{ backgroundColor: bgColor }}
            >
                <div 
                    className="modal-content"
                    style={{ '--scrollbar-color': scrollbarColor }}
                >
                    <button className="close-button" onClick={onClose}>
                        &times;
                    </button>
                    <div className="modal-body">
                        {children}
                    </div>
                </div>
            </motion.div>
        </React.Fragment>
    );
};

export default WorkModal;
