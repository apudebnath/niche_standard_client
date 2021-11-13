import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const NotFound = () => {
    return (
        <Box style={{background: '#2B7A78', pt:10, height: '100vh'}}>
            <Container sx={{pt:8}}>
                <Grid sx={{display:'flex', alignItems: 'center', justifyContent:'center'}}>
                    <Box sx={{pt:8}}>
                         <Typography variant="h2" sx={{color: '#ffffff'}}>404</Typography>
                         <Typography variant="h4"sx={{color: '#ffffff'}} >Page not found!!! You are looking for. Please Try again. </Typography>
                    </Box>
                </Grid>
            </Container>
        </Box>
    );
};

export default NotFound;