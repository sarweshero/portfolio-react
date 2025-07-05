import React from 'react';

function SocialIcon(props) {
  const { link, icon, label } = props;
  
  const tooltipStyle = {
    position: 'relative',
    display: 'inline-block',
  };

  const tooltipTextStyle = {
    visibility: 'hidden',
    width: '120px',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    color: '#fff',
    textAlign: 'center',
    borderRadius: '6px',
    padding: '8px',
    position: 'absolute',
    zIndex: 1001,
    bottom: '125%',
    left: '50%',
    marginLeft: '-60px',
    opacity: 0,
    transition: 'opacity 0.3s ease, visibility 0.3s ease',
    fontSize: '14px',
    fontWeight: 'normal',
    boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
  };

  const tooltipTextAfterStyle = {
    content: '""',
    position: 'absolute',
    top: '100%',
    left: '50%',
    marginLeft: '-5px',
    borderWidth: '5px',
    borderStyle: 'solid',
    borderColor: 'rgba(0, 0, 0, 0.9) transparent transparent transparent',
  };

  const handleMouseEnter = (e) => {
    const tooltip = e.currentTarget.querySelector('.tooltip-text');
    if (tooltip) {
      tooltip.style.visibility = 'visible';
      tooltip.style.opacity = '1';
    }
  };

  const handleMouseLeave = (e) => {
    const tooltip = e.currentTarget.querySelector('.tooltip-text');
    if (tooltip) {
      tooltip.style.visibility = 'hidden';
      tooltip.style.opacity = '0';
    }
  };

  return (
    <div 
      style={tooltipStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a 
        target="_blank" 
        aria-label={label} 
        rel="noopener noreferrer" 
        href={link}
        style={{ 
          transition: 'transform 0.2s ease, color 0.2s ease',
          display: 'inline-block'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px) scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
        }}
      >
        <i className={icon} aria-hidden="true" />
      </a>
      <span 
        className="tooltip-text"
        style={tooltipTextStyle}
      >
        {label.charAt(0).toUpperCase() + label.slice(1)}
        <span style={tooltipTextAfterStyle}></span>
      </span>
    </div>
  );
}

export default SocialIcon;
