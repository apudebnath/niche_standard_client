import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import image from '../../../images/login.png';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {loginWithEmail, loading, user, authError} = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        e.preventDefault();
        loginWithEmail(loginData.email, loginData.password, location, history);
        e.target.reset();

    }
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h4" gutterBottom component="div" sx={{my:5}}>
                    Welcome to Login
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} sx={{mt:5}}>
                        <Typography variant="h6" gutterBottom component="div" sx={{mb:5}}>
                          Login
                        </Typography>
                        {loading ? <CircularProgress/>
                        :
                        <form onSubmit={handleLoginSubmit} >
                        
                            <TextField
                                sx={{width: '60%', mb: 1}} 
                                required
                                label="Your Email"
                                id="outlined-size-small"
                                name="email"
                                type= "email"
                                onBlur={handleOnBlur}
                                size="small"
                            />
                            <TextField
                                sx={{width: '60%', mb: 1}} 
                                required
                                label="Your Password"
                                id="outlined-size-small"
                                name="password"
                                type= "password"
                                onBlur={handleOnBlur}
                                size="small"
                            />
                            <NavLink to="/register" style={{textDecoration: 'none'}}><Button variant="text" sx={{}}>New in Here? Want to Register.</Button></NavLink>
                            <Button variant="contained" type="submit" sx={{width: '60%'}}>Login</Button>
                            {user.email && <Alert severity="success">User Login Successfully.</Alert>}
                            {authError && <Alert severity="error">{authError}</Alert>}
                        </form> }
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <img style={{width: "100%", objectFit: 'cover'}} src={image}  alt=""/>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Login;