import { useState, useEffect } from 'react';
import './index.scss';
import certificateIcon from '../../assets/icons/icons_certificate.png';

const achievements = [
  // add here when needed
  {
    title: 'Hackground India 2k25',
    image: certificateIcon,
    pdf: 'https://drive.google.com/file/d/1j2GGaxYnzKAznPTMYVJ-GIVlx26lbPGW/preview',
  },
  {
    title: 'First Runner Up - Dubai Institute of Design and Innovation',
    image: certificateIcon,
    pdf: 'https://drive.google.com/file/d/1k4COQj02fT8oj-B9m9NYIifIABazQ1fi/preview',
  },
  // {
  //   title: 'Microsoft Innovate 2025 Hackathon',
  //   image: certificateIcon,
  //   pdf: 'https://drive.google.com/file/d/soon/preview',
  // },
  {
    title: 'Object-Oriented Data Structures in C++ by Illinois UC',
    image: certificateIcon,
    pdf: 'https://drive.google.com/file/d/1haEiT5kb3YUnHoT1cjlhMl2saZMEb3oP/preview',
  },
  {
    title: 'Data Structures by UC San Diego',
    image: certificateIcon,
    pdf: 'https://drive.google.com/file/d/1ofn5r6bp6K8mk8Zsp8ovVW7OVlFi-oUZ/preview',
  },
  {
    title: 'Databases and SQL for Data Science with Python by IBM',
    image: certificateIcon,
    pdf: 'https://drive.google.com/file/d/12tnrlyjEJ273NB2Uf264s85lnvM68nYT/preview',
  },
];

const Achievements = () => {
  const [selectedPdf, setSelectedPdf] = useState(achievements[0].pdf);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 872);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 872);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className="upwards-load">
        <div style={{marginTop: '85px', display: 'flex', gap: '20px', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'center' : 'flex-start',}}>
          <div className="achievements-wrapper">
            {!isMobile && (
              <div className="achievements-sidebar">
                {achievements.map((item, index) => (
                  <div
                    key={index}
                    className={`achievement-thumb ${selectedPdf === item.pdf ? 'active' : ''}`}
                    onClick={() => setSelectedPdf(item.pdf)}
                  >
                    <img src={item.image} alt={item.title} />
                    <div className="overlay">{item.title}</div>
                  </div>
                ))}
              </div>
            )}
            {isMobile ? (
              <div className="achievements-mobile-list">
                {achievements.map((item, index) => (
                  <div key={index} className="mobile-certificate">
                    <p className="mobile-title">{item.title}</p>
                    <iframe
                      title={`Certificate ${index}`}
                      src={item.pdf}
                      className="mobile-pdf"
                      style={{ width: '90vw', height: '60vw', maxHeight: '80vh', minHeight: '300px', border: 'none' }}
                      allowFullScreen
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="achievements-pdf">
                <iframe title="Certificate Viewer" src={selectedPdf} style={{ border: 'none' }} width="100%" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievements;
