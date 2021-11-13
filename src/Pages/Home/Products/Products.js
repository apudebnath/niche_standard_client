import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Product from '../Product/Product';

const Products = () => {
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