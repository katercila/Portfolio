import React from 'react';
import './App.css';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { Link } from 'react-scroll'; // React scroll import
import About from './components/About';
import Portfolio from './components/Portfolio';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div>
      {/* Navbar */}
      <AppBar position="sticky" className='custome-navbar'>
        <Toolbar>
          <Button color="inherit" component={Link} to="home" smooth={true}>Home</Button>
          <Button color="inherit" component={Link} to="about" smooth={true}>About</Button>
          <Button color="inherit" component={Link} to="portfolio" smooth={true}>Portfolio</Button>
          <Button color="inherit" component={Link} to="projects" smooth={true}>Projects</Button>
          <Button color="inherit" component={Link} to="contact" smooth={true}>Contact</Button>
        </Toolbar>
      </AppBar>

      {/* Sections */}
      <section id="home">
        <div style={{ padding: '50px', textAlign: 'center' }}>
          <Typography variant="h2">Katerin Ercila Fernandez</Typography>
        </div>
        <div style={{ padding: '10px', textAlign: 'center' }}>
          <Typography variant="h3">Software Engineer</Typography>
        </div>
      </section>

      <About />
      <Portfolio />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;