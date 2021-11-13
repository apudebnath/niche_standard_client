import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';


const Product = ({product}) => {
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

    //const {title, image, price, description, origin} = product;
    return (
            <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{pb:3, borderRadius: '5px'}}>
                <img  style={{ width: '100%', objectFit:'cover', borderRadius: '5px'}} src={product.image} alt=""/>
                <Typography variant="h5" gutterBottom component="div" sx={{pt: 2}}>
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
                    <Button variant="contained" className={buyButton} >Buy Now</Button>
                </NavLink> 
            </Paper>
        </Grid>
    );
};

export default Product;