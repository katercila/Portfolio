import React from 'react';
import { Container, Typography } from '@mui/material';

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <Container>
        <Typography variant="h3" style={{ marginTop: '100px' }}>My Projects</Typography>
        <Typography variant="body1">
          This section contains some of my personal and professional projects.
        </Typography>
        {/* Add a list of projects with links or images */}
      </Container>
    </section>
  );
}

export default Projects;
