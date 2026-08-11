import { useNavigate } from 'react-router-dom';
import { RectangleCard } from '../cardSizes';
import './index.scss';
import me from '../../../assets/images/me.png';

const AboutCard = () => {
  const navigate = useNavigate();
  const handleCardClick = () => navigate('/about');

  return (
    <RectangleCard
      className="About-card"
      style={{ padding: '20px' }}
      mobileBackground="#926bf5"
      onClick={handleCardClick}
    >
      <img className="profile-image" src={me} alt="Me" />
      <h1 className="about-title">Hey, I'm Rohan 👋</h1>

      <div className="tagline-swap" aria-live="polite">
        <p className="tagline tagline--default">Full Stack | IoT | AIML</p>
        <p className="tagline tagline--hover">
          Worked with folks @{" "}
          <a
            href="https://keenheads.com"
            target="_blank"
            rel="noopener noreferrer"
            className="keenheads-link"
            onClick={(e) => e.stopPropagation()}
          >
            Keenheads
          </a>
        </p>
      </div>
    </RectangleCard>
  );
};

export default AboutCard;
