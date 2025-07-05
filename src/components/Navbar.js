import React, { useState } from 'react';
import Style from './Navbar.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import { info } from '../assets/info/Info';

const links = [
  {
    name: info.initials,
    type: 'initials',
    to: '/',
    active: 'home',
    tooltip: 'Home - Welcome to my portfolio'
  },
  {
    name: info.Aboutme,
    type: 'initials',
    to: '/about',
    active: 'about',
    tooltip: 'About Me - Learn more about my background'
  },
  {
    name: info.Portfolio,
    type: 'initials',
    to: '/portfolio',
    active: 'portfolio',
    tooltip: 'Portfolio - View my projects and work'
  },
];

export default function Navbar() {
  const location = useLocation();
  const [active, setActive] = useState(
    location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length),
  );

  const tooltipStyle = {
    position: 'relative',
    display: 'inline-block',
  };

  const tooltipTextStyle = {
    visibility: 'hidden',
    width: '200px',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    color: '#fff',
    textAlign: 'center',
    borderRadius: '6px',
    padding: '8px 12px',
    position: 'absolute',
    zIndex: 1001,
    bottom: '125%',
    left: '50%',
    marginLeft: '-100px',
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
      component={'nav'}
      width={'100%'}
      sx={{
        position: 'relative',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        // backgroundColor: 'white', // Optional: Add background color to avoid overlap issues
      }}
    >
      <Box
        component={'ul'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        gap={{ xs: '2rem', md: '8rem' }}
        fontSize={'1rem'}
      >
        {links.map((link, index) => (
          <Box
            key={index}
            component={'li'}
            className={link.active === active && !link.type && Style.active}
            sx={{ borderImageSource: info.gradient }}
            style={tooltipStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link to={link.to} onClick={() => setActive(link.active)} className={Style.link}>
              {!link.type && link.name !== 'Portfolio' && <p style={{ padding: '0.5rem 0' }}>{link.name}</p>}
              {link.type && <h1>{link.name}</h1>}
              {link.name === 'Portfolio' && <i className="fas fa-briefcase" style={{ fontSize: '1.5rem' }}></i>}
            </Link>
            <span 
              className="tooltip-text"
              style={tooltipTextStyle}
            >
              {link.tooltip}
              <span style={tooltipTextAfterStyle}></span>
            </span>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
