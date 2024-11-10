import React from 'react';
import { Typography } from '@mui/material';

const Home: React.FC = () => {
  return (
    <section id="home">
      <div style={{ padding: '50px', textAlign: 'center' }}>
        <Typography variant="h2">Katerin Ercila Fernandez</Typography>
      </div>
      <div style={{ padding: '10px', textAlign: 'center' }}>
        <Typography variant="h3">Software Engineer</Typography>
      </div>
    </section>
  );
}

export default Home;
