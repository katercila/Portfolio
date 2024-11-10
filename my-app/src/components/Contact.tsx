import React from 'react';
import { Container, Typography } from '@mui/material';

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <Container>
        <Typography variant="h3" style={{ marginTop: '100px' }}>Contact Me</Typography>
        <Typography variant="body1">
          Feel free to reach out to me via email or social media for any inquiries or collaborations.
        </Typography>
        {/* Add contact form or social media links */}
      </Container>
    </section>
  );
}

export default Contact;
