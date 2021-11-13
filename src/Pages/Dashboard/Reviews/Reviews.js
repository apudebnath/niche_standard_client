import { Button, CircularProgress, Container, Grid, Rating, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const Reviews = () => {
    const {user, loading } = useAuth();
    const [review, setReview] = useState({});
    const [value, setValue] = React.useState(4);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReview = {...review };
        newReview[field] = value;
        setReview(newReview);
    }
    const handleProductSubmit = e => {
        e.preventDefault();
        const reviewData = {
            ...review,
            value,
            name:user.displayName,
        };
console.log(reviewData);
            fetch('http://localhost:5000/reviews', {
                method:'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(reviewData)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    alert('Product Uploaded Successfully.')
                }
            })
        e.target.reset();    
        if(loading){
           <CircularProgress/>
        }
    }
    return (
        <>
            <Typography variant="h5" component="legend">Review</Typography>
            <Box sx={{ flexGrow: 1, mt:5 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={12} >
                        <form onSubmit={handleProductSubmit}>
                            <TextField
                            sx={{width: '55%', mb:1}} 
                            id="standard-basic" 
                            label="Product Name"
                            name="title"
                            type="text" 
                            onBlur={handleOnBlur}
                            variant="standard" 
                            />
                            <TextField
                            sx={{width: '55%', mb:1}} 
                            id="standard-basic" 
                            label="Please share your valued experience"
                            name="review"
                            type="text"
                            onBlur={handleOnBlur} 
                            variant="standard" 
                            />
                            <Typography component="legend">Please review</Typography>
                            <Rating
                                sx={{width: '55%', mb:1}} 
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                  setValue(newValue);
                                }}
                            /> 
                            <Button sx={{width: '55%', m: 1}} variant="contained" type="submit">Review Product</Button>
                        </form>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Reviews;