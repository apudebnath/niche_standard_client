import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Product from '../Product/Product';

const Products = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://damp-waters-43374.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setItems(data))
    }, [])
          
    return (
        <Container sx={{my: 5}}>
            <Typography variant="h4">Ancient Pottery Products</Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} sx={{my: 5}}>
                    {
                        items.slice(0,6).map(product => <Product
                          key={product._id}
                          product={product}
                        />)
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default Products;