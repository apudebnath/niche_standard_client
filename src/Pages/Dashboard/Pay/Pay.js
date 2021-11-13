import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

const Pay = () => {
    return (
        <Container sx={{my:8}}>
            <Grid sx={{mb:8}}>
                <Typography variant="h3">Pay</Typography>
                <Typography variant="h5" sx={{py:5}}>PayMent System Comming Soon.</Typography>
            </Grid>
        </Container>
    );
};

export default Pay;