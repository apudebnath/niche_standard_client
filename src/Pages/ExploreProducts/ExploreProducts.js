import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const ExploreProducts = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setItems(data))
    }, [])
    return (
        <Container>
            <h2>The Ancient Pottery Products</h2>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {
                        items.slice(0,10).map(product => <Grid item xs={12} sm={6} md={4} 
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
                        )
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default ExploreProducts;