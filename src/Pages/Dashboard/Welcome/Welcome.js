import { Container, Typography } from '@mui/material';
import React from 'react';

const Welcome = () => {
    return (
        <Container sx={{my:8, pb:8}}>
            <Typography variant="h3" sx={{py:8, color: '#3AAFA9'}}>Welcome to Dashboard</Typography>
        </Container>
    );
};

export default Welcome;