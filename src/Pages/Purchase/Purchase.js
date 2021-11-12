import { Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import img from '../../images/order.png'

const Purchase = () => {
    const {user, loading} = useAuth();
    const basicInfo = {userName: user.displayName, email: user.email, phone: '',  }
    const [orderInfo, setOrderInfo] = useState(basicInfo);
    
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newOrder = {...orderInfo}
        newOrder[field] = value;
        console.log(newOrder)
        setOrderInfo(newOrder);
    }
    const handlePurchaseSubmit = e => {
        e.preventDefault();
        //Collect Data
        const orderData = {
            ...orderInfo,
            status: 'Pending',
        }
        // Send Data to Database
        fetch('http://localhost:5000/orders',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Order submit successfully.')
            }
            console.log(data);
        })
        e.target.reset();
    }
    if(loading){
        return <CircularProgress/>
    }
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h4" sx={{my:5}}>Welcome to Purchase</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={6}>
                        <Typography variant="h6"
                            component="div"
                            sx={{mb:3}}>
                            Please Fill-up the information
                        </Typography>
                        <form onSubmit={handlePurchaseSubmit}>
                            <TextField
                                sx={{width: '60%', mb:1}}
                                required
                                label="Your Name"
                                id="outlined-size-small"
                                size="small"
                                name= 'userName'
                                type= 'text'
                                defaultValue={user.displayName}
                                onBlur= {handleOnBlur}
                                variant="standard"
                            />
                            <TextField
                                sx={{width: '60%', mb:1}}
                                required
                                label="Your Email"
                                id="outlined-size-small"
                                size="small"
                                name= 'email'
                                type= 'email'
                                defaultValue={user.email}
                                onBlur= {handleOnBlur}
                                variant="standard"
                            />
                            <TextField
                                sx={{width: '60%', mb:1}}
                                required
                                label="Your Phone"
                                id="outlined-size-small"
                                size="small"
                                name= 'phone'
                                type= 'text'
                                onBlur= {handleOnBlur}
                                variant="standard"
                            />
                            <TextField
                                sx={{width: '60%', mb:1}}
                                required
                                label="Your City"
                                id="outlined-size-small"
                                size="small"
                                name= 'city'
                                type= 'text'
                                onBlur= {handleOnBlur}
                                variant="standard"
                            />
                            <TextField
                                sx={{width: '60%', mb:1}}
                                required
                                label="Your Address"
                                id="outlined-size-small"
                                size="small"
                                name= 'address'
                                type= 'text'
                                onBlur= {handleOnBlur}
                                variant="standard"
                            />
                            <TextField
                                sx={{width: '60%', mb:1}}
                                required
                                label="Product Price"
                                id="outlined-size-small"
                                size="small"
                                name= 'price'
                                type= 'text'
                                onBlur= {handleOnBlur}
                                variant="standard"
                            />
                            <Button sx={{width: '60%', m: 1}} variant="contained" type="submit">Purchase</Button>
                      </form>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                        <img src={img} alt="" sx={{width: '100%', objectFit: 'cover'}}/>
                  </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Purchase;