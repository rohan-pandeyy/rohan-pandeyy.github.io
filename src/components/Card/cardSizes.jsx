import './cardSizes.scss';

const RectangleCard = ({ children, style, onClick, disableHover }) => {
    const cardClass = `rectangle-card ${disableHover ? 'no-hover' : ''}`;
    return (
        <div className={cardClass} style={style} onClick={onClick}>
            {children}
        </div>
    );
};

export { RectangleCard };

const SquareCard = ({ children, style, onClick, disableHover }) => {
    const cardClass = `square-card ${disableHover ? 'no-hover' : ''}`;
    return (
        <div className={cardClass} style={style} onClick={onClick}>
            {children}
        </div>
    );
};

export { SquareCard };

const WelcomeCard = ({ children }) => {
    return (
        <div className="welcome-card">
            {children}
        </div>
    );
};

export { WelcomeCard };