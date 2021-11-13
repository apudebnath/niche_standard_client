import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Product = ({product}) => {
    const {title, price, description, origin} = product;
    return (
            <Grid item xs={12} sm={6} md={4} 
            key={product.title}>
            <Paper elevation={3} sx={{py:3}}>
                <Typography variant="h6" gutterBottom component="div">
                    {product.title}
                </Typography> 
                <Typography variant="h6" gutterBottom component="div">
                    {product.price}
                </Typography> 
                <Typography variant="p" gutterBottom component="div">
                    {product.description}
                </Typography>
                <NavLink
                    to="/purchase"
                    style={{textDecoration: "none"}}>
                    <Button variant="contained">Buy Now</Button>
                </NavLink> 
            </Paper>
        </Grid>
    );
};

export default Product;