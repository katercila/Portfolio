import React from 'react';
import { Typography } from '@mui/material';
import PuddleShape from './PuddleShape';
import './Home.css';

const Home: React.FC = () => {
  return (
    <section id="home">
      <div className='container'>
      <div style={{ padding: '50px', textAlign: 'center' }}>
        <Typography variant="h2">Katerin Ercila Fernandez</Typography>
      </div>
      {/* <div style={{ padding: '10px', textAlign: 'center' }}>
        <Typography variant="h3">Software Engineer</Typography>
      </div> */}
      {/* Add the PuddleShape component with your headshot */}
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
      <PuddleShape 
          color="skyblue" // Use any color you'd like to test
          altText="Katerin Ercila Fernandez" 
        />
      </div>
      </div>
    </section>
  );
}

export default Home;
