import { Button, Container, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const {token} = useAuth();
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        e.preventDefault();
        const user = {email};
        const url = 'https://damp-waters-43374.herokuapp.com/users/admin';
        fetch(url, {
            method: 'PUT',
            headers: {
                'authorization' : `Bearer ${token}`,
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0 ){
                alert('Admin Created Successfully.')
            }
        })
        e.target.reset();
    }
    return (
        <Container sx={{my: 8}}>
            <h2>Make Admin</h2>
            <Box sx={{ flexGrow: 1 , py: 10}}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <form onSubmit={handleAdminSubmit}>
                            <TextField
                               sx={{width: "60%", mb: 2}}
                               label="Email"
                               type="email"
                               variant="standard"
                               onBlur={handleOnBlur}
                            ></TextField>
                            <Button sx={{background: '#17252A'}} type="submit" variant="contained">Make Admin</Button>
                        </form>
                    </Grid>
                </Grid>
            </Box>
            
        </Container>
    );
};


export default MakeAdmin;