import React from 'react';

function IconLink(props) {
  const { link, title, icon } = props;
  
  const tooltipStyle = {
    position: 'relative',
    display: 'inline-block',
  };

  const tooltipTextStyle = {
    visibility: 'hidden',
    width: '140px',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    color: '#fff',
    textAlign: 'center',
    borderRadius: '6px',
    padding: '8px 12px',
    position: 'absolute',
    zIndex: 1001,
    bottom: '125%',
    left: '50%',
    marginLeft: '-70px',
    opacity: 0,
    transition: 'opacity 0.3s ease, visibility 0.3s ease',
    fontSize: '13px',
    fontWeight: 'normal',
    boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
    whiteSpace: 'nowrap',
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
        href={link} 
        target={'_blank'} 
        rel="noopener noreferrer"
        style={{ 
          transition: 'transform 0.2s ease, color 0.2s ease',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <i className={icon} /> {title}
      </a>
      <span 
        className="tooltip-text"
        style={tooltipTextStyle}
      >
        Click to view {title.toLowerCase()}
        <span style={tooltipTextAfterStyle}></span>
      </span>
    </div>
  );
}

export default IconLink;
