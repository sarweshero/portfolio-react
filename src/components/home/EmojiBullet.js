import React from 'react';
import { Box } from '@mui/material';

function EmojiBullet(props) {
  const { emoji, text } = props;

  const tooltipStyle = {
    position: 'relative',
    display: 'inline-block',
  };

  const tooltipTextStyle = {
    visibility: 'hidden',
    width: '160px',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    color: '#fff',
    textAlign: 'center',
    borderRadius: '6px',
    padding: '8px 12px',
    position: 'absolute',
    zIndex: 1001,
    bottom: '125%',
    left: '50%',
    marginLeft: '-80px',
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

  const getEmojiTooltip = (emoji) => {
    const emojiMap = {
      '🚀': 'Innovation & Leadership',
      '💻': 'Technical Expertise',
      '📧': 'Contact Information',
      '🌐': 'Global Solutions',
      '🤚': 'Welcome Greeting',
    };
    return emojiMap[emoji] || 'Professional Info';
  };

  return (
    <Box
      component={'li'}
      fontSize={'1rem'}
      lineHeight={1.5}
      style={{ cursor: 'default', display: 'flex', alignItems: 'center' }}
    >
      <Box
        component={'span'}
        aria-label="info icon"
        role="img"
        mr={{ xs: '0.5rem', md: '1rem' }}
        fontSize={'1.5rem'}
        style={tooltipStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {emoji}
        <span 
          className="tooltip-text"
          style={tooltipTextStyle}
        >
          {getEmojiTooltip(emoji)}
          <span style={tooltipTextAfterStyle}></span>
        </span>
      </Box>
      {text}
    </Box>
  );
}

export default EmojiBullet;
