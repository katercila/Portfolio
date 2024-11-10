import React from 'react';
import { Container, Typography } from '@mui/material';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio">
      <Container>
        <Typography variant="h3" style={{ marginTop: '100px' }}>My Portfolio</Typography>
        <Typography variant="body1">
          Here are some of my recent projects. Feel free to explore them!
        </Typography>
        {/* Add portfolio items or project showcase */}
      </Container>
    </section>
  );
}

export default Portfolio;
