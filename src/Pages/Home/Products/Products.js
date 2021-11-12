import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const products = [
    {
        title: 'The Ancient Pottery',
        price: 199,
        review: 5,
        area: 'Mesopotemia',
        description: '‍There are four basic types of pottery, porcelain, stoneware, earthenware,and Bone China.',
    },
    {
        title: 'The China Pottery',
        price: 129,
        review: 4.8,
        area: 'Gulf',
        description: '‍There are four basic types of pottery, porcelain, stoneware, earthenware,and Bone China.',
    },
    {
        title: 'The Royal Pottery',
        price: 155,
        review: 4.5,
        area: 'Bay of Bangle',
        description: '‍There are four basic types of pottery, porcelain, stoneware, earthenware,and Bone China.',
    },
    {
        title: 'The Stoneware Pottery',
        price: 1119,
        review: 5,
        area: 'Horoppa',
        description: '‍There are four basic types of pottery, porcelain, stoneware, earthenware,and Bone China.',
    },
    {
        title: 'The Earthenware Pottery',
        price: 155,
        review: 4.9,
        area: 'Mesopotemia',
        description: '‍There are four basic types of pottery, porcelain, stoneware, earthenware,and Bone China.',
    },
    {
        title: 'The Bone Pottery',
        price: 139,
        review: 5,
        area: 'Native America',
        description: '‍There are four basic types of pottery, porcelain, stoneware, earthenware,and Bone China.',
    },
]
const Products = () => {
    return (
        <Container>
            <h2>The Ancient Pottery Products</h2>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {
                        products.map(product => <Grid item xs={12} sm={6} md={4} 
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
                                <NavLink to="/purchase" style={{textDecoration: 'none'}}><Button variant="contained" sx={{}}>Buy Now</Button></NavLink> 
                            </Paper>
                        </Grid>)
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default Products;