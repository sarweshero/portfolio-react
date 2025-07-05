import React from 'react';
import { Box } from '@mui/material';

export default function Toggler({ darkMode, handleClick }) {
  const transition = 'all 250ms ease';

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
    <Box
      style={tooltipStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Box
        fontSize={'1.5rem'}
        sx={{
          cursor: 'pointer',
          ':hover': { transform: 'translateY(-3px)', transition: transition },
        }}
      >
        {darkMode ? (
          <span onClick={handleClick} aria-label="Full Moon" role="img">
            🌙
          </span>
        ) : (
          <span onClick={handleClick} aria-label="New Moon" role="img">
            🌚
          </span>
        )}
      </Box>
      <span 
        className="tooltip-text"
        style={tooltipTextStyle}
      >
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        <span style={tooltipTextAfterStyle}></span>
      </span>
    </Box>
  );
}
