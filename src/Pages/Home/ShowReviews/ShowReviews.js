import { Container, Grid, Paper, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const ShowReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])

    return (
        <Container sx={{my: '60px'}}>
            <Typography variant="h4" sx={{pb:'30px'}}>Show Reviews</Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {
                        reviews.map(review => <Grid item xs={12} md={12}>
                            <Paper sx={{padding: '20px', mb: 3}} >
                                <Typography variant="subtitle1" gutterBottom component="div" sx={{fontSize: '20px', fontWeight: '300', color: 'gray', pt:5}}>
                                    {review.review}
                                </Typography>
                                <Rating
                                name="read-only"
                                value={review.value}
                                /> 
                                <Typography variant="subtitle1" gutterBottom component="div" sx={{fontSize: '18px', color: '', textAlign: 'right', pr: 8}}>
                                    - {review.name}
                                </Typography> 
                            </Paper>
                        </Grid>)
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default ShowReviews;