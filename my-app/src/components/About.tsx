import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const About: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#f4f4f4', padding: '50px 0' }} id="about">
      <Container>
        <Typography variant="h3" sx={{ marginBottom: '20px' }}>About Me</Typography>
        <Typography variant="body1">
          I'm a passionate web developer with a love for creating innovative and user-friendly applications. I specialize in front-end development using modern frameworks like React.
        </Typography>
      </Container>
    </Box>
  );
}

export default About;
