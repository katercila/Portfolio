import React from 'react';
import './App.css';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-scroll'; // React scroll import
import About from './components/About';
import Portfolio from './components/Portfolio';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';  // Import the new Home component

const App: React.FC = () => {
  return (
    <div>
      <AppBar position="sticky" sx={{ backgroundColor: 'white' }}>
        <Toolbar>
          <Button sx={{ color: 'black', '&:hover': { color: 'grey' } }} component={Link} to="home" smooth={true}>Home</Button>
          <Button sx={{ color: 'black', '&:hover': { color: 'grey' } }} component={Link} to="about" smooth={true}>About</Button>
          <Button sx={{ color: 'black', '&:hover': { color: 'grey' } }} component={Link} to="portfolio" smooth={true}>Portfolio</Button>
          <Button sx={{ color: 'black', '&:hover': { color: 'grey' } }} component={Link} to="projects" smooth={true}>Projects</Button>
          <Button sx={{ color: 'black', '&:hover': { color: 'grey' } }} component={Link} to="contact" smooth={true}>Contact</Button>
        </Toolbar>
      </AppBar>

      <Home /> 
      <About />
      <Portfolio />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
