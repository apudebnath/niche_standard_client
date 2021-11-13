import { Button, CircularProgress, Container, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const AddAProduct = () => {
    const { loading } = useAuth();
    const [product, setProduct] = useState({});
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProduct = {...product};
        newProduct[field] = value;
        setProduct(newProduct);
    }
    const handleProductSubmit = e => {
        e.preventDefault();
        const productData = {...product};

            fetch('https://damp-waters-43374.herokuapp.com/products', {
                method:'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(productData)
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
        <Container sx={{mb: 8}}>
            <h2>Add  a  Product</h2>
            
            <Box sx={{ flexGrow: 1, mt:5 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={12} >
                        <form onSubmit={handleProductSubmit}>
                            <TextField
                            sx={{width: '55%', mb:1}} 
                            id="standard-basic" 
                            label="Product Title"
                            name="title"
                            type="text" 
                            onBlur={handleOnBlur}
                            variant="standard" 
                            />
                            <TextField
                            sx={{width: '55%', mb:1}} 
                            id="standard-basic" 
                            label="Product Description"
                            name="description"
                            type="text"
                            onBlur={handleOnBlur} 
                            variant="standard" 
                            />
                            <TextField
                            sx={{width: '55%', mb:1}} 
                            id="standard-basic" 
                            label="Product Image url"
                            name="image"
                            type="url"
                            onBlur={handleOnBlur} 
                            variant="standard" 
                            />
                            <TextField
                            sx={{width: '55%', mb:1}} 
                            id="standard-basic" 
                            label="Product Price"
                            name="price"
                            type="number" 
                            onBlur={handleOnBlur}
                            variant="standard" 
                            />
                            <TextField
                            sx={{width: '55%', mb:1}} 
                            id="standard-basic" 
                            label="Product Origin"
                            name="origin"
                            type="text"
                            onBlur={handleOnBlur} 
                            variant="standard" 
                            />
                            <Button sx={{width: '55%', m: 1, background: '#17252A'}} variant="contained" type="submit">Add Product</Button>
                        </form>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default AddAProduct;