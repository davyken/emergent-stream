import React from 'react';

const TelegramButton = () => {
  return (
    <a 
      href="https://t.me/Emergingstreambot" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="telegram-btn"
      aria-label="Chat on Telegram"
    >
      <div className="animate-shake">
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="m22 2-7 20-4-9-9-4Z" />
          <path d="M22 2 11 13" />
        </svg>
      </div>
    </a>
  );
};

export default TelegramButton;
