import React from 'react';

const StreamButton = () => {
  return (
    <a 
      href="https://emerging.onrender.com" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="stream-btn"
      style={{ background: '#C9A84C' }}
      aria-label="Access EmergingStream"
    >
      <div className="animate-shake">
        <svg 
          width="28" 
          height="28" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="#0a0800" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <polygon points="5 3 19 12 5 21 5 3" fill="#0a0800"></polygon>
        </svg>
      </div>
    </a>
  );
};

export default StreamButton;
