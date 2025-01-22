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
  },
  {
    name: info.Aboutme,
    type: 'initials',
    to: '/about',
    active: 'about',
  },
  {
    name: info.Portfolio,
    type: 'initials',
    to: '/portfolio',
    active: 'portfolio',
  },
];

export default function Navbar() {
  const location = useLocation();
  const [active, setActive] = useState(
    location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length),
  );

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
          >
            <Link to={link.to} onClick={() => setActive(link.active)} className={Style.link}>
              {!link.type && link.name !== 'Portfolio' && <p style={{ padding: '0.5rem 0' }}>{link.name}</p>}
              {link.type && <h1>{link.name}</h1>}
              {link.name === 'Portfolio' && <i className="fas fa-briefcase" style={{ fontSize: '1.5rem' }}></i>}
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
