import { Button, Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box, fontWeight } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';

const image=('https://i.ibb.co/WvWcZgV/banner.png') ;

const TopBanner = () => {
    const useStyle = makeStyles({
        exploreButton: {
            background: '#17252A !important',
            color: '#ffffff !important',
            border: '1px solid #17252A !important ',
            marginTop: '10px!important',
            padding: '10px 30px!important',
            fontSize: '20px!important',
            fontWeight: '400!important',
            '&:hover': {
                background: '#ffffff !important',
                color: '#17252A !important',
                border: '1px solid #17252A !important '
            }
        },
    })
    const {exploreButton} = useStyle();

    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} sx={{py:5}}>
                  <Grid item xs={12} sm={12} md={6} style={{display:'flex', justifyContent: 'left', alignItems: 'center'}}>
                     <Box style={{textAlign: 'left'}}>
                        <Typography variant="h2" style={{textAlign: 'left'}}>Welcome to the Ancient Pottery for the Arts</Typography>
                        <Typography variant="h6" style={{textAlign: 'left', color: '#2B7A78'}}>The Center celebrates the life and work of Antique collection presenting exhibitions, performances, and educational opportunities.</Typography>
                        <NavLink  to="/purchase" style={{textDecoration: "none",}}>
                            <Button className={exploreButton} >EXPLORE</Button>
                        </NavLink>
                     </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                    <img style={{width: '100%'}} src={image} alt=""/>
                  </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default TopBanner;