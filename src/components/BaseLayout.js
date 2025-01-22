import React, { useEffect, useState } from 'react';
import Style from './BaseLayout.module.scss';
import Navbar from './Navbar';
import Home from './home/Home';
import About from './about/About';
import Portfolio from './portfolio/Portfolio';
import { Route, Routes } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import ParticlesBg from './particles/ParticlesBg';

export default function BaseLayout() {
  let [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.style.backgroundColor = '#0110';
  }, []);

  return (
    <Box className={Style.dark}>
      <ParticlesBg darkMode={true} />
      <Grid
        container
        display={'flex'}
        flexDirection={'column'}
        minHeight={'100vh'}
        justifyContent={'space-between'}
      >
        <Grid item>
          <Navbar darkMode={true} handleClick={() => {}} />
        </Grid>
        <Grid item flexGrow={1}>
          <Routes>
            <Route exact path={'/'} element={<Home darkMode={true} />} />
            <Route exact path={'/about'} element={<About />} />
            <Route exact path={'/portfolio'} element={<Portfolio />} />
          </Routes>
        </Grid>
        <Grid item>
          <Box
            component={'footer'}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            py={'1.5rem'}
            sx={{ opacity: 0.7 }}
            width={'100%'}
          >
            <p>
              Myself {' '}
              <a href={'https://instagram.com/arunsarwesh_/'}>Sarweshwar </a>
            </p>
            <p>
              A FullStack Developer
            </p>
            <p>&copy; 2025</p>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
