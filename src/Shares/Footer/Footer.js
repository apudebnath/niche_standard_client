import { Container, Grid, IconButton, List, ListItemText, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YoutubeIcon from '@mui/icons-material/YouTube';
import { makeStyles } from '@mui/styles';
import logo from '../../images/logo.png';



function Footer() {
    const useStyle = makeStyles({
        icon: {
            color: '#ffffff!important',
            background: '#2B7A78!important',
            border: '1px solid #2B7A78!important',
            margin: '20px 10px 30px 0',
            '&:hover': {
                background: '#ffffff !important',
                color: '#17252A !important',
                border: '1px solid #17252A !important '
            }
        },
        logoStyle: {
            width: '100%',
        }
    })
    const { icon, logoStyle } = useStyle();
    return (
        <Box sx={{background: '#DEF2F1'}}>
            <Container >
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={3} sx={{ my: 5 }}>
                        <Grid item xs={12} sm={12} md={3}>
                            <List sx={{ mt: 4 }}>
                            <img className={logoStyle} src={logo} alt="" />
                                <Typography sx={{ fontSize: '16px', color: '#17252A', textAlign: 'justify', mb: 1 }}>The Center celebrates the life and work of Antique collection presenting exhibitions, performances, and educational opportunities.</Typography>
                                
                                
                            </List>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3}>
                            <List sx={{ mt: 4 }}>
                            <Typography sx={{ fontSize: '20px', color: '#17252A', mb: 1 }}>Our Gallery</Typography>
                                <ListItemText sx={{ color: '#2B7A78'}}>New Luxembarg</ListItemText>
                                <ListItemText sx={{ color: '#2B7A78'}}>Opera Jone</ListItemText>
                                <ListItemText sx={{ color: '#2B7A78'}}>Lumaira Hill</ListItemText>
                                <ListItemText sx={{ color: '#2B7A78'}}>Sydney Opera hall</ListItemText>
                                <ListItemText sx={{ color: '#2B7A78'}}>Orchesta Mall</ListItemText>
                            </List>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3}>
                            <List sx={{ mt: 4 }}>
                                <Typography sx={{ fontSize: '20px', color: '#17252A', mb: 1 }}>Resources</Typography>
                                <ListItemText sx={{ color: '#2B7A78'}}>Project for new</ListItemText>
                                <ListItemText sx={{ color: '#2B7A78'}}>Project for search</ListItemText>
                                <ListItemText sx={{ color: '#2B7A78'}}>Education Program</ListItemText>
                                <ListItemText sx={{ color: '#2B7A78'}}>Research for collection</ListItemText>
                                <ListItemText sx={{ color: '#2B7A78'}}>Your Interest</ListItemText>
                            </List>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3}>
                            <List sx={{ mt: 4 }}>
                                <Typography sx={{ fontSize: '20px', color: '#17252A', mb: 1 }}>OurAddress</Typography>
                                <ListItemText sx={{ color: '#2B7A78' }}>58/25 York Stain - 1100 NewState</ListItemText>
                                <ListItemText sx={{ color: '#2B7A78', mb: 1 }}>NorthStacs</ListItemText>
                                <ListItemText sx={{ color: '#2B7A78', mb: 1 }}>Tel: 012 2566 333</ListItemText>
                                <ListItemText sx={{ color: '#17252A', mb: 1 }}>ancientpottery.com</ListItemText>
                                
                            </List>
                            <IconButton sx={{mr:1}} className={icon}><FacebookIcon /></IconButton>
                            <IconButton sx={{mr:1}} className={icon}><GoogleIcon /></IconButton>
                            <IconButton sx={{mr:1}} className={icon}><InstagramIcon /></IconButton>
                            <IconButton sx={{mr:1}} className={icon}><YoutubeIcon /></IconButton>
                            <IconButton sx={{mr:1}} className={icon}><TwitterIcon /></IconButton>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Grid sx={{py:3, background: '#17252A' }}>
                <Typography sx={{ color: '#2B7A78'}}>Copyright &copy; {new Date().getFullYear()} || All right reserved by <strong>AncientPottery.com</strong></Typography>
            </Grid>
        </Box>
    );
}

export default Footer;