import React from 'react';

const NameLogo = ({ size = 45 }) => {
  return (
    <div className="logo-wrapper" style={{ 
      width: size, 
      height: size, 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.1)',
      border: '2px solid rgba(255, 0, 255, 0.5)',
      padding: '5px',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      animation: 'logoPulseGlow 3s infinite ease-in-out',
      position: 'relative'
    }}>
      <div className="logo-inner-glow" style={{
        position: 'absolute',
        inset: '0',
        borderRadius: '50%',
        boxShadow: 'inset 0 0 15px rgba(255, 0, 255, 0.3)',
        pointerEvents: 'none'
      }}></div>
      <svg 
        width={size * 0.8} 
        height={size * 0.8} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF00FF" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>
        </defs>
        
        {/* Double-line stylized NP */}
        {/* N Path */}
        <path 
          d="M20 75V25 L50 60 V25" 
          stroke="url(#logoGradient)" 
          strokeWidth="10" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        <path 
          d="M20 75V25 L50 60 V25" 
          stroke="#0A0A2A" 
          strokeWidth="2" 
        />
        
        {/* P Path - Attached to the common middle bar */}
        <path 
          d="M50 60V75M50 25H70C85 25 85 55 70 55H50" 
          stroke="url(#logoGradient)" 
          strokeWidth="10" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        <path 
          d="M50 60V75M50 25H70C85 25 85 55 70 55H50" 
          stroke="#0A0A2A" 
          strokeWidth="2" 
        />
      </svg>
    </div>
  );
};

export default NameLogo;
