import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import image from '../../../images/login.png';

const Register = () => {
    const [registerData, setRegisterData] = useState({});
    const {registerUserWithEmail, loading, user, authError} = useAuth();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = {...registerData};
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
    }

    const handleRegister = e => {
        e.preventDefault();
        if(registerData.password !== registerData.password2){
            alert('Your password did not match! Please try again with correct password.')
            return;
        }
        registerUserWithEmail(registerData.email, registerData.password, registerData.name, history);
        e.target.reset();
    }
    return (
        <Container>
            <Box sx={{flexGrow: 1}}>
                <Typography variant="h4" gutterBottom component="div" sx={{my:5}}>
                    Welcome to Registration
                </Typography>
                <Grid container spacing={2} sx={{mt: 5}}>
                    <Grid item xs={12} sm={12} md={6} >
                        <Typography variant="h6" gutterBottom component="div" sx={{mb:3}}>
                            Register
                        </Typography>
                        {loading ?  <CircularProgress/>
                        :
                        <form onSubmit={handleRegister} >
                            <TextField
                                sx={{width: '60%', mb:1}}
                                required
                                label="Your Name"
                                id="outlined-size-small"
                                size="small"
                                name= 'name'
                                type= 'text'
                                onBlur= {handleOnBlur}
                            />
                            <TextField
                                sx={{width: '60%', mb:1}}
                                required
                                label="Your Email"
                                id="outlined-size-small"
                                size="small"
                                name= 'email'
                                type= 'email'
                                onBlur= {handleOnBlur}
                            />
                            <TextField
                                sx={{width: '60%', mb:1}}
                                required
                                label="Your Password"
                                id="outlined-size-small"
                                size="small"
                                name= 'password'
                                type= 'password'
                                onBlur= {handleOnBlur}
                            />
                            <TextField
                                sx={{width: '60%', mb: 1}}
                                required
                                label="Confirm Password"
                                id="outlined-size-small"
                                size="small"
                                name= 'password2'
                                type= 'password'
                                onBlur= {handleOnBlur}
                            />
                            
                            <NavLink to="/login" style={{textDecoration: 'none'}}>
                                <Button>Already Register? Please Login.</Button>
                            </NavLink>
                            <Button sx={{width: '60%', m: 1}} variant="contained" type="submit">Register</Button>
                        </form>}
                         
                        {user.email && <Box>
                            <Alert severity="success">
                                <AlertTitle>Success</AlertTitle>
                                <strong>Congratulations</strong> for your Registration check it out!
                            </Alert>
                        </Box>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                         <img src={image} alt="" sx={{width: '100%', objectFit: 'cover'}}/>
                    </Grid>
                </Grid>
            </Box>           
        </Container>
    );
};

export default Register;