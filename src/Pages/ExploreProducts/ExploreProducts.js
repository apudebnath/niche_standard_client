import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const ExploreProducts = () => {
    const [items, setItems] = useState([]);
    const useStyle = makeStyles({
        buyButton: {
            background: '#17252A !important',
            color: '#ffffff !important',
            marginTop: '10px!important',
            padding: '7px 25px!important',
            border: '1px solid #17252A !important ', 
            '&:hover': {
                background: '#ffffff !important',
                color: '#17252A !important',
                border: '1px solid #17252A !important '
            }
        },
})

const {buyButton} = useStyle();

    useEffect(() => {
        fetch('https://damp-waters-43374.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setItems(data))
    }, [])
    return (
        <Container sx={{my:8}}>
            <Typography variant="h4" sx={{py:5}}>The Ancient Pottery Products</Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {
                        items.slice(0,10).map(product => <Grid item xs={12} sm={6} md={4} 
                            key={product.title}>
                                
                            <Paper elevation={3} sx={{pb:3}}>
                                <img  style={{ width: '100%', objectFit:'cover', borderRadius: '5px'}} src={product.image} alt=""/> 
                                <Typography variant="h5" gutterBottom component="div" sx={{pt:2}}>
                                    {product.title}
                                </Typography> 
                                <Typography variant="h6" gutterBottom component="div">
                                    Price: $ {product.price}
                                </Typography> 
                                <Typography variant="p" gutterBottom component="div" sx={{px: 3}}>
                                    {product.description.slice(0,100)}
                                </Typography>
                                <Typography variant="p" gutterBottom component="div" style={{fontSize: '18px'}}>
                                    Origin: <strong>{product.origin}</strong>
                                </Typography>
                                <NavLink
                                    to="/purchase"
                                    style={{textDecoration: "none"}}>
                                    <Button className={buyButton}>Buy Now</Button>
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