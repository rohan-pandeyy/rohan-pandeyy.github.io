import React from 'react';
import { motion } from 'framer-motion';
import './WorkModal.scss';

const WorkModal = ({ layoutId, onClose, bgColor, children }) => {
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
                <div className="modal-content">
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
