import { Container, Grid, IconButton, List, ListItemText, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YoutubeIcon from '@mui/icons-material/YouTube';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
    socialIcon: {
        color: '#17d5ae',
        border: '1px solid #17d5ae',
        margin: '20px 10px 30px 0',
        '&:hover': {
            background: '#17d5ae',
            color: '#fff'
        }
    }
})

const Footer = () => {
    const {socialIcon} = useStyle();
    return (
        <>
            <Container>
               <Box sx={{ flexGrow: 1 }}>
                   <Grid container spacing={3} sx={{my: 5}}>
                       <Grid item xs={12} sm={12} md={3}>
                           <List sx={{mt: 4}}>
                               <ListItemText>Ancient Pottery</ListItemText>
                               <ListItemText>Ancient Pottery</ListItemText>
                               <ListItemText>Ancient Pottery</ListItemText>
                               <ListItemText>Ancient Pottery</ListItemText>
                           </List>
                       </Grid>
                       <Grid item xs={12} sm={12} md={3}>
                           <List sx={{mt: 4}}>
                               <ListItemText>Ancient Pottery</ListItemText>
                               <ListItemText>Ancient Pottery</ListItemText>
                               <ListItemText>Ancient Pottery</ListItemText>
                               <ListItemText>Ancient Pottery</ListItemText>
                           </List>
                       </Grid>
                       <Grid item xs={12} sm={12} md={3}>
                           <List sx={{mt: 4}}>
                               <ListItemText>Ancient Pottery</ListItemText>
                               <ListItemText>Ancient Pottery</ListItemText>
                               <ListItemText>Ancient Pottery</ListItemText>
                               <ListItemText>Ancient Pottery</ListItemText>
                           </List>
                       </Grid>
                       <Grid item xs={12} sm={12} md={3}>
                       <List>
                           <ListItemText sx={{color: '#1805be', mb: 1}}>OurAddress</ListItemText>
                           <ListItemText sx={{}}>558/25 York Stain - 11000 NewState</ListItemText>
                           <ListItemText sx={{mb: 1}}>NorthStacs</ListItemText>
                       </List>
                       <IconButton className={socialIcon}><FacebookIcon/></IconButton>
                       <IconButton className={socialIcon}><GoogleIcon/></IconButton>
                       <IconButton className={socialIcon}><InstagramIcon/></IconButton>
                       <IconButton className={socialIcon}><YoutubeIcon/></IconButton>
                       <IconButton className={socialIcon}><TwitterIcon/></IconButton>
                     </Grid>
                   </Grid>
               </Box>
            </Container>
            <Grid sx={{my: 3}}>
                <Typography>Copyright &copy; {new Date().getFullYear()} || All right reserved by <strong>AncientPottery.com</strong></Typography>
            </Grid>
        </>
    );
};

export default Footer;