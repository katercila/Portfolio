// src/App.js
import React, { useRef } from "react";
import { AppBar, Toolbar, Button, Container, Typography } from "@mui/material";
import { Link } from "react-scroll"; // For smooth scrolling

function App() {
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      {/* Navbar */}
      <AppBar position="sticky">
        <Toolbar>
          <Button color="inherit" component={Link} to="home" smooth={true} spy={true}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="about" smooth={true} spy={true}>
            About
          </Button>
          <Button color="inherit" component={Link} to="projects" smooth={true} spy={true}>
            Projects
          </Button>
          <Button color="inherit" component={Link} to="contact" smooth={true} spy={true}>
            Contact
          </Button>
        </Toolbar>
      </AppBar>

      {/* Sections */}
      <section id="home" ref={homeRef}>
        <Container sx={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Typography variant="h2">Welcome to My Portfolio</Typography>
        </Container>
      </section>

      <section id="about" ref={aboutRef}>
        <Container sx={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Typography variant="h3">About Me</Typography>
        </Container>
      </section>

      <section id="projects" ref={projectsRef}>
        <Container sx={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Typography variant="h3">My Projects</Typography>
        </Container>
      </section>
 
      <section id="contact" ref={contactRef}>
        <Container sx={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Typography variant="h3">Contact Me</Typography>
        </Container>
      </section>
    </div>
  );
}

export default App;

