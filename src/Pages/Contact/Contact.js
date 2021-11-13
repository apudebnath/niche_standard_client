import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';

const Contact = () => {
    const useStyle = makeStyles({
        regButton: {
            background: '#17252A !important',
            color: '#ffffff !important',
            border: '1px solid #17252A !important ',
            marginTop: '10px!important',
            padding: '5px 30px!important',
            fontSize: '20px!important',
            fontWeight: '400!important',
            '&:hover': {
                background: '#ffffff !important',
                color: '#17252A !important',
                border: '1px solid #17252A !important '
            }
        },
    })
    const {regButton} = useStyle();
    return (
        <Box sx={{background: '#2B7A78', py:8}}>
            <Container maxwidth="md">
                <Grid  sx={{mb:5}}>
                    <Typography variant="h5">Contact Us</Typography>
                    <Typography variant="h3" sx={{color: '#fff'}}>Always Connect with Us</Typography>
                    <Typography variant="subtitle2" sx={{color: '#3AAFA9', fontSize: '18px'}}>We'll keep you posted on upcoming events at the Ancient Pottery center for the Arts!</Typography>
                    <Box>
                        <form>
                            <TextField 
                               sx={{width: '55%', mb:1}} 
                               id="standard-basic" 
                               label="Your Email"
                               name="email"
                               type="email" 
                               variant="standard"></TextField>
                            <Button 
                               sx={{width: '55%', m: 1 }} 
                               className={regButton} 
                               type="submit">Register</Button>
                        </form>
                    </Box>

                </Grid>
            </Container>
        </Box>
    );
};

export default Contact;