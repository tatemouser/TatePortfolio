import React, { useState, useEffect } from 'react';
import ReactCurvedText from 'react-curved-text';

interface CurvedTextProps {
  text: string;
  link: string;
}

const CurvedText: React.FC<CurvedTextProps> = ({ text, link }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const imageOpacity = windowWidth < 1000 ? 0 : 1;

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '15px',
      width: '200px',
      height: '200px',
      zIndex: 9999,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        position: 'absolute',
        width: '200px',
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'spin-counterclockwise 30s linear infinite',
        opacity: imageOpacity,
        transition: 'opacity 0.3s ease',
      }}>
        <ReactCurvedText
          width={200}
          height={200}
          cx={100}
          cy={100}
          rx={90}
          ry={90}
          startOffset={0}
          reversed={false}
          text={text}
          textProps={{ style: { fontSize: 24, fill: 'black' } }}
        />
      </div>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '150px',
          height: '150px',
          zIndex: 10000,
        }}
      >
        <img 
          src="/github.png" 
          alt="centered" 
          style={{
            width: '90%',
            height: '90%',
            objectFit: 'contain',
            cursor: 'pointer',
            opacity: imageOpacity,
            transition: 'opacity 0.3s ease',
          }}
        />
      </a>
      <style>
        {`
        @keyframes spin-counterclockwise {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(-360deg); }
        }
        `}
      </style>
    </div>
  );
};

export default CurvedText;