// pages/index.tsx
import React from 'react';
import Header from '../components/layout/Header';
import { Container, Typography } from '@mui/material';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Container>
        <Typography variant="h3">Home Page</Typography>
      </Container>
    </div>
  );
};

export default Home;
